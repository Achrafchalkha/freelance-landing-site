import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { LanguageToggle } from "@/components/LanguageToggle"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Highway Academy - Professional Education in Fez, Morocco",
    template: "%s | Highway Academy"
  },
  description:
    "Highway Academy: Leading education center in Fez, Morocco. Academic support, language courses (English, French), IELTS/TOEFL preparation. Expert tutoring from primary to university level.",
  keywords: [
    'Highway Academy', 'education Fez', 'language courses Morocco', 'English courses Fez',
    'French courses', 'IELTS preparation', 'TOEFL preparation', 'academic support Morocco',
    'tutoring Fez', 'university preparation', 'conversation clubs', 'Montfleuri', 'Narjiss'
  ],
  authors: [{ name: 'Highway Academy', url: 'https://www.highwayacademy.ma' }],
  creator: 'Highway Academy',
  publisher: 'Highway Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.highwayacademy.ma',
    siteName: 'Highway Academy',
    title: 'Highway Academy - Professional Education in Fez, Morocco',
    description: 'Leading education center in Fez offering academic support, language courses, and exam preparation.',
    images: [
      {
        url: 'https://www.highwayacademy.ma/logo.png',
        width: 1200,
        height: 630,
        alt: 'Highway Academy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Highway Academy - Professional Education in Fez, Morocco',
    description: 'Leading education center in Fez offering academic support, language courses, and exam preparation.',
    images: ['https://www.highwayacademy.ma/logo.png'],
  },
  verification: {
    google: 'svqLgvsjpugCQk72lNiQEmn_jmEXLABj9_eruZH0MuM',
  },
  alternates: {
    canonical: 'https://www.highwayacademy.ma',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favcon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/classroom-bg.jpg" as="image" />
        <link rel="dns-prefetch" href="//tile.openstreetmap.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Highway Academy",
              "alternateName": "Highway Academy Fez",
              "description": "Professional education academy in Fez, Morocco offering academic support, language courses, and exam preparation from primary school to university level.",
              "url": "https://www.highwayacademy.ma",
              "logo": "https://www.highwayacademy.ma/logo.png",
              "image": "https://www.highwayacademy.ma/logo.png",
              "telephone": ["+212535765701", "+212535614990"],
              "email": "highwayaca@gmail.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Montfleuri",
                  "addressLocality": "Fez",
                  "addressCountry": "Morocco",
                  "telephone": "+212535765701"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Narjiss",
                  "addressLocality": "Fez",
                  "addressCountry": "Morocco",
                  "telephone": "+212535614990"
                }
              ],
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": 34.00595865995687,
                  "longitude": -4.984858206671568
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 34.008281113881154,
                  "longitude": -4.969071282883572
                }
              ],
              "sameAs": [
                "https://www.instagram.com/highwayacademy/",
                "https://www.facebook.com/highwayacademyFez"
              ],
              "openingHours": "Mo-Sa 09:00-23:00",
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Fez",
                "addressCountry": "Morocco"
              },
              "serviceType": [
                "Academic Support",
                "Language Courses",
                "English Courses",
                "French Courses",
                "IELTS Preparation",
                "TOEFL Preparation",
                "University Preparation",
                "Conversation Clubs"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${notoSansArabic.className} bg-[#121212] text-[#F5F5F5] antialiased`}>
        <LanguageProvider>
          <PerformanceOptimizer />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
          <LanguageToggle />
          <Toaster
            theme="dark"
            position="top-right"
            toastOptions={{
              style: {
                background: '#1E1E1E',
                border: '1px solid #333',
                color: '#F5F5F5',
              },
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  )
}
