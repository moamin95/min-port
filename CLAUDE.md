# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist portfolio website built with Next.js 15 and automatically synced with v0.dev deployments. The project showcases a clean, modern design for a fictional developer "Mohammed Amin" with sections for experience, projects, and contact information.

## Development Commands

- **Development server**: `npm run dev` or `pnpm dev`
- **Build**: `npm run build` or `pnpm build` 
- **Production server**: `npm run start` or `pnpm start`
- **Linting**: `npm run lint` or `pnpm lint`

## Architecture & Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Typography**: Inter (primary), JetBrains Mono (accent/monospace)
- **Package Manager**: pnpm (based on pnpm-lock.yaml)
- **TypeScript**: Fully typed codebase

## Project Structure

```
app/                    # Next.js App Router
  layout.tsx           # Root layout with font configuration
  page.tsx             # Main portfolio page (single-page application)
  globals.css          # Global styles and CSS variables

components/             
  ui/                  # shadcn/ui components
  theme-provider.tsx   # Theme context provider

lib/
  utils.ts            # Utility functions (cn function for class merging)

hooks/                 # Custom React hooks
public/               # Static assets (placeholder images)
```

## Design System

The project uses a neutral color palette with extensive use of CSS custom properties defined in `app/globals.css`. Key design principles:
- Minimalist aesthetic with clean typography
- Responsive grid layouts
- Hover transitions and subtle animations
- Uppercase text styling for headings and labels
- Card-based content organization

## Key Components

- Single-page portfolio layout with fixed navigation
- Hero section with split typography layout
- Experience cards with timeline information
- Project showcase grid with placeholder content
- Contact section with dark theme
- All content is currently static/hardcoded

## v0.dev Integration

This repository is automatically synced with v0.dev:
- Changes deployed on v0.dev are pushed to this repository
- Live deployment: https://vercel.com/moamin95s-projects/v0-minimalist-portfolio-website
- v0.dev project: https://v0.dev/chat/projects/OhtzXn7Pu3A

## shadcn/ui Configuration

Component aliases are configured in `components.json`:
- `@/components` → components directory
- `@/lib/utils` → utility functions
- `@/hooks` → custom hooks
- Uses default shadcn/ui styling with Tailwind CSS variables
- Lucide React for icons

## Important Notes

- This is primarily a design showcase rather than a functional application
- Contact forms and project links are placeholder implementations
- Content is hardcoded and would need to be made dynamic for real use
- The codebase follows modern React patterns with TypeScript strict mode