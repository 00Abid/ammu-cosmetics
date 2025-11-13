import Image from 'next/image'
import Link from 'next/link'
import { AnimatedTestimonialsDemo as Testimonials } from '@/app/components/Testimonials';
import ScrollReveal from './components/ScrollReveal';

export const metadata = {
  title: 'AMMU COSMETICS - Natural Luxury Skincare | Cruelty-Free Beauty Products',
  description: 'Discover AMMU COSMETICS - Premium natural skincare with Multani Mitti, rose water toner, and organic beauty products. Cruelty-free, ethically sourced, sustainable luxury cosmetics in Bhiwandi, India.',
  keywords: [
    'natural skincare India',
    'cruelty-free cosmetics',
    'organic beauty products',
    'sustainable skincare',
    'luxury natural cosmetics',
    'ethical beauty brand',
    'Bhiwandi beauty products',
    'chemical-free skincare'
  ],
  openGraph: {
    title: 'AMMU COSMETICS - Pure. Natural. You.',
    description: 'Premium natural luxury skincare crafted with ethically sourced ingredients. Cruelty-free, sustainable, and organic beauty products.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'AMMU COSMETICS' }],
    url: '/'
  },
  alternates: { canonical: '/' }
};

const page = () => {
  const siteBase = 'https://www.ammu-cosmetics.vercel.app';

  // VideoObject Schema for hero video
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "AMMU COSMETICS - Natural Luxury Skincare",
    "description": "Discover AMMU COSMETICS premium natural skincare products. Pure, natural, and ethically sourced beauty products in Bhiwandi, India.",
    "thumbnailUrl": `${siteBase}/og.webp`,
    "uploadDate": "2024-11-01",
    "contentUrl": `${siteBase}/hero.mp4`,
    "embedUrl": `${siteBase}/`,
    "duration": "PT30S"
  };

  // AggregateRating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AMMU COSMETICS Natural Skincare Collection",
    "image": `${siteBase}/og.webp`,
    "description": "Premium natural luxury skincare products including Multani Mitti, rose water toner, and bridal makeup services.",
    "brand": {
      "@type": "Brand",
      "name": "AMMU COSMETICS"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "150",
      "highPrice": "1500",
      "offerCount": "6"
    }
  };

  const features = [
    {
      title: "Natural Luxury",
      description: "Each ingredient is meticulously sourced from the world's finest natural suppliers, ensuring unparalleled quality and efficacy.",
      image: "/natural beauty.webp"
    },
    {
      title: "Ethical Beauty",
      description: "Our commitment to cruelty-free practices and ethical sourcing sets a new standard in luxury skincare.",
      image: "/ethical beauty.webp"
    },
    {
      title: "Sustainable Luxury",
      description: "Elevating beauty while preserving our planet through sustainable practices and eco-conscious packaging.",
      image: "/luxury.webp"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <ScrollReveal />
      {/* Advanced Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      {/* Hero Section */}
      <div className="relative h-[90vh] w-screen">
        {/* Background Video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="object-cover w-full h-full"
          aria-label="AMMU COSMETICS natural luxury skincare hero video showcasing premium beauty products"
          title="Natural luxury skincare by AMMU COSMETICS"
        ></video>

        {/* Overlay (optional, for better contrast) */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center scroll-zoom-in">
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif">
            AMMU COSMETICS
          </h1>
          <p className="text-gray-200 mt-4 text-2xl md:text-3xl">
            Pure. Natural. You.
          </p>

          <Link
            href="/products"
            className="mt-8 px-8 py-3 bg-stone-900 text-stone-300 rounded-full font-semibold hover:bg-stone-400 hover:text-black transition duration-300"
          >
            Explore Collection
          </Link>
        </div>
      </div>


      {/* Features Section */}
      <section className="py-32 bg-[#F8F5F1]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-24 text-center">
            <p className="text-sm uppercase tracking-[0.2em] mb-4 text-stone-500">Our Philosophy</p>
            <h2 className="mb-6 font-serif text-4xl md:text-5xl">The Essence of LIYANA BEAUTY</h2>
            <p className="max-w-2xl mx-auto text-lg font-light text-stone-600">
              Every product is a testament to our commitment to excellence and natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-500 transform bg-white card-hover hover:-translate-y-2 hover:shadow-xl scroll-slide-up"
              >
                <div className="mb-8 overflow-hidden">
                  <Image
                    width={400}
                    height={256}
                    src={feature.image}
                    alt={`${feature.title} - ${feature.description.substring(0, 80)}`}
                    title={feature.title}
                    className="object-cover w-full h-64 transition-transform duration-700 hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                <h3 className="mb-4 font-serif text-2xl">{feature.title}</h3>
                <p className="font-light leading-relaxed text-stone-600">{feature.description}</p>
                <Link 
                  href="/why" 
                  className="inline-block mt-4 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-stone-600">
              Discover our collection of <Link href="/products" className="font-medium text-stone-900 hover:underline">natural luxury skincare products</Link> including <Link href="/products#Multani-Mitti" className="font-medium text-stone-900 hover:underline">Multani Mitti</Link>, <Link href="/products#Aloe-Rose-Water-Toner" className="font-medium text-stone-900 hover:underline">rose water toner</Link>, and <Link href="/products#Bridal-Makeup" className="font-medium text-stone-900 hover:underline">bridal makeup services</Link> in Bhiwandi.
            </p>
          </div>
        </div>
      </section>


      {/* Quotes Section */}
      <section className="relative py-32 overflow-hidden bg-[#E8E1D9]">
        <div className="absolute inset-0 bg-[url('/home-image.webp')] opacity-5" />
        <div className="relative max-w-4xl px-4 mx-auto text-center scroll-fade">
          <p className="mb-8 font-serif text-3xl italic md:text-4xl">
            Beauty begins the moment you decide to be yourself
          </p>
          <p className="text-stone-600 uppercase ">Coco Chanel</p>
        </div>
      </section>

      <section className='relative overflow-hidden bg-[#F8F5F1] text-stone-200'>
        <Testimonials />
      </section>

      {/* CTA Section with Internal Links */}
      <section className="py-20 bg-[#E8E1D9] text-white">
        <div className="px-4 mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl md:text-4xl text-black">Ready to Experience Natural Luxury?</h2>
          <p className="mb-8 text-lg text-black">
            Explore our <Link href="/products" className="underline-none font-medium hover:text-stone-700">premium skincare collection</Link> or learn more about <Link href="/why" className="underline-none font-medium hover:text-stone-700">why natural beauty matters</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-stone-900 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Shop Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 border-2 border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page


