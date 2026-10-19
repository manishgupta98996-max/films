import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "out");

// Recursively find all HTML files in out/
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file !== "_next") {
        results = results.concat(getHtmlFiles(filePath));
      }
    } else if (file.endsWith(".html")) {
      results.push(filePath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(OUT_DIR);
console.log(`Found ${htmlFiles.length} HTML files in out/`);

const results = [];
const titles = new Map();
const descriptions = new Map();
const allInternalLinks = [];

for (const filePath of htmlFiles) {
  const relPath = path.relative(OUT_DIR, filePath).replace(/\\/g, "/");
  const html = fs.readFileSync(filePath, "utf-8");

  // Check H1
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h1Count = h1Matches.length;

  // Check Title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (title) {
    if (!titles.has(title)) titles.set(title, []);
    titles.get(title).push(relPath);
  }

  // Check Meta Description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const description = metaDescMatch ? metaDescMatch[1].trim() : null;
  if (description) {
    if (!descriptions.has(description)) descriptions.set(description, []);
    descriptions.get(description).push(relPath);
  }

  // Check Canonical
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;

  // Check Images and Alt text
  const imgMatches = [...html.matchAll(/<img([^>]*)>/gi)];
  const imgsWithoutAlt = [];
  for (const match of imgMatches) {
    const imgAttrs = match[1];
    if (!/alt=["'][^"']+["']/i.test(imgAttrs)) {
      imgsWithoutAlt.push(match[0]);
    }
  }

  // Extract internal links
  const linkMatches = [...html.matchAll(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>/gi)];
  for (const match of linkMatches) {
    const href = match[1];
    if (href.startsWith("/") && !href.startsWith("//")) {
      allInternalLinks.push({ from: relPath, href: href.split("#")[0].split("?")[0] });
    }
  }

  results.push({
    file: relPath,
    h1Count,
    h1: h1Matches[0] ? h1Matches[0].replace(/<[^>]+>/g, "").trim() : null,
    title,
    description,
    canonical,
    imgsCount: imgMatches.length,
    imgsWithoutAltCount: imgsWithoutAlt.length,
  });
}

console.log("\n=== 1. H1 CHECK (Must be exactly 1 per page) ===");
let h1Failed = 0;
for (const r of results) {
  // 404 / _not-found page might have different structure or h1
  if (r.file.includes("404") || r.file.includes("_not-found")) continue;
  if (r.h1Count !== 1) {
    console.error(`FAIL: ${r.file} has ${r.h1Count} H1 tags!`);
    h1Failed++;
  } else {
    console.log(`PASS: ${r.file} -> 1 H1: "${r.h1}"`);
  }
}

if (h1Failed > 0) {
  console.error(`Total H1 failures: ${h1Failed}`);
}

console.log("\n=== 2. TITLE & META DESCRIPTION UNIQUENESS ===");
let dupTitles = 0;
for (const [title, files] of titles.entries()) {
  if (files.length > 1) {
    // 404 and _not-found can share title
    const filtered = files.filter(f => !f.includes("404") && !f.includes("_not-found"));
    if (filtered.length > 1) {
      console.error(`DUPLICATE TITLE: "${title}" shared by: ${filtered.join(", ")}`);
      dupTitles++;
    }
  }
}
if (dupTitles === 0) console.log("PASS: All page titles are unique!");

let dupDescriptions = 0;
for (const [desc, files] of descriptions.entries()) {
  if (files.length > 1) {
    console.error(`DUPLICATE DESCRIPTION: "${desc}" shared by: ${files.join(", ")}`);
    dupDescriptions++;
  }
}
if (dupDescriptions === 0) console.log("PASS: All meta descriptions are unique!");

console.log("\n=== 3. CANONICAL URL CHECK ===");
let missingCanonicals = 0;
for (const r of results) {
  if (r.file.includes("404") || r.file.includes("_not-found")) continue;
  if (!r.canonical) {
    console.error(`FAIL: Missing canonical on ${r.file}`);
    missingCanonicals++;
  } else {
    console.log(`PASS: ${r.file} -> ${r.canonical}`);
  }
}
if (missingCanonicals > 0) {
  console.error(`Total missing canonicals: ${missingCanonicals}`);
}

console.log("\n=== 4. IMAGE ALT TEXT CHECK ===");
let altErrors = 0;
for (const r of results) {
  if (r.imgsWithoutAltCount > 0) {
    console.error(`FAIL: ${r.file} has ${r.imgsWithoutAltCount} images missing alt text`);
    altErrors++;
  }
}
if (altErrors === 0) console.log("PASS: All images have descriptive alt text!");

console.log("\n=== 5. INTERNAL LINK INTEGRITY CHECK ===");
let brokenLinks = 0;
// Map known routes
const knownRoutes = new Set(
  results.map(r => {
    let route = "/" + r.file.replace(/\.html$/, "");
    if (route === "/index") route = "/";
    return route;
  })
);

for (const link of allInternalLinks) {
  let target = link.href;
  if (target === "") target = "/";
  // Check if route exists or route/index exists
  const valid =
    knownRoutes.has(target) ||
    knownRoutes.has(target + "/index") ||
    knownRoutes.has(target.replace(/\/$/, ""));
  if (!valid) {
    console.error(`BROKEN LINK from ${link.from} -> ${link.href}`);
    brokenLinks++;
  }
}
if (brokenLinks === 0) console.log(`PASS: All ${allInternalLinks.length} internal links verified successfully!`);

console.log("\n=== 6. SITEMAP & ROBOTS CHECK ===");
const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
const robotsPath = path.join(OUT_DIR, "robots.txt");
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
  console.log(`PASS: sitemap.xml exists with ${urlCount} indexed URLs.`);
} else {
  console.error("FAIL: out/sitemap.xml does not exist!");
}

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, "utf-8");
  console.log(`PASS: robots.txt exists:\n${robotsContent.trim()}`);
} else {
  console.error("FAIL: out/robots.txt does not exist!");
}

