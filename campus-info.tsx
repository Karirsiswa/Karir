import { BookOpen, Award, MapPin, Building, Star, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CampusInfo() {
  return (
    <section id="kampus" className="scroll-mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Info Kampus & Jurusan</h2>
      <p className="text-gray-700 text-lg mb-6">
        Jelajahi informasi lengkap tentang universitas, jurusan populer, dan syarat pendaftaran serta beasiswa di
        Indonesia.
      </p>

      <Tabs defaultValue="universitas" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="universitas">Universitas</TabsTrigger>
          <TabsTrigger value="jurusan">Jurusan</TabsTrigger>
          <TabsTrigger value="beasiswa">Beasiswa</TabsTrigger>
        </TabsList>

        <TabsContent value="universitas" className="space-y-6">
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
                    <AccordionTrigger>Universitas Indonesia (UI)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Depok, Jawa Barat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Margonda Raya, Depok 16424, Jawa Barat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.ui.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.ui.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Indonesia adalah salah satu universitas tertua dan terkemuka di Indonesia.
                          Didirikan pada tahun 1849, UI menawarkan berbagai program studi di tingkat sarjana, magister,
                          dan doktoral.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Ilmu Komputer</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Institut Teknologi Bandung (ITB)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Bandung, Jawa Barat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Ganesha No. 10, Bandung 40132, Jawa Barat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.itb.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.itb.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Institut Teknologi Bandung adalah perguruan tinggi teknik tertua di Indonesia yang didirikan
                          pada tahun 1920. ITB dikenal dengan keunggulannya di bidang teknik, sains, dan teknologi.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Teknik Elektro dan Informatika</li>
                          <li>Fakultas Teknik Mesin dan Dirgantara</li>
                          <li>Fakultas Teknik Sipil dan Lingkungan</li>
                          <li>Fakultas Matematika dan Ilmu Pengetahuan Alam</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Universitas Gadjah Mada (UGM)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Yogyakarta</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Bulaksumur, Yogyakarta 55281</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.ugm.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.ugm.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Gadjah Mada adalah universitas negeri tertua kedua di Indonesia yang didirikan
                          pada tahun 1949. UGM menawarkan berbagai program studi di berbagai bidang ilmu.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Ekonomika dan Bisnis</li>
                          <li>Fakultas Ilmu Sosial dan Politik</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Institut Pertanian Bogor (IPB)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Bogor, Jawa Barat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Raya Dramaga, Bogor 16680, Jawa Barat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.ipb.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.ipb.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Institut Pertanian Bogor adalah perguruan tinggi yang fokus pada bidang pertanian, kehutanan,
                          peternakan, perikanan, dan ilmu-ilmu terkait.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Pertanian</li>
                          <li>Fakultas Kedokteran Hewan</li>
                          <li>Fakultas Perikanan dan Ilmu Kelautan</li>
                          <li>Fakultas Teknologi Pertanian</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
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
                          Universitas Hasanuddin adalah universitas negeri terbesar di Indonesia Timur yang didirikan
                          pada tahun 1956.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Hukum</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>Universitas Airlangga (UNAIR)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Surabaya, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Airlangga No. 4-6, Surabaya 60115</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.unair.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.unair.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Airlangga adalah salah satu universitas negeri tertua di Indonesia yang didirikan
                          pada tahun 1954. UNAIR dikenal dengan keunggulannya di bidang kedokteran, farmasi, dan ilmu
                          sosial.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Farmasi</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Hukum</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>Universitas Padjadjaran (UNPAD)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Bandung, Jawa Barat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Raya Bandung-Sumedang KM. 21, Jatinangor, Sumedang 45363</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.unpad.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.unpad.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Padjadjaran adalah universitas negeri yang didirikan pada tahun 1957. UNPAD
                          dikenal dengan keunggulannya di bidang kedokteran, komunikasi, dan ekonomi.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Ilmu Komunikasi</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Psikologi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger>Institut Teknologi Sepuluh Nopember (ITS)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Surabaya, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Teknik Kimia, Keputih, Sukolilo, Surabaya 60111</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.its.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.its.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Institut Teknologi Sepuluh Nopember adalah perguruan tinggi teknik yang didirikan pada tahun
                          1960. ITS dikenal dengan keunggulannya di bidang teknik, sains, dan teknologi maritim.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Teknologi Industri</li>
                          <li>Fakultas Teknik Sipil, Lingkungan, dan Kebumian</li>
                          <li>Fakultas Teknologi Elektro</li>
                          <li>Fakultas Teknologi Kelautan</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9">
                    <AccordionTrigger>Universitas Brawijaya (UB)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Malang, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Veteran, Malang 65145, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.ub.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.ub.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Brawijaya adalah universitas negeri yang didirikan pada tahun 1963. UB dikenal
                          dengan keunggulannya di bidang pertanian, teknik, dan ekonomi.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Pertanian</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Ilmu Komputer</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10">
                    <AccordionTrigger>Universitas Negeri Yogyakarta (UNY)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Yogyakarta</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Colombo No. 1, Yogyakarta 55281</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.uny.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.uny.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Negeri Yogyakarta adalah universitas negeri yang fokus pada bidang pendidikan dan
                          keguruan.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Ilmu Pendidikan</li>
                          <li>Fakultas Matematika dan IPA</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Ekonomi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-11">
                    <AccordionTrigger>Universitas Diponegoro (UNDIP)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Semarang, Jawa Tengah</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Prof. Soedarto, Tembalang, Semarang 50275, Jawa Tengah</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.undip.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.undip.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Diponegoro adalah universitas negeri yang didirikan pada tahun 1957. UNDIP dikenal
                          dengan keunggulannya di bidang teknik, kedokteran, dan ilmu kelautan.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Perikanan dan Ilmu Kelautan</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-12">
                    <AccordionTrigger>Universitas Negeri Jakarta (UNJ)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jakarta</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Rawamangun Muka, Jakarta Timur 13220</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.unj.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.unj.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Negeri Jakarta adalah universitas negeri yang fokus pada bidang pendidikan dan
                          keguruan.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Ilmu Pendidikan</li>
                          <li>Fakultas Ekonomi</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Bahasa dan Seni</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-13">
                    <AccordionTrigger>Universitas Negeri Malang (UM)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Malang, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Semarang No. 5, Malang 65145, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.um.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.um.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Negeri Malang adalah universitas negeri yang fokus pada bidang pendidikan dan
                          keguruan.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Ilmu Pendidikan</li>
                          <li>Fakultas Sastra</li>
                          <li>Fakultas MIPA</li>
                          <li>Fakultas Teknik</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-21">
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
                          keguruan. Didirikan pada tahun 1961, UNM merupakan salah satu perguruan tinggi terkemuka di Sulawesi Selatan.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Ilmu Pendidikan</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Matematika dan IPA</li>
                          <li>Fakultas Bahasa dan Sastra</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-26">
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
                          <span>Jl. Sultan Alauddin No. 63, Makassar 90221, Sulawesi Selatan</span>
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
                          UIN Alauddin Makassar adalah perguruan tinggi Islam negeri yang didirikan pada tahun 1965. Universitas ini menggabungkan pendidikan Islam dengan ilmu pengetahuan modern.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Syariah dan Hukum</li>
                          <li>Fakultas Tarbiyah dan Keguruan</li>
                          <li>Fakultas Kedokteran dan Ilmu Kesehatan</li>
                          <li>Fakultas Sains dan Teknologi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-27">
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
                          Politeknik Negeri Ujung Pandang adalah perguruan tinggi vokasi negeri yang fokus pada pendidikan terapan dan keterampilan praktis. Didirikan pada tahun 1987, PNUP menjadi salah satu politeknik terkemuka di Indonesia Timur.
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

                  <AccordionItem value="item-28">
                    <AccordionTrigger>Politeknik Pertanian Negeri Pangkajene Kepulauan (Politani Pangkep)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Pangkajene, Sulawesi Selatan</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: B</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Poros Makassar-Parepare KM. 83, Mandalle, Pangkep 90655, Sulawesi Selatan</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.politani-pangkep.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.politani-pangkep.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Politeknik Pertanian Negeri Pangkajene Kepulauan adalah perguruan tinggi vokasi yang fokus pada bidang pertanian, perikanan, dan teknologi pangan. Didirikan pada tahun 1987, Politani Pangkep menjadi pusat pendidikan vokasi pertanian dan perikanan di Sulawesi Selatan.
                        </p>
                        <p className="text-sm font-medium mt-2">Jurusan Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Budidaya Perikanan</li>
                          <li>Teknologi Pengolahan Hasil Perikanan</li>
                          <li>Agribisnis</li>
                          <li>Teknologi Pertanian</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-30">
                    <AccordionTrigger>STMIK Handayani Makassar</AccordionTrigger>
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
                          <span>Jl. Adhyaksa Baru No. 1, Makassar 90231, Sulawesi Selatan</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.handayani.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.handayani.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          STMIK Handayani Makassar adalah sekolah tinggi yang fokus pada bidang ilmu komputer dan teknologi informasi. Didirikan pada tahun 1996, STMIK Handayani telah menjadi salah satu institusi pendidikan IT terkemuka di Sulawesi Selatan.
                        </p>
                        <p className="text-sm font-medium mt-2">Program Studi Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Teknik Informatika</li>
                          <li>Sistem Informasi</li>
                          <li>Manajemen Informatika</li>
                          <li>Komputerisasi Akuntansi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-31">
                    <AccordionTrigger>STIE AMKOP Makassar</AccordionTrigger>
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
                          <span>Jl. Meranti No. 1, Panakkukang, Makassar 90231, Sulawesi Selatan</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.stieamkop.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.stieamkop.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          STIE AMKOP Makassar adalah sekolah tinggi ekonomi yang fokus pada bidang manajemen dan akuntansi. Didirikan pada tahun 1998, STIE AMKOP telah menjadi salah satu institusi pendidikan ekonomi terkemuka di Sulawesi Selatan.
                        </p>
                        <p className="text-sm font-medium mt-2">Program Studi Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Manajemen</li>
                          <li>Akuntansi</li>
                          <li>Ilmu Administrasi Bisnis</li>
                          <li>Kewirausahaan</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-32">
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
                          <span>Jl. Andi Mauraga No. 70, Pangkajene, Pangkep 90611, Sulawesi Selatan</span>
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
                          STKIP ANDI MATAPPA adalah sekolah tinggi yang fokus pada pendidikan guru dan ilmu kependidikan di Sulawesi Selatan. Didirikan pada tahun 1984, STKIP ANDI MATAPPA telah menghasilkan banyak tenaga pendidik berkualitas.
                        </p>
                        <p className="text-sm font-medium mt-2">Program Studi:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Pendidikan Matematika</li>
                          <li>Pendidikan Guru Sekolah Dasar (PGSD)</li>
                          <li>Bimbingan dan Konseling</li>
                          <li>Pendidikan Bahasa Indonesia</li>
                          <li>Pendidikan Bahasa Inggris</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-33">
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
                          Universitas Muhammadiyah Makassar adalah universitas swasta yang didirikan pada tahun 1963. UNISMUH merupakan salah satu perguruan tinggi swasta terbesar di Indonesia Timur dengan berbagai program studi.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Keguruan dan Ilmu Pendidikan</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Hukum</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-34">
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
                          Universitas Muslim Indonesia adalah universitas swasta tertua di Indonesia Timur yang didirikan pada tahun 1954. UMI menggabungkan nilai-nilai Islam dengan pendidikan modern dan menawarkan berbagai program studi.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Farmasi</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Hukum</li>
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
                    <AccordionTrigger>Universitas Bina Nusantara (BINUS)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jakarta</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. K.H. Syahdan No. 9, Kemanggisan, Jakarta Barat 11480</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.binus.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.binus.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          BINUS University adalah universitas swasta terkemuka di Indonesia yang dikenal dengan
                          program-program teknologi informasi dan bisnis.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>School of Computer Science</li>
                          <li>School of Business Management</li>
                          <li>School of Design</li>
                          <li>School of Information Systems</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Universitas Pelita Harapan (UPH)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Tangerang, Banten</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. M.H. Thamrin Boulevard, Lippo Karawaci, Tangerang 15811, Banten</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.uph.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.uph.edu
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Pelita Harapan adalah universitas swasta yang didirikan pada tahun 1994 dengan
                          pendekatan pendidikan liberal arts.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Kedokteran</li>
                          <li>Fakultas Desain dan Seni</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Ilmu Komputer</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Universitas Atma Jaya (UAJ)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jakarta</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. Jenderal Sudirman No. 51, Jakarta 12930</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.atmajaya.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.atmajaya.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Atma Jaya adalah universitas swasta yang didirikan pada tahun 1960 dan dikenal
                          dengan program-program teknik dan bisnis.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Fakultas Teknik</li>
                          <li>Fakultas Ekonomi dan Bisnis</li>
                          <li>Fakultas Hukum</li>
                          <li>Fakultas Ilmu Komunikasi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Universitas Prasetiya Mulya</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jakarta & Tangerang</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Jl. BSD Raya Utama, BSD City, Tangerang 15339, Banten</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.prasetiyamulya.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.prasetiyamulya.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Prasetiya Mulya adalah universitas swasta yang fokus pada bidang bisnis dan
                          manajemen.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>School of Business and Economics</li>
                          <li>School of Applied STEM</li>
                          <li>School of Design</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Universitas Ciputra (UC)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Surabaya, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Akreditasi: A</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>CitraLand CBD Boulevard, Surabaya 60219, Jawa Timur</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <a
                            href="https://www.uc.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <Globe className="h-4 w-4" /> www.uc.ac.id
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Universitas Ciputra adalah universitas swasta yang fokus pada pendidikan kewirausahaan.
                        </p>
                        <p className="text-sm font-medium mt-2">Fakultas Populer:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>International Business Management</li>
                          <li>Visual Communication Design</li>
                          <li>Information Technology</li>
                          <li>Culinary Business</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="jurusan" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Jurusan STEM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Teknik Informatika</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang pengembangan perangkat lunak, algoritma, kecerdasan buatan,
                          dan teknologi informasi.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Software Engineer</li>
                          <li>Web Developer</li>
                          <li>Mobile App Developer</li>
                          <li>Data Scientist</li>
                          <li>AI Engineer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Institut Teknologi Bandung</li>
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>BINUS University</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Teknik Elektro</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang sistem kelistrikan, elektronika, telekomunikasi, dan kontrol
                          otomatis.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Electrical Engineer</li>
                          <li>Telecommunications Engineer</li>
                          <li>Control Systems Engineer</li>
                          <li>Power Systems Engineer</li>
                          <li>IoT Developer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Institut Teknologi Bandung</li>
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Institut Teknologi Sepuluh Nopember</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Teknik Sipil</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang perencanaan, perancangan, dan pembangunan infrastruktur
                          seperti jalan, jembatan, dan gedung.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Civil Engineer</li>
                          <li>Structural Engineer</li>
                          <li>Construction Manager</li>
                          <li>Transportation Engineer</li>
                          <li>Water Resources Engineer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Institut Teknologi Bandung</li>
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Institut Teknologi Sepuluh Nopember</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Kedokteran</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang ilmu kesehatan, diagnosis, dan pengobatan penyakit pada
                          manusia.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Dokter Umum</li>
                          <li>Dokter Spesialis</li>
                          <li>Peneliti Medis</li>
                          <li>Konsultan Kesehatan</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Universitas Airlangga</li>
                          <li>Universitas Padjadjaran</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Farmasi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang obat-obatan, formulasi, dan penggunaannya dalam pengobatan.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Apoteker</li>
                          <li>Peneliti Farmasi</li>
                          <li>Manajer Produksi Obat</li>
                          <li>Konsultan Farmasi</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Institut Teknologi Bandung</li>
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Universitas Airlangga</li>
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
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Jurusan Sosial & Humaniora
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Manajemen</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang pengelolaan organisasi, sumber daya manusia, pemasaran, dan
                          keuangan.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Business Manager</li>
                          <li>Marketing Manager</li>
                          <li>Human Resources Manager</li>
                          <li>Financial Analyst</li>
                          <li>Entrepreneur</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Institut Teknologi Bandung</li>
                          <li>Universitas Prasetiya Mulya</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Hukum</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang sistem hukum, peraturan, dan penerapannya dalam masyarakat.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Pengacara</li>
                          <li>Hakim</li>
                          <li>Jaksa</li>
                          <li>Konsultan Hukum</li>
                          <li>Legal Officer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Universitas Padjadjaran</li>
                          <li>Universitas Airlangga</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Psikologi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang perilaku manusia, proses mental, dan perkembangan
                          kepribadian.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Psikolog Klinis</li>
                          <li>Konselor</li>
                          <li>HR Specialist</li>
                          <li>Peneliti Psikologi</li>
                          <li>Psikolog Pendidikan</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Universitas Padjadjaran</li>
                          <li>Universitas Airlangga</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Ilmu Komunikasi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang proses komunikasi, media, jurnalistik, dan hubungan
                          masyarakat.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Public Relations Officer</li>
                          <li>Jurnalis</li>
                          <li>Content Creator</li>
                          <li>Social Media Manager</li>
                          <li>Brand Manager</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Universitas Indonesia</li>
                          <li>Universitas Padjadjaran</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Universitas Atma Jaya</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Hubungan Internasional</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Jurusan yang mempelajari tentang politik internasional, diplomasi, dan hubungan antar negara.
                        </p>
                        <p className="text-sm font-medium mt-2">Prospek Karir:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Diplomat</li>
                          <li>Analis Kebijakan Luar Negeri</li>
                          <li>Staf Organisasi Internasional</li>
                          <li>Peneliti Politik Internasional</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Universitas Terbaik:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Universitas Indonesia</li>
                          <li>Universitas Gadjah Mada</li>
                          <li>Universitas Padjadjaran</li>
                          <li>Universitas Katolik Parahyangan</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="beasiswa" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Beasiswa Pemerintah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>LPDP (Lembaga Pengelola Dana Pendidikan)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Beasiswa dari Kementerian Keuangan untuk jenjang S2 dan S3 baik di dalam maupun luar negeri.
                        </p>
                        <p className="text-sm font-medium mt-2">Cakupan Beasiswa:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Biaya pendidikan</li>
                          <li>Biaya hidup</li>
                          <li>Biaya buku</li>
                          <li>Biaya penelitian</li>
                          <li>Biaya perjalanan</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Persyaratan Umum:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>WNI</li>
                          <li>Usia maksimal 35 tahun untuk S2 dan 40 tahun untuk S3</li>
                          <li>IPK minimal 3.0</li>
                          <li>Lolos seleksi administrasi dan substansi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Beasiswa Bidikmisi/KIP Kuliah</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Beasiswa dari Kementerian Pendidikan untuk mahasiswa berprestasi dari keluarga tidak mampu.
                        </p>
                        <p className="text-sm font-medium mt-2">Cakupan Beasiswa:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Biaya pendidikan</li>
                          <li>Bantuan biaya hidup</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Persyaratan Umum:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Siswa SMA/SMK/MA yang akan melanjutkan ke perguruan tinggi</li>
                          <li>Memiliki prestasi akademik baik</li>
                          <li>Berasal dari keluarga tidak mampu</li>
                          <li>Lolos seleksi masuk perguruan tinggi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Beasiswa DIKTI</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Beasiswa dari Direktorat Jenderal Pendidikan Tinggi untuk jenjang S1, S2, dan S3.
                        </p>
                        <p className="text-sm font-medium mt-2">Cakupan Beasiswa:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Biaya pendidikan</li>
                          <li>Biaya hidup</li>
                          <li>Biaya penelitian</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Persyaratan Umum:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>WNI</li>
                          <li>IPK minimal 3.0</li>
                          <li>Lolos seleksi administrasi dan akademik</li>
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
                  <Award className="h-5 w-5 text-blue-600" />
                  Beasiswa Swasta & Internasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Beasiswa Djarum</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Beasiswa dari Djarum Foundation untuk mahasiswa berprestasi jenjang S1.
                        </p>
                        <p className="text-sm font-medium mt-2">Cakupan Beasiswa:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Bantuan biaya pendidikan</li>
                          <li>Pelatihan soft skills</li>
                          <li>Program pengembangan karakter</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Persyaratan Umum:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Mahasiswa S1 semester 4-6</li>
                          <li>IPK minimal 3.2</li>
                          <li>Aktif berorganisasi</li>
                          <li>Lolos seleksi administrasi dan wawancara</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Beasiswa Tanoto Foundation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Beasiswa dari Tanoto Foundation untuk mahasiswa berprestasi jenjang S1.
                        </p>
                        <p className="text-sm font-medium mt-2">Cakupan Beasiswa:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Bantuan biaya pendidikan</li>
                          <li>Program pengembangan kepemimpinan</li>
                          <li>Kesempatan magang</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Persyaratan Umum:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Mahasiswa S1 semester 4-6</li>
                          <li>IPK minimal 3.0</li>
                          <li>Aktif berorganisasi</li>
                          <li>Memiliki jiwa kepemimpinan</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Beasiswa Chevening</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                \
