import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated: string;
  author: string;
  primaryKeyword: string;
  cover?: string;
  readingTime?: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
  html: string;
}

/**
 * Calculate reading time in minutes.
 */
function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

/**
 * Get metadata for all published blog posts, sorted by date descending.
 */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => /\.mdx?$/.test(file));

  const posts: BlogPostMeta[] = files
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const slug = data.slug || file.replace(/\.mdx?$/, "");

      return {
        title: data.title || "Untitled Post",
        description: data.description || "",
        slug,
        date: data.date || new Date().toISOString().slice(0, 10),
        updated: data.updated || data.date || new Date().toISOString().slice(0, 10),
        author: data.author || "AI Filmmaking Studio",
        primaryKeyword: data.primaryKeyword || "",
        cover: data.cover || "",
        readingTime: calculateReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Get all available post slugs for static route generation.
 */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/**
 * Get a single post by its slug, parsing markdown/MDX body into HTML.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  // Look for either slug.mdx or slug.md
  let targetFile = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(targetFile)) {
    targetFile = path.join(BLOG_DIR, `${slug}.md`);
  }

  if (!fs.existsSync(targetFile)) {
    // Check if any file has matching slug in frontmatter
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
  const { data, content } = matter(fileContent);

  const html = await marked.parse(content, { gfm: true, breaks: true });

  const meta: BlogPostMeta = {
    title: data.title || "Untitled Post",
    description: data.description || "",
    slug: data.slug || slug,
    date: data.date || new Date().toISOString().slice(0, 10),
    updated: data.updated || data.date || new Date().toISOString().slice(0, 10),
    author: data.author || "AI Filmmaking Studio",
    primaryKeyword: data.primaryKeyword || "",
    cover: data.cover || "",
    readingTime: calculateReadingTime(content),
  };

  return {
    meta,
    content,
    html,
  };
}
