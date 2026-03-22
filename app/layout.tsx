import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aziz Marzouki – Full Stack Developer',
  description:
    'Computer Engineering graduate specializing in fullstack web development, DevOps, and mobile development. Based in Paris, France.',
  keywords: [
    'Aziz Marzouki',
    'Full Stack Developer',
    'Software Architect',
    'React',
    'Node.js',
    'DevOps',
    'Paris',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
