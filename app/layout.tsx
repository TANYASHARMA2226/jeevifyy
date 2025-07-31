import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jeevifyy - Instant Emergency Health Assistant",
  description:
    "Rapid, coordinated help when every second counts. Emergency health assistance reachable within 10 minutes.",
  keywords: "emergency health, medical assistance, emergency response, healthcare technology, medical emergency",
  authors: [{ name: "Jeevifyy Team" }],
  openGraph: {
    title: "Jeevifyy - Your Instant Lifeline in Health Emergencies",
    description: "Rapid, coordinated help when every second counts. Reachable within 10 minutes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevifyy - Instant Emergency Health Assistant",
    description: "Rapid, coordinated help when every second counts.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
