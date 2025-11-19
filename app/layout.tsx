import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MA Transform Lab | Sovereignty & Systems Innovation',
  description: 'Transform your life, systems, and business with AI-powered human optimization. Sovereign Identity Framework, Metabolic Mastery, and Digital Business Validation.',
  keywords: 'human systems optimization, AI transformation, metabolic mastery, sovereign identity, business validation',
  authors: [{ name: 'Mahmoud Ahmed', url: 'https://matransformlab.vercel.app' }],
  openGraph: {
    title: 'MA Transform Lab',
    description: 'Next-generation human systems optimization and AI transformation',
    type: 'website',
    url: 'https://matransformlab.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MA Transform Lab',
    description: 'Human Systems Optimization & AI Transformation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <ScrollToTopButton />
        <script src="https://gumroad.com/js/gumroad.js" async></script>
      </body>
    </html>
  )
}
function ScrollToTopButton() {
  return (
    <div className="scroll-to-top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  )
}
