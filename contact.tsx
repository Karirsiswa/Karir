import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Kontak BK</h2>
      <p className="text-gray-700 text-lg mb-6">
        Hubungi Guru BK melalui form ini atau datang langsung ke ruang BK untuk konsultasi karir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
              <CardDescription>Isi form berikut untuk mengirim pesan ke Guru BK</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">
                      Nama
                    </label>
                    <Input id="name" placeholder="Nama lengkap" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="class" className="font-medium">
                      Kelas
                    </label>
                    <Input id="class" placeholder="Contoh: XII IPA 1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Email kamu" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-medium">
                    Subjek
                  </label>
                  <Input id="subject" placeholder="Subjek pesan" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    Pesan
                  </label>
                  <Textarea id="message" placeholder="Tulis pesan kamu di sini" rows={4} />
                </div>
                <Button type="submit" className="w-full md:w-auto">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">Alamat</p>
                  <p className="text-gray-600">Ruang BK, SMA Negeri 1 Pangkep</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">Telepon</p>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">bk@sman1pangkep.sch.id</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-medium mb-1">Jam Layanan</p>
                <p className="text-gray-600">Senin - Jumat: 08.00 - 15.00</p>
                <p className="text-gray-600">Sabtu: 08.00 - 12.00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
