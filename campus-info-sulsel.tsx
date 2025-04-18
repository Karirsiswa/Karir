import { MapPin, Building, Star, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CampusInfoSulsel() {
  return (
    <section id="kampus-sulsel" className="scroll-mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Universitas & Sekolah Tinggi di Sulawesi Selatan</h2>
      <p className="text-gray-700 text-lg mb-6">
        Berikut adalah daftar lengkap universitas dan sekolah tinggi yang ada di Sulawesi Selatan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-blue-600" />
              Universitas Negeri
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Universitas Hasanuddin (UNHAS)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: A</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Perintis Kemerdekaan KM. 10, Makassar 90245, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.unhas.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.unhas.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Hasanuddin adalah universitas negeri terbesar di Indonesia Timur yang didirikan pada
                      tahun 1956. UNHAS dikenal dengan keunggulannya di bidang kedokteran, teknik, dan ilmu kelautan.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Kedokteran</li>
                      <li>Fakultas Teknik</li>
                      <li>Fakultas Ekonomi dan Bisnis</li>
                      <li>Fakultas Hukum</li>
                      <li>Fakultas Ilmu Kelautan dan Perikanan</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Universitas Negeri Makassar (UNM)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: A</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. A.P. Pettarani, Makassar 90222, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.unm.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.unm.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Negeri Makassar adalah universitas negeri yang fokus pada bidang pendidikan dan
                      keguruan. Sebelumnya dikenal sebagai IKIP Ujung Pandang.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Ilmu Pendidikan</li>
                      <li>Fakultas Teknik</li>
                      <li>Fakultas Matematika dan IPA</li>
                      <li>Fakultas Bahasa dan Sastra</li>
                      <li>Fakultas Ekonomi</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Universitas Islam Negeri Alauddin Makassar (UIN Alauddin)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: A</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Sultan Alauddin No. 63, Makassar 90222, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.uin-alauddin.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.uin-alauddin.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      UIN Alauddin Makassar adalah universitas Islam negeri yang menggabungkan ilmu agama Islam dengan
                      ilmu umum modern. Sebelumnya dikenal sebagai IAIN Alauddin Makassar.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Syariah dan Hukum</li>
                      <li>Fakultas Tarbiyah dan Keguruan</li>
                      <li>Fakultas Kedokteran dan Ilmu Kesehatan</li>
                      <li>Fakultas Sains dan Teknologi</li>
                      <li>Fakultas Ekonomi dan Bisnis Islam</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Politeknik Negeri Ujung Pandang (PNUP)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: A</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Perintis Kemerdekaan KM. 10, Makassar 90245, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.poliupg.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.poliupg.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Politeknik Negeri Ujung Pandang adalah perguruan tinggi vokasi negeri yang fokus pada pendidikan
                      teknik dan terapan.
                    </p>
                    <p className="text-sm font-medium mt-2">Jurusan Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Teknik Elektro</li>
                      <li>Teknik Mesin</li>
                      <li>Teknik Sipil</li>
                      <li>Akuntansi</li>
                      <li>Administrasi Bisnis</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Universitas Sulawesi Barat (UNSULBAR)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Majene, Sulawesi Barat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: B</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Prof. Dr. Baharuddin Lopa, Majene 91412, Sulawesi Barat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.unsulbar.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.unsulbar.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Sulawesi Barat adalah universitas negeri yang didirikan pada tahun 2014, merupakan
                      universitas negeri termuda di Sulawesi.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Pertanian dan Kehutanan</li>
                      <li>Fakultas Kesehatan</li>
                      <li>Fakultas Teknik</li>
                      <li>Fakultas Ekonomi</li>
                      <li>Fakultas Ilmu Sosial dan Ilmu Politik</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-blue-600" />
              Universitas Swasta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Universitas Muslim Indonesia (UMI)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: A</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Urip Sumoharjo KM. 5, Makassar 90231, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.umi.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.umi.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Muslim Indonesia adalah universitas swasta tertua di Indonesia Timur yang didirikan
                      pada tahun 1954. UMI dikenal dengan keunggulannya di bidang kedokteran, teknik, dan ekonomi.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Kedokteran</li>
                      <li>Fakultas Teknik</li>
                      <li>Fakultas Ekonomi dan Bisnis</li>
                      <li>Fakultas Farmasi</li>
                      <li>Fakultas Hukum</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Universitas Bosowa (UNIBOS)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: B</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Urip Sumoharjo KM. 4, Makassar 90231, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.universitasbosowa.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.universitasbosowa.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Bosowa (sebelumnya Universitas 45 Makassar) adalah universitas swasta yang didirikan
                      oleh Grup Bosowa.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Ekonomi dan Bisnis</li>
                      <li>Fakultas Teknik</li>
                      <li>Fakultas Pertanian</li>
                      <li>Fakultas Ilmu Komputer</li>
                      <li>Fakultas Hukum</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Universitas Muhammadiyah Makassar (UNISMUH)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: B</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Sultan Alauddin No. 259, Makassar 90221, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.unismuh.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.unismuh.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Muhammadiyah Makassar adalah universitas swasta yang didirikan oleh organisasi
                      Muhammadiyah pada tahun 1963.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Keguruan dan Ilmu Pendidikan</li>
                      <li>Fakultas Ekonomi dan Bisnis</li>
                      <li>Fakultas Teknik</li>
                      <li>Fakultas Kedokteran</li>
                      <li>Fakultas Pertanian</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Universitas Cokroaminoto Palopo (UNCP)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Palopo, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: B</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Latammacelling No. 19, Palopo 91921, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.uncp.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.uncp.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Cokroaminoto Palopo adalah universitas swasta yang didirikan pada tahun 1967.
                    </p>
                    <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Fakultas Keguruan dan Ilmu Pendidikan</li>
                      <li>Fakultas Teknik Komputer</li>
                      <li>Fakultas Pertanian</li>
                      <li>Fakultas Ekonomi</li>
                      <li>Fakultas Sains</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>STMIK AKBA</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: B</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Perintis Kemerdekaan KM. 9, Makassar 90245, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.akba.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.akba.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      STMIK AKBA adalah sekolah tinggi yang fokus pada bidang teknologi informasi dan komputer.
                    </p>
                    <p className="text-sm font-medium mt-2">Program Studi:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Teknik Informatika</li>
                      <li>Sistem Informasi</li>
                      <li>Manajemen Informatika</li>
                      <li>Komputerisasi Akuntansi</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>STKIP ANDI MATAPPA</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Pangkep, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: B</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Andi Mauraga No. 70, Pangkajene, Pangkep, Sulawesi Selatan 90611</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://stkip-andi-matappa.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> stkip-andi-matappa.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      STKIP ANDI MATAPPA adalah sekolah tinggi yang fokus pada pendidikan guru dan ilmu kependidikan di
                      Sulawesi Selatan.
                    </p>
                    <p className="text-sm font-medium mt-2">Program Studi:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Pendidikan Matematika</li>
                      <li>Pendidikan Guru Sekolah Dasar (PGSD)</li>
                      <li>Bimbingan dan Konseling</li>
                      <li>Pendidikan Bahasa dan Sastra Indonesia</li>
                      <li>Pendidikan Bahasa Inggris</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Universitas Megarezky</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Makassar, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Akreditasi: B</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Jl. Antang Raya No. 43, Makassar 90234, Sulawesi Selatan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <a
                        href="https://www.universitasmegarezky.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-4 w-4" /> www.universitasmegarezky.ac.id
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Universitas Megarezky adalah perguruan tinggi swasta yang didirikan pada tahun 2008. Fokus pada
                      bidang kesehatan, pendidikan, dan teknologi informasi.
                    </p>
                    <p className="text-sm font-medium mt-2">Program Studi Populer:</p>
                    <ul className="text-sm list-disc list-inside">
                      <li>Keperawatan</li>
                      <li>Kebidanan</li>
                      <li>Farmasi</li>
                      <li>Pendidikan Guru</li>
                      <li>Teknik Informatika</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
