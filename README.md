# Andrea Consulting Website

A modern, professional consulting business website built with Next.js and TinaCMS.

## Features

- 🚀 Built with Next.js 15 and TypeScript
- 🎨 Styled with Tailwind CSS
- ✏️ Content management with TinaCMS
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🔍 SEO-friendly

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: TinaCMS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd andrea-consulting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### TinaCMS Development

To run the site with TinaCMS admin interface:

```bash
npm run tina:dev
```

This will start both the Next.js development server and the TinaCMS admin interface.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── content/
│   └── pages/
│       └── home.mdx       # Homepage content
└── tina/
    └── config.ts          # TinaCMS configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run tina:dev` - Start with TinaCMS admin
- `npm run tina:build` - Build TinaCMS

## Customization

### Content

Edit content through the TinaCMS admin interface at `/admin` when running in development mode, or directly edit the MDX files in the `content/` directory.

### Styling

The site uses Tailwind CSS for styling. Customize the design by editing the component classes in the React components.

### TinaCMS Configuration

Modify the CMS schema and configuration in `tina/config.ts`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Other Platforms

Build the project:
```bash
npm run build
```

Then deploy the contents of the `.next` folder to your hosting provider.

## License

MIT License - see LICENSE file for details.
