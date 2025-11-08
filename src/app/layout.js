import "./globals.css";
import BubbleMenu from "./components/BubbleMenu";
import Footer from "./components/Footer";
import BreadcrumbSchema from "./components/BreadcrumbSchema";


export const metadataBase = new URL("https://www.ammu-cosmetics.vercel.app");

export const metadata = {
  title: "AMMU COSMETICS",
  description: "Pure. Natural. You. - Natural luxury skincare and cosmetics",
  keywords: [
    "ammu cosmetics",
    "natural skincare",
    "cruelty-free beauty",
    "sustainable cosmetics",
    "luxury skincare"
  ],
  authors: [{ name: "Ammu Cosmetics", url: "https://www.ammu-cosmetics.vercel.app" }],
  creator: "Ammu Cosmetics",
  openGraph: {
    title: "AMMU COSMETICS - Pure. Natural. You.",
    description: "Natural luxury skincare crafted with ethically sourced ingredients.",
    url: "/",
    siteName: "AMMU COSMETICS",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "AMMU COSMETICS"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AMMU COSMETICS",
    description: "Pure. Natural. You.",
    images: ["/og.webp"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
    }
  },
  verification: {
    google: "your-google-verification-code-here",
    // Add your actual verification code from Google Search Console
    // Example: google: "1234567890abcdefghijklmnopqrstuvwxyz"
  }
};

export default function RootLayout({ children }) {
  const items = [
    {
      label: 'Home',
      href: '/',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#E8E1D9', textColor: '#000000' }
    },
    {
      label: 'Products',
      href: '/products',
      ariaLabel: 'Products',
      rotation: 8,
      hoverStyles: { bgColor: '#E8E1D9', textColor: '#000000' }
    },
    {
      label: 'Why Us?',
      href: '/why',
      ariaLabel: 'Why Us?',
      rotation: 8,
      hoverStyles: { bgColor: '#E8E1D9', textColor: '#000000' }
    },
    {
      label: 'Contact',
      href: '/contact',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#E8E1D9', textColor: '#000000' }
    }
  ];

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body>
        <BreadcrumbSchema />
        <BubbleMenu
          logo="/ammu-logo.webp"
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="#1c1917"
          menuContentColor="#ffffff"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />

        <main>
          {children}
        </main>

        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": metadataBase.href + "#organization",
                  name: "AMMU COSMETICS",
                  url: metadataBase.href,
                  logo: new URL('/ammu-logo.webp', metadataBase).href,
                  sameAs: [
                    "https://www.instagram.com/liyanabeautyy/"
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+91-9766737604",
                      contactType: "customer service",
                      areaServed: "IN",
                      availableLanguage: ["en", "hi"]
                    }
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": metadataBase.href + "#localbusiness",
                  name: "AMMU COSMETICS",
                  image: new URL('/ammu-logo.webp', metadataBase).href,
                  url: metadataBase.href,
                  telephone: "+91-9766737604",
                  email: "ammucosmetics00@gmail.com",
                  priceRange: "₹₹",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Khatiza Compound, Second Floor",
                    addressLocality: "Bhiwandi",
                    addressRegion: "Maharashtra",
                    postalCode: "401503",
                    addressCountry: "IN"
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 19.3009,
                    longitude: 73.0635
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      opens: "09:00",
                      closes: "18:00"
                    }
                  ],
                  sameAs: [
                    "https://www.instagram.com/liyanabeautyy/",
                    "https://wa.me/919766737604"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": metadataBase.href + "#website",
                  url: metadataBase.href,
                  name: "AMMU COSMETICS",
                  description: "Pure. Natural. You. - Natural luxury skincare and cosmetics",
                  publisher: {
                    "@id": metadataBase.href + "#organization"
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: metadataBase.href + "/products?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
