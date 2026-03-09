import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "N'Famara Dabo | AI Engineer & Student Athlete",
  description:
    "Portfolio of N'Famara Dabo — CS & Economics @ Brown University, Division I Student-Athlete, AI/ML Engineer, and Data Scientist.",
  keywords: [
    'N\'Famara Dabo',
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
      <body className={`${lexend.variable} font-display bg-bg-dark text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
