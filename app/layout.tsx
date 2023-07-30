import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './(components)/(nav)/Navbar'
import Footer from './(components)/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Games Kit',
  description: 'App for card game rules and calculator for each of the games',
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  )
}
