import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KarirSiswa.id - Media Informasi Karir & Studi Lanjut Siswa SMA",
  description:
    "Platform untuk membantu siswa SMA dalam memilih jurusan dan studi lanjut yang sesuai minat, bakat, dan tujuan masa depan mereka.",
  openGraph: {
    title: "KarirSiswa.id - Media Informasi Karir & Studi Lanjut",
    description: "Platform informasi karir dan studi lanjut untuk siswa SMA",
    images: [
      {
        url: "https://source.unsplash.com/featured/?student,career",
        width: 1200,
        height: 630,
        alt: "KarirSiswa.id",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KarirSiswa.id - Media Informasi Karir & Studi Lanjut",
    description: "Platform informasi karir dan studi lanjut untuk siswa SMA",
    images: ["https://source.unsplash.com/featured/?student,career"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
