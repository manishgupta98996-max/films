import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

if (!fs.existsSync(BLOG_DIR)) {
  console.log("No content/blog directory found. Skipping check.");
  process.exit(0);
}

const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
let hasErrors = false;

console.log(`Checking ${files.length} blog posts for compliance...`);

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  // Drafts are excluded from publication and marker checks
  if (data.draft === true) {
    continue;
  }

  const errors = [];

  // 1. Author must be non-empty
  if (!data.author || String(data.author).trim().length === 0) {
    errors.push("Missing or empty author name");
  }

  // 2. Must not contain [OWNER or [VERIFY in non-draft posts
  if (content.includes("[OWNER") || rawContent.includes("[OWNER")) {
    errors.push("Contains unaddressed [OWNER marker in non-draft post");
  }

  if (content.includes("[VERIFY") || rawContent.includes("[VERIFY")) {
    errors.push("Contains unaddressed [VERIFY marker in non-draft post");
  }

  if (errors.length > 0) {
    hasErrors = true;
    console.error(`\n❌ Error in non-draft blog post: ${file}`);
    for (const err of errors) {
      console.error(`   - ${err}`);
    }
  }
}

if (hasErrors) {
  console.error("\nBuild check FAILED: Non-draft blog posts contain unverified markers or missing author.");
  process.exit(1);
}

console.log("✓ All published blog posts passed content & compliance checks.");
process.exit(0);
