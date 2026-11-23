import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider, themeScript } from '@/components/ThemeProvider'
import { site } from '@/lib/site'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const title = `${site.name} – ${site.role}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [
    'Aziz Marzouki',
    'Tech Lead',
    'AI engineer',
    'Google ADK',
    'Vertex AI',
    'RAG',
    'Google Cloud',
    'Luxembourg',
    'Algora',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/images/favicon.png' },
  openGraph: {
    type: 'profile',
    url: '/',
    title,
    description: site.description,
    images: [{ url: '/images/portrait.jpg', alt: site.name }],
  },
  twitter: { card: 'summary', title, description: site.description },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  worksFor: { '@type': 'Organization', name: 'Algora', url: 'https://algora.lu' },
  address: { '@type': 'PostalAddress', addressCountry: 'LU' },
  url: site.url,
  sameAs: ['https://www.linkedin.com/in/aziz-marzouki/', 'https://github.com/MarzoukiAziz'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${sans.variable} ${display.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Without JavaScript nothing triggers the scroll reveals, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