console.log("\n=== 7. SENSITIVE DATA, MEGA LINKS & LARGE ASSETS CHECK ===");
function scanFilesForPattern(dir, pattern) {
  let matches = [];
  const list = fs.readdirSync(dir);
  for (const item of list) {
    if (item === "node_modules" || item === ".git" || item === ".next") continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      matches = matches.concat(scanFilesForPattern(full, pattern));
    } else {
      const content = fs.readFileSync(full, "utf-8");
      if (pattern.test(content)) {
        matches.push(full);
      }
    }
  }
  return matches;
}

// Check for mega links
const megaMatches = scanFilesForPattern(process.cwd(), /mega\.nz|mega\.co\.nz|mega\.io/i);
// Exclude this script itself and CLAUDE.md guidelines which say "The Mega link must never appear"
const filteredMega = megaMatches.filter(m => !m.includes("qa-check") && !m.includes("CLAUDE.md"));
if (filteredMega.length === 0) {
  console.log("PASS: Zero Mega download links found in repo or /out!");
} else {
  console.error(`FAIL: Found Mega links in: ${filteredMega.join(", ")}`);
}

// Check for large video files
function findLargeFiles(dir) {
  let large = [];
  const list = fs.readdirSync(dir);
  for (const item of list) {
    if (item === "node_modules" || item === ".git" || item === ".next") continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      large = large.concat(findLargeFiles(full));
    } else {
      if (/\.(mp4|mov|webm|mkv|avi)$/i.test(item) || stat.size > 25 * 1024 * 1024) {
        large.push({ file: full, sizeMB: (stat.size / (1024 * 1024)).toFixed(2) });
      }
    }
  }
  return large;
}
const largeFiles = findLargeFiles(process.cwd());
if (largeFiles.length === 0) {
  console.log("PASS: Zero large video or binary files (>25MB) found in repo or /out!");
} else {
  console.error("FAIL: Found large files:", largeFiles);
}
