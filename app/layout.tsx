import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Merriweather } from "next/font/google"
import { GeistSans } from "geist/font/sans" // Importing Geist Sans

import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Alex Chen - Full-stack Developer",
  description: "Portfolio of Alex Chen, a full-stack developer specializing in modern web applications",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${jetbrainsMono.variable} ${merriweather.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
