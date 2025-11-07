import Image from 'next/image'
import Link from 'next/link'
import { AnimatedTestimonialsDemo as Testimonials } from '@/app/components/Testimonials';

export const metadata = {
  title: 'AMMU COSMETICS - Pure. Natural. You.',
  description: 'Natural luxury skincare crafted with ethically sourced ingredients.',
  openGraph: {
    title: 'AMMU COSMETICS - Pure. Natural. You.',
    description: 'Natural luxury skincare crafted with ethically sourced ingredients.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'AMMU COSMETICS' }],
    url: '/'
  },
  alternates: { canonical: '/' }
};

const page = () => {


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
          aria-label="AMMU COSMETICS hero video"
        ></video>

        {/* Overlay (optional, for better contrast) */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
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
                className="p-8 transition-all duration-500 transform bg-white card-hover hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-8 overflow-hidden">
                  <Image
                    width={400}
                    height={256}
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-64 transition-transform duration-700 hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                <h3 className="mb-4 font-serif text-2xl">{feature.title}</h3>
                <p className="font-light leading-relaxed text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quotes Section */}
      <section className="relative py-32 overflow-hidden bg-[#E8E1D9]">
        <div className="absolute inset-0 bg-[url('/home-image.webp')] opacity-5" />
        <div className="relative max-w-4xl px-4 mx-auto text-center">
          <p className="mb-8 font-serif text-3xl italic md:text-4xl">
            Beauty begins the moment you decide to be yourself
          </p>
          <p className="text-stone-600 uppercase ">Coco Chanel</p>
        </div>
      </section>

      <section className='relative overflow-hidden bg-[#F8F5F1] text-stone-200'>
        <Testimonials />
      </section>
    </div>
  )
}

export default page


