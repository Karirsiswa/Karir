import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white py-8 px-4 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KarirSiswa.id</h3>
            <p className="text-blue-200 mb-4">
              Media Bimbingan Karir SMA Negeri 1 Pangkep. Membantu siswa menemukan jalur pendidikan dan karir yang
              tepat.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#beranda" className="text-blue-200 hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#kampus" className="text-blue-200 hover:text-white">
                  Info Kampus
                </Link>
              </li>
              <li>
                <Link href="#karir" className="text-blue-200 hover:text-white">
                  Rekomendasi Karir
                </Link>
              </li>
              <li>
                <Link href="#forum" className="text-blue-200 hover:text-white">
                  Forum Diskusi
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="text-blue-200 hover:text-white">
                  Kontak BK
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-300" />
                <span>bk@sman1pangkep.sch.id</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-300" />
                <span>+62 812 3456 7890</span>
              </div>
              <p className="text-blue-200 mt-2">
                Ruang BK, SMA Negeri 1 Pangkep
                <br />
                Jl. Pendidikan, Pangkajene, Sulawesi Selatan
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="mb-2">&copy; {currentYear} KarirSiswa.id | Media Bimbingan Karir SMA Negeri 1 Pangkep</p>
          <div className="text-sm text-blue-200">
            <p>Membantu siswa menemukan jalur pendidikan dan karir yang tepat</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
