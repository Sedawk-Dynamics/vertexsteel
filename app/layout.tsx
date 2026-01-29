import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vertex Steel and Engineering Services | Precision Steel Detailing Solutions',
  description: 'Professional steel detailing services for structural and miscellaneous steel. We provide accurate, fabrication-ready drawings using BIM technology, connection design, and PEMB detailing.',
  keywords: ['steel detailing', 'structural steel', 'BIM detailing', 'fabrication drawings', 'connection design', 'PEMB detailing', 'shop drawings'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/vertex-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/vertex-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/vertex-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/vertex-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
