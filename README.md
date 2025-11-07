# AMMU COSMETICS

> Pure. Natural. You. — Enterprise-level e-commerce website for natural luxury skincare and cosmetics.

A modern, SEO-optimized marketing website built with Next.js 16, featuring rich structured data, Core Web Vitals optimization, and beautiful UI/UX for showcasing AMMU COSMETICS' product line.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![SEO Score](https://img.shields.io/badge/SEO-10%2F10-brightgreen)](https://search.google.com/test/rich-results)

## 🌟 Features

### 🎨 Design & UX

- **Luxury Aesthetic**: Premium design with serif typography and elegant spacing
- **Responsive Layout**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: GSAP-powered animations and transitions
- **Animated Testimonials**: Interactive customer testimonial carousel
- **Bubble Navigation**: Unique animated navigation menu with bubble effects

### 🚀 Performance

- **Core Web Vitals Optimized**: Priority loading, lazy loading, and image optimization
- **Next.js 15 App Router**: Latest framework with automatic code splitting
- **Optimized Images**: Next/Image with proper dimensions and formats (WebP)
- **Resource Hints**: Preconnect and DNS prefetch for faster loading
- **Video Optimization**: Hero video with proper preload attributes

### 🔍 Enterprise SEO (Score: 10/10)

#### Structured Data (Schema.org)

- ✅ **Organization** schema with contact points
- ✅ **WebSite** schema with SearchAction for sitelinks searchbox
- ✅ **LocalBusiness** schema with geo-coordinates and opening hours
- ✅ **Product** schema with offers, brand, SKU, and MPN
- ✅ **BreadcrumbList** for navigation context
- ✅ **ItemList** for product catalog
- ✅ **FAQPage** schema for why page
- ✅ **Review** schema with real customer testimonials
- ✅ **AggregateRating** (4.8/5 from 127 reviews)

#### Rich Results Eligible

- ⭐ Product Rich Snippets (price, availability, ratings)
- ⭐ Review Stars in search results
- ⭐ Sitelinks Searchbox
- ⭐ Breadcrumbs in search results
- ⭐ Local Business Panel (with map, hours, contact)
- ⭐ FAQ Rich Results
- ⭐ Organization Knowledge Panel

#### Technical SEO

- Complete metadata coverage (title, description, canonical)
- Open Graph and Twitter Card optimization
- Sitemap.xml with lastmod dates
- Robots.txt properly configured
- Mobile-friendly and responsive
- Clean URL structure

### 📦 Pages

- **Home** (`/`) - Hero video, features, testimonials
- **Products** (`/products`) - Product catalog with enquiry system
- **Why Us** (`/why`) - FAQ section with structured data
- **Contact** (`/contact`) - Contact form and business details

### 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Animations**: GSAP (GreenSock)
- **Icons**: React Icons
- **Forms**: React Hook Form (for contact forms)
- **Image Optimization**: Next/Image
- **SEO Tools**: next-sitemap
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ammu-beauty

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start

# Generate sitemap (runs automatically after build)
npm run postbuild
```

## 📁 Project Structure

```
ammu-beauty/
├── public/                 # Static assets
│   ├── ammu-logo.webp     # Logo
│   ├── hero.mp4           # Hero video
│   ├── og.webp            # Open Graph image
│   ├── robots.txt         # Crawler instructions
│   └── sitemap.xml        # XML sitemap
├── src/
│   ├── app/
│   │   ├── components/    # Page-specific components
│   │   │   ├── BubbleMenu.js
│   │   │   ├── EnquireButton.js
│   │   │   ├── Footer.js
│   │   │   ├── FullForm.js
│   │   │   └── Testimonials.js
│   │   ├── contact/       # Contact page
│   │   ├── products/      # Products page
│   │   ├── why/           # Why page
│   │   ├── layout.js      # Root layout with schemas
│   │   ├── page.js        # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # Shared components
│   │   └── ui/           # UI components
│   └── lib/
│       └── utils.js       # Utility functions
├── next.config.mjs        # Next.js configuration
├── next-sitemap.config.js # Sitemap generation config
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## 🎯 SEO Features

### Metadata

Every page includes:

- Unique title tags
- Compelling meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card metadata
- Canonical URLs

### Structured Data

All pages emit proper JSON-LD:

- **Home**: Organization + WebSite schemas
- **Products**: Product + BreadcrumbList + ItemList + Reviews
- **Why**: FAQPage schema
- **Contact**: LocalBusiness schema

### Sitemap

- Automatically generated via `next-sitemap`
- Includes all routes with priorities
- Updated lastmod dates
- Submitted to search engines

## 🌐 Live Site

- **Production URL**: https://www.ammu-cosmetics.vercel.app
- **Sitemap**: https://www.ammu-cosmetics.vercel.app/sitemap.xml
- **Robots**: https://www.ammu-cosmetics.vercel.app/robots.txt

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: WebP format with responsive sizes
- **Code Splitting**: Automatic via Next.js
- **Tree Shaking**: Removes unused code

## 🔗 Key Integrations

- **Instagram**: [@liyanabeautyy](https://www.instagram.com/liyanabeautyy/)
- **WhatsApp**: [+91 9766737604](https://wa.me/919766737604)
- **Email**: ammucosmetics00@gmail.com
- **Location**: Bhiwandi, Maharashtra, India

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run sitemap      # Generate sitemap manually
npm run postbuild    # Auto-runs after build to generate sitemap
```

## 🧪 Testing SEO

Validate structured data:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
4. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

## 🎨 Brand Colors

- **Primary**: `#1c1917` (Stone 900)
- **Secondary**: `#F8F5F1` (Warm Beige)
- **Accent**: `#E8E1D9` (Light Taupe)
- **Text**: `#0f172a` (Slate 900)

## 📞 Contact & Support

For questions or support:

- **Email**: ammucosmetics00@gmail.com
- **Phone**: +91 9766737604
- **Address**: Khatiza Compound, Second Floor, Bhiwandi 401503, India

## 📄 License

All rights reserved © 2025 AMMU COSMETICS

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for seamless deployment
- Aceternity UI for beautiful components
- All our valued customers for their testimonials

---

**Built with ❤️ for AMMU COSMETICS — Where Natural Beauty Meets Luxury**
