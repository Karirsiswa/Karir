import { MessageSquare, Users, Search, MessageCircle, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Forum() {
  return (
    <section id="forum" className="scroll-mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Forum Diskusi</h2>
      <p className="text-gray-700 text-lg mb-6">
        Diskusikan topik seputar studi lanjut, kampus impian, atau tanya langsung ke guru BK dan alumni.
      </p>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input placeholder="Cari topik diskusi..." className="pl-10" />
          </div>
        </div>
        <Button className="md:w-auto">
          <MessageCircle className="h-4 w-4 mr-2" />
          Buat Topik Baru
        </Button>
      </div>

      <Tabs defaultValue="populer" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="populer">Populer</TabsTrigger>
          <TabsTrigger value="terbaru">Terbaru</TabsTrigger>
          <TabsTrigger value="jurusan">Jurusan</TabsTrigger>
          <TabsTrigger value="kampus">Kampus</TabsTrigger>
        </TabsList>

        <TabsContent value="populer" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Tips Lolos SNMPTN dan SBMPTN 2025</CardTitle>
                  <CardDescription>Dibuat oleh Pak Budi (Guru BK) • 3 hari yang lalu</CardDescription>
                </div>
                <Badge variant="secondary">Hot</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Halo adik-adik, di thread ini saya akan berbagi tips dan strategi untuk lolos seleksi masuk PTN favorit
                melalui jalur SNMPTN dan SBMPTN tahun 2025. Persiapan apa saja yang perlu dilakukan?
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 42 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 156 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    Perbandingan Jurusan Teknik Informatika dan Sistem Informasi
                  </CardTitle>
                  <CardDescription>Dibuat oleh Andi (Alumni) • 1 minggu yang lalu</CardDescription>
                </div>
                <Badge variant="secondary">Trending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Banyak yang masih bingung perbedaan antara jurusan Teknik Informatika dan Sistem Informasi. Di thread
                ini saya akan jelaskan perbedaan kurikulum, prospek kerja, dan gaji untuk kedua jurusan tersebut.
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 38 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 129 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Pengalaman Kuliah di Luar Negeri dengan Beasiswa LPDP</CardTitle>
                  <CardDescription>Dibuat oleh Sinta (Alumni) • 2 minggu yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Halo semuanya! Saya ingin berbagi pengalaman kuliah S2 di University of Melbourne dengan beasiswa LPDP.
                Mulai dari persiapan dokumen, tips lolos seleksi, sampai kehidupan di Australia.
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 27 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 98 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="terbaru" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Bagaimana Cara Memilih Jurusan yang Tepat?</CardTitle>
                  <CardDescription>Dibuat oleh Dina (Siswa) • 6 jam yang lalu</CardDescription>
                </div>
                <Badge variant="secondary">Baru</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Saya siswa kelas 12 yang masih bingung memilih jurusan kuliah. Bagaimana cara mengetahui jurusan yang
                cocok dengan minat dan bakat? Apakah sebaiknya mengikuti passion atau prospek kerja?
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 5 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 23 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Info Beasiswa S1 untuk Keluarga Tidak Mampu</CardTitle>
                  <CardDescription>Dibuat oleh Ibu Sari (Guru BK) • 1 hari yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Untuk siswa dari keluarga tidak mampu, ada beberapa beasiswa yang bisa dimanfaatkan untuk kuliah S1.
                Berikut informasi lengkap tentang KIP Kuliah, Bidikmisi, dan beasiswa dari lembaga swasta.
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 12 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 45 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Jadwal UTBK-SNBT 2025 dan Strategi Persiapan</CardTitle>
                  <CardDescription>Dibuat oleh Pak Rudi (Guru) • 2 hari yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                LTMPT telah mengumumkan jadwal UTBK-SNBT 2025. Mari diskusikan strategi persiapan dan tips menghadapi
                tes masuk PTN tahun depan. Apa saja yang perlu dipersiapkan dari sekarang?
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 18 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 67 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="jurusan" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Prospek Kerja Jurusan Psikologi</CardTitle>
                  <CardDescription>Dibuat oleh Maya (Alumni) • 5 hari yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Sebagai lulusan Psikologi yang sudah bekerja 5 tahun, saya ingin berbagi pengalaman tentang peluang
                karir untuk jurusan Psikologi di Indonesia. Tidak hanya menjadi psikolog, ada banyak jalur karir lain!
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 24 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 89 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Jurusan Kedokteran: Ekspektasi vs Realita</CardTitle>
                  <CardDescription>Dibuat oleh dr. Aditya (Alumni) • 1 minggu yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Banyak yang bermimpi masuk kedokteran tanpa tahu realita sebenarnya. Di thread ini saya akan berbagi
                pengalaman kuliah kedokteran selama 6 tahun dan realita dunia kerja sebagai dokter di Indonesia.
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 31 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 112 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Jurusan Teknik yang Paling Prospektif 5 Tahun ke Depan</CardTitle>
                  <CardDescription>Dibuat oleh Ir. Bima (Praktisi) • 2 minggu yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Berdasarkan tren industri dan perkembangan teknologi, jurusan teknik apa yang paling menjanjikan untuk 5
                tahun ke depan? Mari diskusikan prospek karir dan gaji untuk berbagai bidang teknik.
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 29 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 103 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="kampus" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Kehidupan Kampus di Universitas Indonesia</CardTitle>
                  <CardDescription>Dibuat oleh Dian (Mahasiswa) • 4 hari yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Sebagai mahasiswa UI tahun kedua, saya ingin berbagi pengalaman tentang kehidupan kampus di UI. Mulai
                dari akademik, organisasi, fasilitas, sampai tips bertahan hidup di Depok!
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 22 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 78 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Perbandingan Kampus Negeri vs Swasta</CardTitle>
                  <CardDescription>Dibuat oleh Pak Hendra (Guru BK) • 1 minggu yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Banyak siswa dan orang tua yang masih bingung memilih antara PTN dan PTS. Mari diskusikan kelebihan dan
                kekurangan masing-masing, termasuk biaya, kualitas pendidikan, dan prospek kerja.
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 35 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 124 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Kuliah di Luar Jawa: Pengalaman di Universitas Hasanuddin</CardTitle>
                  <CardDescription>Dibuat oleh Fadli (Mahasiswa) • 2 minggu yang lalu</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">
                Banyak yang fokus kuliah di Jawa, padahal kampus di luar Jawa juga bagus! Saya akan berbagi pengalaman
                kuliah di Universitas Hasanuddin Makassar, termasuk kualitas pendidikan dan biaya hidup.
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> 19 komentar
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 67 dilihat
                </span>
              </div>
              <Button variant="ghost" size="sm">
                Lihat Diskusi
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-800">Butuh bantuan?</h3>
            <p className="text-sm text-blue-700 mt-1">
              Jika kamu memiliki pertanyaan spesifik tentang jurusan atau kampus, jangan ragu untuk membuat topik baru
              di forum atau menghubungi Guru BK secara langsung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
