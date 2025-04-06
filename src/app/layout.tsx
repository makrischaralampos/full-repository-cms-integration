import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Charalampos Makris | Portfolio',
  description: 'Software engineer portfolio powered by Next.js + Sanity CMS',
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen px-6 py-12 md:px-10 lg:px-20 bg-background text-foreground">
          <div className="mx-auto max-w-5xl">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
