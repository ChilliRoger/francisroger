# Francis Roger - Portfolio

A modern, interactive portfolio website showcasing projects, skills, and experience in software development, blockchain technology, and AI applications.

**Live Site:** [francisroger.vercel.app](https://francisroger.vercel.app)

## Overview

This portfolio is a single-page application built with Next.js 16, featuring a comprehensive showcase of 33+ projects across various domains including Web3, IoT, AI, and full-stack development. The site includes an interactive terminal emulator, dynamic particle background, and smooth animations for an engaging user experience.

## Features

- **Interactive Loading Screen** - Boot sequence animation with initialization steps
- **Single-Page Navigation** - Smooth scrolling between sections with glass morphism navbar
- **Projects Gallery** - Comprehensive showcase of 33 projects with live demos and source code
- **Terminal Emulator** - Full-featured web terminal with 20+ commands
- **Particle Background** - Custom canvas-based particle system with 800 interactive particles
- **3D Graphics** - Spline viewer integration for immersive hero section
- **Responsive Design** - Optimized for mobile, tablet, desktop, and ultrawide displays
- **Dark Theme** - Modern dark interface with purple accent colors

## Technology Stack

### Core Framework
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.1** - Latest React version
- **TypeScript 5** - Type-safe development
- **Turbopack** - Next-generation bundler

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn UI** - Accessible component library (New York variant)
- **PostCSS** - CSS processing with Tailwind plugin
- **Framer Motion 12.23.22** - Advanced animation library

### UI Components
- **Radix UI** - Headless UI primitives (Dialog, Label, Slot)
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management
- **Spline Viewer** - 3D graphics and animations

### Fonts
- **Inter** - Body text
- **Poppins** - Display and headings (300-800 weights)
- **Space Grotesk** - Sans-serif (300-700 weights)

## Installation

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Setup

1. Clone the repository:
```bash
git clone https://github.com/ChilliRoger/francisroger.git
cd francisroger
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev --turbopack
# or
yarn dev --turbopack
# or
pnpm dev --turbopack
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
francisroger/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage with all sections
│   ├── projects/page.tsx    # Full projects gallery
│   ├── terminal/page.tsx    # Interactive terminal
│   ├── layout.tsx           # Root layout with metadata
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── sections/           # Portfolio sections
│   ├── ui/                 # Shadcn UI components
│   ├── Navbar.tsx          # Navigation component
│   ├── LoadingScreen.tsx   # Boot sequence animation
│   ├── ParticleBackground.tsx  # Canvas particle system
│   └── [other components]
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── img/               # Project screenshots
│   └── txt/               # Resume PDF
├── types/                 # TypeScript definitions
└── [config files]
```

## Available Scripts

### Development
```bash
npm run dev       # Start development server with Turbopack
npm run build     # Build production bundle
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Key Sections

### Homepage
- **Hero** - 3D Spline animation with gradient text and CTAs
- **Education** - Academic background and achievements
- **Experience** - Professional internships and roles
- **Projects** - Featured projects with technology stack
- **Skills** - 60+ technologies across 8 categories
- **Volunteering** - Leadership roles and community service
- **Exploring** - Current interests and learning areas
- **Socials** - Contact form and social media links

### Projects Page
Comprehensive gallery of 33 projects including:
- Blockchain and Web3 applications
- AI and machine learning projects
- IoT and hardware systems
- Full-stack web applications
- Mobile applications
- Developer tools and utilities

### Terminal Page
Interactive terminal emulator with commands:
- **Navigation:** help, clear, exit
- **Information:** whoami, about, education, contact
- **Portfolio:** projects, skills
- **System:** pwd, ls, cat, echo, date, cowsay, matrix
- **Social:** github, linkedin, twitter, leetcode

## Design System

### Colors
- **Background:** #000000 (pure black)
- **Primary:** #8b5cf6 (purple-500)
- **Card Background:** #111111
- **Border:** #333333

### Typography
- Responsive scaling from 3xl to 8xl
- Gradient text effects for headings
- System font stack with custom web fonts

### Effects
- Glass morphism with backdrop blur
- Gradient borders and backgrounds
- Smooth scroll animations
- Hover state transitions

## Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own

1. Fork this repository
2. Import to Vercel
3. Configure environment variables if needed
4. Deploy

### Vercel Configuration
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Security headers configured in `vercel.json`

## Performance Optimizations

- Next.js Image optimization
- Font optimization with `next/font`
- Automatic code splitting
- Static asset optimization
- Turbopack for fast builds
- Canvas-based particle system (60fps)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Contact

**Francis Roger**
- Email: francis.roger.a.16@gmail.com
- GitHub: [github.com/ChilliRoger](https://github.com/ChilliRoger)
- LinkedIn: [linkedin.com/in/francis16102005](https://linkedin.com/in/francis16102005)
- Portfolio: [francisroger.vercel.app](https://francisroger.vercel.app)

## Acknowledgments

Built with modern web technologies and best practices. Special thanks to the open-source community for the amazing tools and libraries that made this project possible.
