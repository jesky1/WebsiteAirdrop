# Airdrop2026

A blog website about how to participate in crypto airdrops from scratch without capital. Built with TanStack Start and deployed on Netlify.

## What It Is

Airdrop2026 is an Indonesian-language educational blog providing guides, tutorials, and strategies for crypto airdrop hunting — targeted at beginners with no initial capital.

## Key Technologies

| Technology | Purpose |
|------------|---------|
| TanStack Start | Full-stack React framework with file-based routing |
| TanStack Router | Type-safe client-side routing |
| React 19 | UI rendering |
| Vite 7 | Build tool |
| Tailwind CSS 4 | Utility-first styling |
| Content Collections | Type-safe markdown content management |
| TypeScript 5.7 | Strict type safety |
| Netlify | Deployment and hosting |

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site runs at `http://localhost:3000` (or `http://localhost:8888` via Netlify CLI).

To use the Netlify CLI for local emulation of all Netlify features:

```bash
netlify dev
```

## Content

Blog posts are markdown files in `content/posts/`. Each post requires frontmatter:

```yaml
---
date: 2026-04-20
title: "Post Title"
summary: "Short description"
categories:
  - Tutorial
image: placeholder.png
---
```

## Building for Production

```bash
npm run build
```

Output goes to `dist/client/` (served by Netlify).
