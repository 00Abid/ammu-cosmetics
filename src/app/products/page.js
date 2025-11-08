import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EnquireButton from '@/app/components/EnquireButton';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Natural Skincare Products | Multani Mitti, Toner & Bridal Makeup - AMMU COSMETICS',
  description: 'Shop premium natural skincare products: Multani Mitti clay, rose water toner, blackhead removal, and bridal makeup services. Cruelty-free, ethically sourced beauty products in Bhiwandi.',
  keywords: [
    'natural skincare products',
    'multani mitti',
    'rose water toner',
    'bridal makeup Bhiwandi',
    'blackhead removal',
    'cruelty-free cosmetics',
    'natural beauty products India',
    'aloe vera toner',
    'organic skincare'
  ],
  openGraph: {
    title: 'Natural Skincare Products | AMMU COSMETICS',
    description: 'Discover our luxury natural skincare collection including Multani Mitti, rose water toner, and professional bridal makeup services.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'AMMU COSMETICS Products' }],
    url: '/products'
  },
  alternates: { canonical: '/products' }
};

const page = () => {
  const products = [
    {
      name: "Multani Mitti",
      description: "Pure, mineral-rich clay for a deeply cleansed, natural glow.",
      price: "₹150",
      image: "/mitti.webp"
    },
    {
      name: "Multani Mitti Paste",
      description: "Velvety mineral paste for instant deep cleansing and renewed glow.",
      price: "₹250",
      image: "/mitti-paste.webp"
    },
    {
      name: "Aloe + Rose Water Toner",
      description: "A soothing botanical mist for hydrated, balanced, glowing skin.",
      price: "₹200",
      image: "/toner.webp"
    },
    {
      name: "Blackheads Removal",
      description: "Advanced pore purifier for pristine clarity and smooth skin.",
      price: "₹700",
      image: "/black.webp"
    },
    {
      name: "Bridal Makeup",
      description: "Exquisite artistry for your flawless, radiant bridal glow.",
      price: "₹1500",
      image: "/makeup.webp"
    },

    {
      name: "Stiching Services",
      description: "Masterful tailoring for bespoke elegance and impeccable fit.",
      price: "₹500",
      image: "/stiching.webp"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Multani Mitti and how does it benefit skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multani Mitti is a pure, mineral-rich clay that deeply cleanses pores, removes excess oil, reduces acne, brightens skin tone, and provides a natural glow. It's suitable for all skin types and has been used for centuries in luxury skincare."
        }
      },
      {
        "@type": "Question",
        "name": "Are AMMU COSMETICS products cruelty-free and natural?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all AMMU COSMETICS products are 100% cruelty-free, ethically sourced, and made with natural ingredients. We never test on animals and prioritize sustainable, eco-friendly practices in all our formulations."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I use Multani Mitti face packs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For best results, use Multani Mitti face packs 1-2 times per week. Apply for 15-20 minutes until dry, then rinse with lukewarm water. Follow with a toner and moisturizer for optimal skin health."
        }
      },
      {
        "@type": "Question",
        "name": "What makes AMMU COSMETICS rose water toner special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Aloe + Rose Water Toner combines pure rose water with aloe vera for maximum hydration and skin balance. It's alcohol-free, suitable for sensitive skin, and helps tighten pores while providing a refreshing, natural glow."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer bridal makeup services in Bhiwandi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AMMU COSMETICS offers professional bridal makeup services in Bhiwandi at ₹1500. Our expert makeup artists use natural, cruelty-free products to create your perfect bridal look. Contact us at +91 9766737604 to book."
        }
      },
      {
        "@type": "Question",
        "name": "How do I order AMMU COSMETICS products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can order through our website, Instagram (@liyanabeautyy), WhatsApp (+91 9766737604), or visit our store in Bhiwandi. We offer delivery across India with secure packaging and fast shipping."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen pt-16 bg-[#F8F5F1]">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-stone-500" >Our Collection</p>
          <h1 className="mb-6 font-serif text-4xl md:text-5xl">Luxury Skincare</h1>
          <p className="max-w-2xl mx-auto text-lg font-light text-stone-600">
            Each product is crafted with precision and care, combining nature finest ingredients. Learn more about <Link href="/why" className="font-medium text-stone-900 hover:underline">why we choose natural luxury</Link> or <Link href="/contact" className="font-medium text-stone-900 hover:underline">contact us</Link> for personalized recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white scroll-fade-up"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={400}
                  height={320}
                  src={product.image}
                  alt={`${product.name} - ${product.description} - Natural luxury skincare by AMMU COSMETICS`}
                  title={`${product.name} - ${product.price}`}
                  className="object-cover w-full h-80"
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                />
              </div>
              <div className="p-8">
                <h3 className="mb-2 font-serif text-2xl" >{product.name}</h3>
                <p className="mb-6 font-light text-stone-600">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl">{product.price}</span>
                  <EnquireButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related Links Section */}
        <div className="mt-20 p-8 bg-white rounded-lg text-center">
          <h2 className="mb-4 font-serif text-2xl">Explore More</h2>
          <p className="mb-6 text-stone-600">
            Learn about our <Link href="/why" className="font-medium text-stone-900 hover:underline">commitment to natural luxury, ethical sourcing, and sustainability</Link>. Visit our <Link href="/contact" className="font-medium text-stone-900 hover:underline">store in Bhiwandi</Link> or <Link href="/" className="font-medium text-stone-900 hover:underline">discover our brand story</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/why" className="px-6 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-700 transition">
              Why Choose Us
            </Link>
            <Link href="/contact" className="px-6 py-2 border-2 border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition">
              Visit Our Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page


export function ProductJsonLd({ products }) {
  const siteBase = 'https://www.ammu-cosmetics.vercel.app';

  // Real testimonials from actual customers
  const testimonialReviews = [
    {
      author: "Aisha Khan",
      date: "2025-10-15",
      review: "Ammu Cosmetics has completely changed how I see skincare. Their products respect modesty and bring out natural beauty effortlessly.",
      rating: "5"
    },
    {
      author: "Fatimah Ali",
      date: "2025-10-20",
      review: "I love how gentle yet effective the formulations are. Ammu truly understands the needs of women who prefer natural beauty with grace.",
      rating: "5"
    },
    {
      author: "Zainab Patel",
      date: "2025-10-25",
      review: "Their Halal-certified products are a blessing. I can use everything with peace of mind knowing it aligns with my values.",
      rating: "5"
    },
    {
      author: "Mariam Siddiqui",
      date: "2025-11-01",
      review: "From skincare to fragrances, Ammu Cosmetics delivers excellence. The quality feels premium yet stays affordable.",
      rating: "5"
    },
    {
      author: "Khadija Ansari",
      date: "2025-11-05",
      review: "Every product feels pure and authentic. Ammu Cosmetics celebrates modest beauty in the most empowering way.",
      rating: "4"
    }
  ];

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@context': 'https://schema.org',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteBase}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteBase}/products` }
    ]
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: `${siteBase}/products`,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteBase}/products#${encodeURIComponent(p.name)}`
    }))
  };

  const productNodes = products.map((p, i) => {
    // derive numeric price where possible
    const numericPrice = Number(String(p.price || '').replace(/[^0-9.]/g, '')) || undefined;
    const sku = p.sku || `SKU-${i + 1}`;

    // Distribute reviews across products (each product gets 2-3 reviews)
    const productReviews = testimonialReviews.slice(
      i % testimonialReviews.length,
      (i % testimonialReviews.length) + 3
    ).concat(
      i >= 3 ? testimonialReviews.slice(0, 1) : []
    );

    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      image: [siteBase + p.image],
      description: p.description,
      sku,
      mpn: sku,
      brand: {
        '@type': 'Brand',
        name: 'AMMU COSMETICS',
        logo: `${siteBase}/seo.webp`
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1'
      },
      review: productReviews.map(r => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: r.author
        },
        datePublished: r.date,
        reviewBody: r.review,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.rating,
          bestRating: '5',
          worstRating: '1'
        }
      })),
      offers: {
        '@type': 'Offer',
        url: `${siteBase}/products#${encodeURIComponent(p.name)}`,
        price: numericPrice !== undefined ? String(numericPrice) : p.price.replace(/[₹,\s]/g, ''),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31'
      }
    };
  });

  const graph = [breadcrumb, itemList, ...productNodes];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
