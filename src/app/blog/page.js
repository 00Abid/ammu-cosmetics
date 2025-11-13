import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Natural Skincare Blog | Beauty Tips & Multani Mitti Guide - AMMU COSMETICS',
  description: 'Expert natural skincare tips, Multani Mitti benefits, DIY beauty recipes, and sustainable beauty guides. Learn from AMMU COSMETICS skincare experts in Bhiwandi.',
  keywords: [
    'natural skincare blog',
    'multani mitti benefits',
    'DIY beauty recipes',
    'skincare tips India',
    'organic beauty guide',
    'sustainable skincare',
    'beauty blog Bhiwandi',
    'natural cosmetics tips'
  ],
  openGraph: {
    title: 'Natural Skincare Blog | AMMU COSMETICS',
    description: 'Expert tips on natural skincare, Multani Mitti, and sustainable beauty practices.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'AMMU COSMETICS Blog' }],
    url: '/blog'
  },
  alternates: { canonical: '/blog' }
};

const page = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Amazing Benefits of Multani Mitti for Glowing Skin",
      excerpt: "Discover how this ancient clay mineral transforms your skin naturally. From deep cleansing to anti-aging, learn why Multani Mitti is a skincare essential.",
      image: "/mitti.webp",
      category: "Skincare Tips",
      date: "November 10, 2024",
      readTime: "5 min read",
      slug: "multani-mitti-benefits-glowing-skin"
    },
    {
      id: 2,
      title: "DIY Rose Water Toner: Natural Recipe for All Skin Types",
      excerpt: "Create your own luxurious rose water toner at home. This simple recipe hydrates, balances pH, and gives you that natural glow without chemicals.",
      image: "/toner.webp",
      category: "DIY Beauty",
      date: "November 8, 2024",
      readTime: "4 min read",
      slug: "diy-rose-water-toner-recipe"
    },
    {
      id: 3,
      title: "Why Choose Natural Skincare Over Chemical Products?",
      excerpt: "Understand the science behind natural skincare. Learn how plant-based ingredients work with your skin, not against it, for long-term health and beauty.",
      image: "/natural beauty.webp",
      category: "Natural Beauty",
      date: "November 5, 2024",
      readTime: "6 min read",
      slug: "natural-vs-chemical-skincare"
    },
    {
      id: 4,
      title: "Complete Guide to Ethical Beauty: What It Really Means",
      excerpt: "Beyond cruelty-free labels - discover what makes beauty truly ethical. From fair trade sourcing to sustainable packaging, learn how to make conscious choices.",
      image: "/ethical beauty.webp",
      category: "Ethical Beauty",
      date: "November 3, 2024",
      readTime: "7 min read",
      slug: "ethical-beauty-guide"
    },
    {
      id: 5,
      title: "Bridal Skincare Routine: 3 Months Before Your Wedding",
      excerpt: "Get that perfect bridal glow naturally. Our expert-approved timeline includes Multani Mitti treatments, hydration tips, and natural remedies for radiant skin.",
      image: "/makeup.webp",
      category: "Bridal Beauty",
      date: "November 1, 2024",
      readTime: "8 min read",
      slug: "bridal-skincare-routine-3-months"
    },
    {
      id: 6,
      title: "How to Remove Blackheads Naturally Without Damaging Skin",
      excerpt: "Say goodbye to blackheads the natural way. Learn gentle extraction methods, preventive care, and natural ingredients that actually work.",
      image: "/black.webp",
      category: "Skincare Tips",
      date: "October 28, 2024",
      readTime: "5 min read",
      slug: "remove-blackheads-naturally"
    },
    {
      id: 7,
      title: "Sustainable Beauty: 10 Ways to Reduce Your Carbon Footprint",
      excerpt: "Make your beauty routine eco-friendly. From refillable packaging to zero-waste products, discover how small changes create big environmental impact.",
      image: "/luxury.webp",
      category: "Sustainable Living",
      date: "October 25, 2024",
      readTime: "6 min read",
      slug: "sustainable-beauty-carbon-footprint"
    },
    {
      id: 8,
      title: "Multani Mitti Face Packs: 7 Recipes for Different Skin Types",
      excerpt: "Customize Multani Mitti for your unique skin needs. Whether oily, dry, or sensitive, find the perfect face pack recipe with natural ingredients.",
      image: "/mitti-paste.webp",
      category: "DIY Beauty",
      date: "October 22, 2024",
      readTime: "7 min read",
      slug: "multani-mitti-face-pack-recipes"
    },
    {
      id: 9,
      title: "Understanding Halal Cosmetics: A Complete Guide",
      excerpt: "What makes cosmetics halal? Learn about certification, prohibited ingredients, and why halal beauty products are gaining global popularity.",
      image: "/og.webp",
      category: "Ethical Beauty",
      date: "October 20, 2024",
      readTime: "6 min read",
      slug: "halal-cosmetics-complete-guide"
    },
    {
      id: 10,
      title: "Winter Skincare Routine with Natural Ingredients",
      excerpt: "Combat dry winter skin naturally. Discover hydrating ingredients, protective barriers, and seasonal skincare adjustments for healthy glowing skin.",
      image: "/natural beauty.webp",
      category: "Seasonal Care",
      date: "October 18, 2024",
      readTime: "5 min read",
      slug: "winter-skincare-natural-ingredients"
    },
    {
      id: 11,
      title: "The Science Behind Natural Luxury Skincare",
      excerpt: "Premium doesn't mean synthetic. Explore how rare botanicals, ethical sourcing, and advanced formulation create truly luxurious natural skincare.",
      image: "/luxury.webp",
      category: "Natural Beauty",
      date: "October 15, 2024",
      readTime: "8 min read",
      slug: "science-natural-luxury-skincare"
    },
    {
      id: 12,
      title: "5-Minute Morning Skincare Routine for Busy Women",
      excerpt: "Achieve glowing skin without the time commitment. Our streamlined routine uses multi-purpose natural products for maximum results in minimal time.",
      image: "/toner.webp",
      category: "Skincare Tips",
      date: "October 12, 2024",
      readTime: "4 min read",
      slug: "5-minute-morning-skincare-routine"
    }
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AMMU COSMETICS Natural Skincare Blog",
    "description": "Expert tips on natural skincare, Multani Mitti benefits, DIY beauty recipes, and sustainable beauty practices.",
    "url": "https://www.ammu-cosmetics.vercel.app/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AMMU COSMETICS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ammu-cosmetics.vercel.app/ammu-logo.webp"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": `https://www.ammu-cosmetics.vercel.app${post.image}`,
      "datePublished": new Date(post.date).toISOString(),
      "author": {
        "@type": "Organization",
        "name": "AMMU COSMETICS"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AMMU COSMETICS",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ammu-cosmetics.vercel.app/ammu-logo.webp"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen pt-16 bg-[#F8F5F1]">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-stone-500">Our Blog</p>
          <h1 className="mb-6 font-serif text-4xl md:text-5xl">Natural Beauty Insights</h1>
          <p className="max-w-2xl mx-auto text-lg font-light text-stone-600">
            Expert tips, DIY recipes, and sustainable beauty guides from AMMU COSMETICS. Discover the power of <Link href="/products#Multani-Mitti" className="font-medium text-stone-900 hover:underline">Multani Mitti</Link> and <Link href="/products" className="font-medium text-stone-900 hover:underline">natural skincare</Link>.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden transition-all duration-300 hover:shadow-xl scroll-fade-up"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={256}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                  priority={index < 6}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-white text-stone-900 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-stone-500">
                  <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="mb-3 font-serif text-xl leading-tight hover:text-stone-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="mb-4 text-sm font-light leading-relaxed text-stone-600">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 bg-white rounded-lg text-center">
          <h2 className="mb-4 font-serif text-2xl">Ready to Try Natural Skincare?</h2>
          <p className="mb-6 text-stone-600">
            Explore our <Link href="/products" className="font-medium text-stone-900 hover:underline">premium natural skincare collection</Link> or learn more about <Link href="/why" className="font-medium text-stone-900 hover:underline">our commitment to ethical beauty</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="px-6 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-700 transition">
              Shop Products
            </Link>
            <Link href="/contact" className="px-6 py-2 border-2 border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
