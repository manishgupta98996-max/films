# Blog Image Assets & Production Conventions

This directory hosts production assets for the AI Filmmaking Studio blog (`/content/blog/*.mdx`).

## 1. Image Specifications

All assets in production must follow standard cinematic aspect ratios and modern WebP compression:

| Asset Type | Dimensions | Aspect Ratio | Format | Typical Quality | Location |
|---|---|---|---|---|---|
| **Cover Header** | `1600 x 670 px` | 2.39:1 (Anamorphic widescreen) | `.webp` | 82-85% | `/public/blog/[slug]-cover.webp` |
| **Inline Figures** | `1200 x 675 px` | 16:9 (Standard video frame) | `.webp` | 80-82% | `/public/blog/[slug]-[figure-name].webp` |
| **Social / Open Graph** | `1200 x 630 px` | 1.91:1 (OG Standard) | `.webp` or `.png` | 85% | `/public/blog/[slug]-og.png` |

## 2. Naming Conventions

- Lowercase alphanumeric characters, hyphens only (no spaces, no underscores).
- Prefix all images with the exact post slug:
  - Example: `ai-filmmaking-workflow-pipeline.webp`
  - Example: `ai-filmmaking-workflow-cover.webp`
- Do not commit source PSD, TIFF, or RAW files here.

## 3. Production & Compliance Checklist

Before publishing or referencing any image in a post:

- [ ] **No Placeholders in Production**: Frontmatter `cover` must point to an actual existing file in `public/`. If no cover exists, leave `cover: ""` empty. The layout will gracefully render a sleek typographic letterbox card instead of broken image links.
- [ ] **Descriptive Alt Text**: Every image reference (`coverAlt` or `<Figure alt="...">`) must provide descriptive, non-promotional text explaining the visual.
- [ ] **File Size**: Target < 180 KB for inline images and < 250 KB for widescreen covers. Use `cwebp`, Squoosh, or Sharp to convert.
- [ ] **Permissions & Rights**: Ensure student images or tool screenshots are authorized under course guidelines (CLAUDE.md §10).
