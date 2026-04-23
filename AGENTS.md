# AGENTS.md

This document describes the architecture and conventions of the Airdrop2026 blog for AI agents and developers working on this codebase.

## Project Overview

An Indonesian-language crypto airdrop education blog. Built on TanStack Start (full-stack React framework) deployed on Netlify. Content focuses on how to participate in crypto airdrops from scratch, without capital.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
content/posts/              # Markdown blog articles
public/                     # Static assets (images, favicon)
src/
  components/
    blog-posts.tsx          # Home page post listing with sidebar
    ui/card.tsx             # Card UI primitive
  lib/utils.ts              # cn() class merging helper
  routes/
    __root.tsx              # Root layout: orange header, footer, HTML shell
    index.tsx               # Home page — all posts sorted by date
    posts.$slug.tsx         # Single post detail page
    category.$category.tsx  # Posts filtered by category
  styles.css                # Global CSS: Tailwind + .article-content prose styles
  router.tsx                # TanStack Router instance setup
content-collections.ts      # Zod schema for post frontmatter + slug transform
netlify.toml                # Build and dev server config
vite.config.ts              # Vite plugins
```

## File-Based Routing

Routes are defined by files in `src/routes/`:
- `__root.tsx` — Root layout wrapping all pages
- `index.tsx` — Route for `/`
- `posts.$slug.tsx` — Route for `/posts/:slug`
- `category.$category.tsx` — Route for `/category/:category`

## Content System

Posts live in `content/posts/*.md` and are typed via Content Collections (`content-collections.ts`). The `slug` field is **auto-derived** from the post title (lowercased, non-word chars → underscores) — do not set slug manually in frontmatter.

Import posts anywhere with:
```ts
import { allPosts } from 'content-collections'
```

Each post has: `title`, `summary`, `categories[]`, `slug`, `image`, `date`, `content`.

## Styling Conventions

- Tailwind CSS 4 utility classes for layout and spacing
- Custom `.article-content` CSS class in `styles.css` provides prose-style rendering for markdown HTML in post detail pages
- **No `@tailwindcss/typography` plugin** — prose styles are implemented manually to avoid an extra dependency
- Site color theme: orange (`orange-500` primary, `orange-100/200/300` accents), background `gray-50`

## Key Decisions

- **Manual prose CSS**: Article body uses `.article-content` in `styles.css` rather than `@tailwindcss/typography` — if you add the plugin, remove the manual styles to avoid conflicts.
- **Slug auto-generation**: Done in `content-collections.ts` transform — don't add `slug` to frontmatter.
- **Indonesian language**: All UI text and content is in Bahasa Indonesia. Keep new content consistent.
- **Sidebar**: Both `blog-posts.tsx` and `posts.$slug.tsx` show a sidebar on `lg:` breakpoints with categories and a disclaimer.

## Adding New Articles

Create a `.md` file in `content/posts/` with this frontmatter:

```yaml
---
date: YYYY-MM-DD
title: "Article Title"
summary: "Short description for card and article header"
categories:
  - Tutorial   # Tutorial | Strategi | Tools | Dompet | Testnet
image: placeholder.png
---
```

No other changes needed — the post appears automatically, sorted by date descending.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
```

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for post frontmatter |
| `src/styles.css` | Tailwind + article prose styles |
