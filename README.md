# Minimalist Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring a clean minimalist design with dark/light theme support and dynamic content management.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/moamin95s-projects/v0-minimalist-portfolio-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/OhtzXn7Pu3A)

## 🚀 Overview

This portfolio showcases a full-stack developer's work with a focus on clean, accessible design and modern web technologies. Features include dynamic typewriter animations, an integrated blog system powered by MDX, and a comprehensive dark/light theme implementation.

## 🛠 Tech Stack

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 19](https://react.dev/)** - UI library with latest features

### Styling & Design
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark/light theme switching

### Content Management
- **[MDX](https://mdxjs.com/)** - Markdown with JSX components
- **[@next/mdx](https://nextjs.org/docs/app/building-your-application/configuring/mdx)** - Next.js MDX integration
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Front-matter parser
- **[react-markdown](https://github.com/remarkjs/react-markdown)** - Markdown renderer

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for quality assurance
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 📝 MDX Articles System

The portfolio includes a fully-featured blog/articles section powered by MDX, allowing for rich content creation with React components embedded in Markdown.

### Features
- **Dynamic Routing**: Automatic page generation from MDX files
- **Front Matter Support**: YAML metadata for titles, dates, and summaries
- **Static Generation**: All articles pre-rendered at build time
- **Breadcrumb Navigation**: Clear navigation hierarchy
- **Responsive Design**: Optimized reading experience on all devices

### Content Structure
```
content/
└── articles/
    └── example-article.mdx
```

### Example MDX File
```mdx
---
id: "1"
title: "Article Title"
summary: "Brief description of the article"
date: "2024-01-15"
slug: "article-slug"
---

# Article Content

Your markdown content with **bold text**, *italics*, and even React components!
```

### Article Features
- **Syntax Highlighting**: Code blocks with proper formatting
- **Image Optimization**: Next.js Image component integration
- **Custom Components**: Styled headings, links, and content blocks
- **SEO Optimized**: Automatic metadata generation

## 🎨 Key Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Typewriter Animation**: Dynamic text animation for role/title display
- **Dark/Light Theme**: System preference detection with manual toggle
- **Static Site Generation**: Optimized performance with pre-rendered pages
- **Type Safety**: Full TypeScript implementation with zero type errors
- **Modern Architecture**: Clean component structure and utility organization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
```

### Adding New Articles
1. Create a new `.mdx` file in `content/articles/`
2. Add front matter with required fields
3. Write your content using Markdown syntax
4. Build and deploy - articles are automatically discovered

## 🔧 Development Workflow

### Pre-commit Hooks
The project uses Husky to run quality checks before commits:
- **ESLint**: Code style and quality validation
- **TypeScript**: Type checking and compilation verification

### Quality Assurance
- Zero TypeScript errors
- ESLint compliance
- Production build verification
- Optimized bundle analysis

## 📦 Bundle Analysis
- **Total Size**: ~101 kB (optimized for performance)
- **Static Pages**: All routes pre-rendered for optimal loading
- **Code Splitting**: Efficient chunk distribution for faster loading

## 🌐 Deployment

The project is configured for seamless deployment on Vercel with automatic:
- Static site generation
- Image optimization
- Performance monitoring

**Live Demo**: [https://hello-mo-dev.vercel.app/](https://hello-mo-dev.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).