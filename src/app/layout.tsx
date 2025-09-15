import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bhagesh Chavan - Portfolio',
  description: 'B.Tech CSE student skilled in MERN stack, REST APIs, SQL/NoSQL, Cloud, and DSA. Passionate about impactful software development.',
  keywords: 'Bhagesh Chavan, Portfolio, MERN Stack, React, Next.js, Full Stack Developer, Software Engineer',
  authors: [{ name: 'Bhagesh Chavan' }],
  openGraph: {
    title: 'Bhagesh Chavan - Portfolio',
    description: 'B.Tech CSE student skilled in MERN stack, REST APIs, SQL/NoSQL, Cloud, and DSA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
