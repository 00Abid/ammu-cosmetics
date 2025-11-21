import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Natural Skincare Knowledge Base | AMMU COSMETICS',
  description: 'The complete guide to natural skincare. Expert articles on Multani Mitti, DIY recipes, ethical beauty, and sustainable practices by AMMU COSMETICS.',
  keywords: [
    'natural skincare guide',
    'multani mitti benefits',
    'DIY beauty recipes',
    'skincare tips India',
    'organic beauty guide',
    'sustainable skincare',
    'beauty blog Bhiwandi',
    'natural cosmetics tips'
  ],
  openGraph: {
    title: 'Natural Skincare Knowledge Base | AMMU COSMETICS',
    description: 'Expert tips on natural skincare, Multani Mitti, and sustainable beauty practices.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'AMMU COSMETICS Blog' }],
    url: '/blog'
  },
  alternates: { canonical: '/blog' }
};

const page = () => {
  const blogPosts = [
    {
      id: "multani-mitti-benefits-glowing-skin",
      title: "10 Amazing Benefits of Multani Mitti for Glowing Skin",
      excerpt: "Discover how this ancient clay mineral transforms your skin naturally. From deep cleansing to anti-aging, learn why Multani Mitti is a skincare essential.",
      image: "/mitti.webp",
      category: "Skincare Tips",
      date: "November 10, 2024",
      readTime: "5 min read",
      content: `
        <p>Multani Mitti, or Fuller's Earth, has been a staple in Indian beauty rituals for centuries. This mineral-rich clay is a powerhouse for skin health.</p>
        <h3>1. Deep Cleansing</h3>
        <p>It acts as a powerful absorbent, pulling out excess oil, dirt, and impurities from deep within the pores. This makes it excellent for preventing acne and blackheads.</p>
        <h3>2. Exfoliation</h3>
        <p>The fine texture of the clay provides gentle exfoliation, removing dead skin cells and revealing a brighter complexion underneath.</p>
        <h3>3. Cooling Effect</h3>
        <p>True to its nature, Multani Mitti has a cooling effect on the skin, making it perfect for treating sunburns and soothing inflamed skin.</p>
        <h3>4. Oil Control</h3>
        <p>For those with oily skin, it's a miracle worker. It balances sebum production without stripping the skin of its natural moisture.</p>
        <h3>How to Use</h3>
        <p>Mix with rose water for oily skin, or with milk for dry skin. Apply as a face pack for 15 minutes and rinse with lukewarm water.</p>
      `
    },
    {
      id: "diy-rose-water-toner-recipe",
      title: "DIY Rose Water Toner: Natural Recipe for All Skin Types",
      excerpt: "Create your own luxurious rose water toner at home. This simple recipe hydrates, balances pH, and gives you that natural glow without chemicals.",
      image: "/toner.webp",
      category: "DIY Beauty",
      date: "November 8, 2024",
      readTime: "4 min read",
      content: `
        <p>Rose water is nature's astringent. It balances the skin's pH, hydrates, and soothes irritation. Making it at home ensures it's free from preservatives.</p>
        <h3>Ingredients</h3>
        <ul>
            <li>Fresh organic rose petals (1 cup)</li>
            <li>Distilled water (2 cups)</li>
            <li>Aloe vera gel (optional, 1 tsp)</li>
        </ul>
        <h3>Method</h3>
        <ol>
            <li>Rinse the rose petals thoroughly.</li>
            <li>Place them in a pot and cover with distilled water.</li>
            <li>Simmer on low heat until the petals lose their color (about 20-30 mins).</li>
            <li>Strain the liquid and let it cool.</li>
            <li>Store in a spray bottle in the refrigerator for up to 2 weeks.</li>
        </ol>
        <p>Use this toner morning and night after cleansing for a refreshing burst of hydration.</p>
      `
    },
    {
      id: "natural-vs-chemical-skincare",
      title: "Why Choose Natural Skincare Over Chemical Products?",
      excerpt: "Understand the science behind natural skincare. Learn how plant-based ingredients work with your skin, not against it, for long-term health and beauty.",
      image: "/natural beauty.webp",
      category: "Natural Beauty",
      date: "November 5, 2024",
      readTime: "6 min read",
      content: `
        <p>The skin is the body's largest organ, and it absorbs up to 60% of what you put on it. This is why the debate between natural and chemical skincare matters.</p>
        <h3>Bio-Compatibility</h3>
        <p>Natural ingredients, like plant oils and clays, have a molecular structure similar to our skin's own sebum. This allows them to be absorbed more easily and work in harmony with the body's natural processes.</p>
        <h3>Long-Term Health</h3>
        <p>Chemical products often provide quick fixes but can damage the skin barrier over time with harsh surfactants and preservatives (like parabens and sulfates). Natural skincare focuses on nourishing and strengthening the skin for long-term resilience.</p>
        <h3>Environmental Impact</h3>
        <p>Chemical skincare production often involves toxic byproducts that harm the environment. Natural skincare is typically biodegradable and sustainably sourced.</p>
      `
    },
    {
      id: "ethical-beauty-guide",
      title: "Complete Guide to Ethical Beauty: What It Really Means",
      excerpt: "Beyond cruelty-free labels - discover what makes beauty truly ethical. From fair trade sourcing to sustainable packaging, learn how to make conscious choices.",
      image: "/ethical beauty.webp",
      category: "Ethical Beauty",
      date: "November 3, 2024",
      readTime: "7 min read",
      content: `
        <p>Ethical beauty is more than just a buzzword; it's a movement towards responsibility.</p>
        <h3>Cruelty-Free</h3>
        <p>This means no animal testing at any stage of product development. At AMMU COSMETICS, we are strictly cruelty-free.</p>
        <h3>Fair Trade Sourcing</h3>
        <p>Ethical beauty ensures that the farmers and workers who harvest the ingredients (like shea butter or rose petals) are paid fair wages and work in safe conditions.</p>
        <h3>Transparency</h3>
        <p>An ethical brand lists all ingredients clearly and doesn't hide behind vague terms like "fragrance" to mask harmful chemicals.</p>
      `
    },
    {
      id: "bridal-skincare-routine-3-months",
      title: "Bridal Skincare Routine: 3 Months Before Your Wedding",
      excerpt: "Get that perfect bridal glow naturally. Our expert-approved timeline includes Multani Mitti treatments, hydration tips, and natural remedies for radiant skin.",
      image: "/makeup.webp",
      category: "Bridal Beauty",
      date: "November 1, 2024",
      readTime: "8 min read",
      content: `
        <p>Every bride wants glowing skin on her big day. Start this routine 3 months in advance for the best results.</p>
        <h3>Month 1: Detox and Cleanse</h3>
        <p>Focus on deep cleansing. Use a Multani Mitti face pack twice a week to draw out impurities. Drink 3 liters of water daily to flush out toxins.</p>
        <h3>Month 2: Treat and Repair</h3>
        <p>Introduce a Vitamin C rich serum or a natural rose water toner to brighten the skin and fade dark spots. Ensure you are moisturizing heavily every night.</p>
        <h3>Month 3: Glow and Maintain</h3>
        <p>Stop trying new products to avoid reactions. Stick to your routine. Get plenty of sleep and manage stress. Book your professional bridal makeup with AMMU COSMETICS to enhance your natural glow.</p>
      `
    },
    {
      id: "remove-blackheads-naturally",
      title: "How to Remove Blackheads Naturally Without Damaging Skin",
      excerpt: "Say goodbye to blackheads the natural way. Learn gentle extraction methods, preventive care, and natural ingredients that actually work.",
      image: "/black.webp",
      category: "Skincare Tips",
      date: "October 28, 2024",
      readTime: "5 min read",
      content: `
        <p>Blackheads are oxidized oil trapped in pores. Squeezing them can cause scarring. Try these natural methods instead.</p>
        <h3>Steam and Clay</h3>
        <p>Steam your face for 5 minutes to open pores. Immediately apply a thick layer of Multani Mitti paste. As it dries, it will pull the loosened oil out of the pores.</p>
        <h3>Honey and Cinnamon</h3>
        <p>Mix raw honey with cinnamon powder. Apply to the nose area. Honey is antibacterial, and cinnamon improves circulation. Rinse after 10 minutes.</p>
        <h3>Prevention</h3>
        <p>Use a salicylic acid-based cleanser (or willow bark extract, the natural alternative) to keep pores clear.</p>
      `
    },
    {
      id: "sustainable-beauty-carbon-footprint",
      title: "Sustainable Beauty: 10 Ways to Reduce Your Carbon Footprint",
      excerpt: "Make your beauty routine eco-friendly. From refillable packaging to zero-waste products, discover how small changes create big environmental impact.",
      image: "/luxury.webp",
      category: "Sustainable Living",
      date: "October 25, 2024",
      readTime: "6 min read",
      content: `
        <p>Your beauty routine shouldn't cost the Earth. Here is how to make it greener.</p>
        <ul>
            <li><strong>Choose Glass over Plastic:</strong> Glass is infinitely recyclable.</li>
            <li><strong>Support Local:</strong> Buying from local brands like AMMU COSMETICS reduces shipping emissions.</li>
            <li><strong>Multi-use Products:</strong> A lip and cheek tint reduces the number of products you need to buy.</li>
            <li><strong>Use Every Drop:</strong> Cut open tubes to get the last bit of product out.</li>
        </ul>
      `
    },
    {
      id: "multani-mitti-face-pack-recipes",
      title: "Multani Mitti Face Packs: 7 Recipes for Different Skin Types",
      excerpt: "Customize Multani Mitti for your unique skin needs. Whether oily, dry, or sensitive, find the perfect face pack recipe with natural ingredients.",
      image: "/mitti-paste.webp",
      category: "DIY Beauty",
      date: "October 22, 2024",
      readTime: "7 min read",
      content: `
        <p>Multani Mitti is versatile. Here are recipes for every skin concern:</p>
        <h3>1. For Oily Skin</h3>
        <p>Multani Mitti + Rose Water + Lemon Juice. Controls oil and brightens.</p>
        <h3>2. For Dry Skin</h3>
        <p>Multani Mitti + Honey + Milk. Hydrates while cleansing.</p>
        <h3>3. For Acne-Prone Skin</h3>
        <p>Multani Mitti + Neem Powder + Turmeric. Antibacterial and anti-inflammatory.</p>
        <h3>4. For Glowing Skin</h3>
        <p>Multani Mitti + Yogurt + Tomato Juice. Exfoliates and adds radiance.</p>
      `
    },
    {
      id: "halal-cosmetics-complete-guide",
      title: "Understanding Halal Cosmetics: A Complete Guide",
      excerpt: "What makes cosmetics halal? Learn about certification, prohibited ingredients, and why halal beauty products are gaining global popularity.",
      image: "/og.webp",
      category: "Ethical Beauty",
      date: "October 20, 2024",
      readTime: "6 min read",
      content: `
        <p>Halal cosmetics are free from animal-derived ingredients (like pork fat/lard) and alcohol. They must also be manufactured in a clean, hygienic environment.</p>
        <h3>Why Choose Halal?</h3>
        <p>Even for non-Muslims, Halal certification is a seal of purity and hygiene. It guarantees that the product is free from harsh chemicals and unethical ingredients.</p>
        <h3>Common Non-Halal Ingredients</h3>
        <p>Watch out for Carmine (crushed beetles), Keratin (often from animal hair), and Oleic Acid (animal fat). AMMU COSMETICS ensures all ingredients are plant-based and permissible.</p>
      `
    },
    {
      id: "winter-skincare-natural-ingredients",
      title: "Winter Skincare Routine with Natural Ingredients",
      excerpt: "Combat dry winter skin naturally. Discover hydrating ingredients, protective barriers, and seasonal skincare adjustments for healthy glowing skin.",
      image: "/natural beauty.webp",
      category: "Seasonal Care",
      date: "October 18, 2024",
      readTime: "5 min read",
      content: `
        <p>Winter strips moisture from the skin. You need to create a protective barrier.</p>
        <h3>Switch to Oils</h3>
        <p>Replace light lotions with heavier oils like Almond or Jojoba oil. They seal in moisture effectively.</p>
        <h3>Don't Skip Exfoliation</h3>
        <p>Dry skin builds up faster in winter. Gentle exfoliation with oatmeal or Multani Mitti helps moisturizers penetrate better.</p>
        <h3>Hydrate from Within</h3>
        <p>We tend to drink less water in winter. Keep your intake up to keep your skin plump.</p>
      `
    },
    {
      id: "science-natural-luxury-skincare",
      title: "The Science Behind Natural Luxury Skincare",
      excerpt: "Premium doesn't mean synthetic. Explore how rare botanicals, ethical sourcing, and advanced formulation create truly luxurious natural skincare.",
      image: "/luxury.webp",
      category: "Natural Beauty",
      date: "October 15, 2024",
      readTime: "8 min read",
      content: `
        <p>Luxury is about potency and purity. Natural luxury skincare uses high concentrations of active botanical ingredients.</p>
        <h3>Potency</h3>
        <p>Synthetic fillers dilute many commercial products. Natural luxury products are often packed with 100% active ingredients like cold-pressed oils and pure extracts.</p>
        <h3>Bio-Availability</h3>
        <p>Natural ingredients often contain co-factors that help the skin absorb the nutrients. For example, Vitamin C in rosehip oil is more stable and absorbable than synthetic ascorbic acid.</p>
      `
    },
    {
      id: "5-minute-morning-skincare-routine",
      title: "5-Minute Morning Skincare Routine for Busy Women",
      excerpt: "Achieve glowing skin without the time commitment. Our streamlined routine uses multi-purpose natural products for maximum results in minimal time.",
      image: "/toner.webp",
      category: "Skincare Tips",
      date: "October 12, 2024",
      readTime: "4 min read",
      content: `
        <p>You don't need 10 steps to look good. Here is the efficient morning routine:</p>
        <ol>
            <li><strong>Cleanse (1 min):</strong> Wash with a gentle natural cleanser.</li>
            <li><strong>Tone (30 sec):</strong> Spritz AMMU Aloe + Rose Water Toner liberally.</li>
            <li><strong>Treat & Moisturize (2 min):</strong> Apply a facial oil or moisturizer while the skin is still damp.</li>
            <li><strong>Protect (1.5 min):</strong> Apply sunscreen. Never skip this!</li>
        </ol>
        <p>Done! Fresh, glowing skin in under 5 minutes.</p>
      `
    }
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AMMU COSMETICS Natural Skincare Knowledge Base",
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
      "url": `https://www.ammu-cosmetics.vercel.app/blog#${post.id}`
    }))
  };

  return (
    <div className="min-h-screen pt-16 bg-[#F8F5F1]">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="px-4 py-20 mx-auto max-w-5xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-stone-500">Knowledge Base</p>
          <h1 className="mb-6 font-serif text-4xl md:text-5xl">Natural Beauty Insights</h1>
          <p className="max-w-2xl mx-auto text-lg font-light text-stone-600">
            The complete guide to natural skincare. Expert tips, DIY recipes, and sustainable beauty guides from AMMU COSMETICS.
          </p>
        </div>

        {/* Quick Nav */}
        <nav className="bg-white p-8 rounded-lg shadow-sm mb-16 scroll-fade-up border border-stone-100">
          <h2 className="text-xl font-serif mb-6 pb-2 border-b border-stone-100">Table of Contents</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {blogPosts.map((post) => (
              <li key={post.id}>
                <a href={`#${post.id}`} className="text-stone-600 hover:text-stone-900 transition-colors flex items-start text-sm">
                  <span className="mr-2 text-stone-400">→</span>
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Blog Posts List */}
        <div className="space-y-20">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              id={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm scroll-fade-up"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 text-xs font-medium bg-white/90 backdrop-blur text-stone-900 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <header className="mb-8">
                  <div className="flex items-center gap-3 mb-4 text-sm text-stone-500">
                    <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mb-4 font-serif text-3xl md:text-4xl leading-tight text-stone-900">
                    {post.title}
                  </h2>
                </header>

                <div className="prose prose-lg prose-stone max-w-none font-light">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="mt-10 pt-8 border-t border-stone-100 flex justify-between items-center">
                  <div className="text-sm text-stone-500">
                    Written by <span className="font-medium text-stone-900">Ammu Cosmetics Team</span>
                  </div>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
                  >
                    Shop Related Products →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-12 bg-stone-900 text-white rounded-2xl text-center scroll-fade-up">
          <h2 className="mb-4 font-serif text-3xl">Ready to Transform Your Skin?</h2>
          <p className="mb-8 text-stone-300 max-w-2xl mx-auto">
            Experience the power of nature with our premium skincare collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="px-8 py-3 bg-white text-stone-900 rounded-full font-semibold hover:bg-stone-100 transition">
              Shop Now
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition">
              Contact Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
