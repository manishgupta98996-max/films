import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated: string;
  author: string;
  category: string;
  primaryKeyword: string;
  cover?: string;
  coverAlt?: string;
  readingTime: string;
  draft?: boolean;
  takeaways?: string[];
  faq?: BlogFAQ[];
  relatedSlugs?: string[];
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
  html: string;
  headings: TOCItem[];
}

/**
 * Calculate reading time at build: words / 220, minimum 1 minute.
 */
function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

/**
 * Read and parse raw file into BlogPostMeta
 */
function parsePostMeta(fileContent: string, fileName: string): { meta: BlogPostMeta; content: string } {
  const { data, content } = matter(fileContent);
  const slug = data.slug || fileName.replace(/\.mdx?$/, "");

  const meta: BlogPostMeta = {
    title: data.title || "Untitled Post",
    description: data.description || "",
    slug,
    date: data.date ? String(data.date).slice(0, 10) : new Date().toISOString().slice(0, 10),
    updated: data.updated
      ? String(data.updated).slice(0, 10)
      : data.date
      ? String(data.date).slice(0, 10)
      : new Date().toISOString().slice(0, 10),
    author: data.author || "Dan Kieft",
    category: data.category || "General",
    primaryKeyword: data.primaryKeyword || "",
    cover: data.cover || "",
    coverAlt: data.coverAlt || "",
    readingTime: calculateReadingTime(content),
    draft: Boolean(data.draft),
    takeaways: Array.isArray(data.takeaways) ? data.takeaways : undefined,
    faq: Array.isArray(data.faq) ? data.faq : undefined,
    relatedSlugs: Array.isArray(data.relatedSlugs) ? data.relatedSlugs : undefined,
  };

  return { meta, content };
}

/**
 * Get metadata for all published blog posts (excluding drafts), sorted by date descending.
 */
export function getAllPosts(includeDrafts = false): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => /\.mdx?$/.test(file));

  const posts: BlogPostMeta[] = files
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return parsePostMeta(fileContent, file).meta;
    })
    .filter((post) => (includeDrafts ? true : !post.draft))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Get all available post slugs for static route generation.
 */
export function getAllPostSlugs(includeDrafts = false): string[] {
  return getAllPosts(includeDrafts).map((p) => p.slug);
}

/**
 * Get related posts for an article (strictly excluding drafts).
 */
export function getRelatedPosts(currentSlug: string, count = 3): BlogPostMeta[] {
  const allPosts = getAllPosts(false).filter((p) => p.slug !== currentSlug);
  return allPosts.slice(0, count);
}

/**
 * Get next and previous posts in chronological sequence for pagination.
 */
export function getNextPrevPosts(currentSlug: string): { prev: BlogPostMeta | null; next: BlogPostMeta | null } {
  const allPosts = getAllPosts(false);
  const currentIndex = allPosts.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  // allPosts are sorted date descending:
  // previous article is older (higher index), next article is newer (lower index)
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  return { prev, next };
}

export function slugify(text: string): string {
  return text
    .replace(/<[^>]*>/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Get a single post by its slug, parsing markdown/MDX body into HTML.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  let targetFile = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(targetFile)) {
    targetFile = path.join(BLOG_DIR, `${slug}.md`);
  }

  if (!fs.existsSync(targetFile)) {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
    const matched = files.find((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const { data } = matter(raw);
      return data.slug === slug;
    });

    if (!matched) {
      return null;
    }
    targetFile = path.join(BLOG_DIR, matched);
  }

  const fileContent = fs.readFileSync(targetFile, "utf-8");
  const { meta, content } = parsePostMeta(fileContent, path.basename(targetFile));

  let html = await marked.parse(content, { gfm: true, breaks: true });

  const headings: TOCItem[] = [];
  // Parse h2 through h6 to assign anchor IDs; include h2 and h3 in the Table of Contents
  html = html.replace(/<h([2-6])>(.*?)<\/h\1>/gi, (match, levelStr, innerText) => {
    const level = parseInt(levelStr, 10);
    const plainText = innerText
      .replace(/<[^>]*>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    const id = slugify(plainText);
    if (level === 2 || level === 3) {
      headings.push({ id, text: plainText, level });
    }
    return `<h${level} id="${id}">${innerText}</h${level}>`;
  });

  return {
    meta,
    content,
    html,
    headings,
  };
}
