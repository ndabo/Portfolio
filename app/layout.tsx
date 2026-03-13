import type { Metadata } from 'next'
import { Bebas_Neue, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "N'Famara Dabo | AI Engineer & Student Athlete",
  description:
    "Portfolio of N'Famara Dabo — CS & Economics @ Brown University, Division I Student-Athlete, AI/ML Engineer, and Data Scientist.",
  keywords: [
    "N'Famara Dabo",
    'Brown University',
    'AI Engineer',
    'Data Science',
    'Machine Learning',
    'Student Athlete',
    'Portfolio',
  ],
  authors: [{ name: "N'Famara Dabo" }],
  openGraph: {
    title: "N'Famara Dabo | AI Engineer & Student Athlete",
    description:
      'CS & Economics @ Brown University. Division I Athlete. Building intelligent systems with athletic precision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} font-ibm bg-bg-dark text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
