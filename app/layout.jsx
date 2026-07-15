import { Analytics } from '@vercel/analytics/next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Al Hashim General Contractor - Construction & Contracting Services',
  description: 'Professional general contracting services in Karachi and UAE. Site preparation, excavation, structural work, and complete construction solutions.',
  metadataBase: new URL('https://al-hashim-contractor.com'),
  generator: 'Next.js',
  keywords: ['construction', 'general contractor', 'Karachi', 'UAE', 'civil engineering', 'site preparation'],
  openGraph: {
    title: 'Al Hashim General Contractor',
    description: 'Professional construction and contracting services',
    url: 'https://al-hashim-contractor.com',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Al Hashim General Contractor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Hashim General Contractor',
    description: 'Professional construction and contracting services',
    images: ['/og-image.png'],
  },
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
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#0F6B5C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <head>
        <link rel="canonical" href="https://al-hashim-contractor.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GeneralContractor',
              name: 'Al Hashim General Contractor',
              url: 'https://al-hashim-contractor.com',
              logo: 'https://al-hashim-contractor.com/logo.png',
              description: 'Professional general contracting services specializing in site preparation, excavation, and structural work.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'A-256, Block-T, North Nazimabad',
                addressLocality: 'Karachi',
                addressRegion: 'Sindh',
                postalCode: '74700',
                addressCountry: 'PK',
              },
              telephone: '+92-333-2242472',
              email: 'faryousafzai@gmail.com',
              foundingDate: '2009',
              areaServed: ['Karachi, Pakistan', 'United Arab Emirates'],
              sameAs: [
                'https://www.facebook.com/alhashimcontractor',
                'https://www.linkedin.com/company/al-hashim-contractor',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Al Hashim General Contractor',
              url: 'https://al-hashim-contractor.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://al-hashim-contractor.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        <nav className="bg-white border-b border-border sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-accent">Al Hashim</Link>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-foreground hover:text-accent transition font-medium">Home</Link>
                <Link href="/about" className="text-foreground hover:text-accent transition font-medium">About</Link>
                <Link href="/services" className="text-foreground hover:text-accent transition font-medium">Services</Link>
                <Link href="/projects" className="text-foreground hover:text-accent transition font-medium">Projects</Link>
                <Link href="/industries" className="text-foreground hover:text-accent transition font-medium">Industries</Link>
                <Link href="/faq" className="text-foreground hover:text-accent transition font-medium">FAQ</Link>
                <Link href="/contact" className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition font-semibold">Get Started</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex-1">
          {children}
        </div>
        <footer className="bg-foreground text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-12 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Al Hashim Contractor</h3>
                <p className="text-white/70 text-sm">Professional general contracting since 2009.</p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Quick Links</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/about" className="text-white/70 hover:text-white transition">About</Link></li>
                  <li><Link href="/services" className="text-white/70 hover:text-white transition">Services</Link></li>
                  <li><Link href="/projects" className="text-white/70 hover:text-white transition">Projects</Link></li>
                  <li><Link href="/contact" className="text-white/70 hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Contact</h4>
                <p className="text-white/70 text-sm">Phone: +92-333-2242472</p>
                <p className="text-white/70 text-sm">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
              <p>&copy; {new Date().getFullYear()} Al Hashim General Contractor. All rights reserved.</p>
            </div>
          </div>
        </footer>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
