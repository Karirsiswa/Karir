"use client"

import { Share2, Facebook, Twitter, Linkedin, Link } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { ToastProvider } from "@/components/ui/toast"

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false)

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = "KarirSiswa.id - Media Informasi Karir & Studi Lanjut Siswa SMA"

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
          "_blank",
        )
        break
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(
            text,
          )}`,
          "_blank",
        )
        break
      case "copy":
        navigator.clipboard.writeText(url).then(() => {
          setIsCopied(true)
          toast({
            title: "URL disalin!",
            description: "URL website telah disalin ke clipboard.",
          })
          setTimeout(() => setIsCopied(false), 2000)
        })
        break
      default:
        if (navigator.share) {
          navigator
            .share({
              title: text,
              url: url,
            })
            .catch((error) => console.log("Error sharing:", error))
        }
    }
  }

  return (
    <>
      <ToastProvider />
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white px-4 relative"
        style={{
          backgroundImage: "url('https://source.unsplash.com/featured/?student,career')",
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="absolute top-4 right-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleShare("facebook")}>
                <Facebook className="mr-2 h-4 w-4" />
                <span>Facebook</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("twitter")}>
                <Twitter className="mr-2 h-4 w-4" />
                <span>Twitter</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("linkedin")}>
                <Linkedin className="mr-2 h-4 w-4" />
                <span>LinkedIn</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("copy")}>
                <Link className="mr-2 h-4 w-4" />
                <span>{isCopied ? "URL Disalin!" : "Salin URL"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl leading-tight drop-shadow-lg">
          Rancang Masa Depanmu Mulai Hari ini
        </h1>
      </div>
    </>
  )
}
