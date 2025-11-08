import React from 'react'
import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi';
import { MdOutlinePhone, MdMailOutline } from 'react-icons/md';
import FullForm from '../components/FullForm';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Contact AMMU COSMETICS | Natural Skincare Store in Bhiwandi',
  description: 'Contact AMMU COSMETICS for natural luxury skincare. Visit our store in Bhiwandi or shop online. Call +91 9766737604 or email ammucosmetics00@gmail.com. Open Mon-Sat 9 AM-6 PM.',
  keywords: [
    'contact Ammu Cosmetics',
    'skincare store Bhiwandi',
    'beauty salon Bhiwandi',
    'natural cosmetics Bhiwandi',
    'bridal makeup Bhiwandi',
    'buy natural skincare India'
  ],
  openGraph: {
    title: 'Contact AMMU COSMETICS | Bhiwandi Natural Skincare Store',
    description: 'Get in touch with AMMU COSMETICS. Visit us in Bhiwandi or contact us for natural luxury skincare products.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'Contact AMMU COSMETICS' }],
    url: '/contact'
  },
  alternates: { canonical: '/contact' }
};

const page = () => {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.ammu-cosmetics.vercel.app/#business',
    name: 'AMMU COSMETICS',
    image: 'https://www.ammu-cosmetics.vercel.app/ammu-logo.webp',
    url: 'https://www.ammu-cosmetics.vercel.app',
    telephone: '+919766737604',
    email: 'ammucosmetics00@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Khatiza Compound, Second Floor',
      addressLocality: 'Bhiwandi',
      postalCode: '401503',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.3009,
      longitude: 73.0635
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://www.instagram.com/liyanabeautyy/',
      'https://wa.me/919766737604'
    ],
    priceRange: '₹₹'
  };

  return (
    <div className="min-h-screen pt-24 bg-[#F8F5F1]">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-stone-500">Contact</p>
          <h1 className="mb-2 font-serif text-4xl md:text-5xl">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-lg font-light text-stone-600">
            Our dedicated concierge team is here to assist you with any inquiries about our <Link href="/products" className="font-medium text-stone-900 hover:underline">luxury skincare collection</Link>. Fill the form or use the contact details below and we will respond within 24 hours. Learn more about <Link href="/why" className="font-medium text-stone-900 hover:underline">why we choose natural luxury</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: contact details */}
          <div className="order-2 md:order-1 scroll-slide-up">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="mb-6 font-serif text-2xl">Contact Details</h2>

              <div className="space-y-6 text-stone-600">
                <div className="flex items-start">
                  <MdMailOutline className="w-6 h-6 mt-1 mr-4 text-black" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-black">Email</div>
                    <div className="font-light">ammucosmetics00@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdOutlinePhone className="w-6 h-6 mt-1 mr-4 text-black" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-black">Phone</div>
                    <div className="font-light">+91 9766737604</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMapPin className="w-6 h-6 mt-1 mr-4 text-black" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-black">Address</div>
                    <div className="font-light">Khatiza Compound, Second Floor, Bhiwandi 401503</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-serif text-lg">Shop on :</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.instagram.com/liyanabeautyy/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition">Instagram</a>
                  <a href="#" className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition">Amazon</a>
                  <a href="#" className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition">Flipkart</a>
                  <a href="https://wa.me/919766737604" className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="mb-4 font-serif text-2xl">Send Us a Message</h2>
              <p className="mb-6 text-sm text-stone-500">We’ll get back to you within 24 hours. For urgent enquiries please call the number above.</p>
              <FullForm />
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-16 p-8 bg-white rounded-lg text-center">
          <h2 className="mb-4 font-serif text-2xl">Explore AMMU COSMETICS</h2>
          <p className="mb-6 text-stone-600">
            Browse our <Link href="/products" className="font-medium text-stone-900 hover:underline">natural skincare products</Link> including <Link href="/products#Multani-Mitti" className="font-medium text-stone-900 hover:underline">Multani Mitti</Link> and <Link href="/products#Bridal-Makeup" className="font-medium text-stone-900 hover:underline">bridal makeup services</Link>. Learn about <Link href="/why" className="font-medium text-stone-900 hover:underline">our commitment to ethical beauty</Link> or visit our <Link href="/" className="font-medium text-stone-900 hover:underline">homepage</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
