import { Briefcase, TrendingUp, BarChart, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CareerRecommendations() {
  return (
    <section id="karir" className="scroll-mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Rekomendasi Karir</h2>
      <p className="text-gray-700 text-lg mb-6">
        Temukan pilihan karir yang relevan dengan jurusan yang kamu minati dan tren industri di Indonesia.
      </p>

      <Tabs defaultValue="profil" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="profil">Profil Karir</TabsTrigger>
          <TabsTrigger value="tren">Tren Industri</TabsTrigger>
          <TabsTrigger value="jurusan">Karir Sesuai Jurusan</TabsTrigger>
        </TabsList>

        <TabsContent value="profil" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Karir Teknologi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Software Engineer</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Merancang, mengembangkan, dan memelihara perangkat lunak dan aplikasi untuk berbagai platform.
                        </p>
                        <p className="text-sm font-medium mt-2">Keterampilan yang Dibutuhkan:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Pemrograman (Java, Python, JavaScript, dll)</li>
                          <li>Algoritma dan struktur data</li>
                          <li>Pengembangan web/mobile</li>
                          <li>Database management</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Gaji Rata-rata:</p>
                        <p className="text-sm">Rp 8 - 25 juta per bulan (tergantung pengalaman)</p>
                        <p className="text-sm font-medium mt-2">Perusahaan di Indonesia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Gojek</li>
                          <li>Tokopedia</li>
                          <li>Traveloka</li>
                          <li>Bukalapak</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Data Scientist</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Menganalisis dan menginterpretasikan data kompleks untuk membantu pengambilan keputusan
                          bisnis.
                        </p>
                        <p className="text-sm font-medium mt-2">Keterampilan yang Dibutuhkan:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Statistik dan matematika</li>
                          <li>Machine learning</li>
                          <li>Python, R, SQL</li>
                          <li>Data visualization</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Gaji Rata-rata:</p>
                        <p className="text-sm">Rp 15 - 30 juta per bulan (tergantung pengalaman)</p>
                        <p className="text-sm font-medium mt-2">Perusahaan di Indonesia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Gojek</li>
                          <li>Tokopedia</li>
                          <li>Telkom Indonesia</li>
                          <li>Bank-bank besar</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>UI/UX Designer</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Merancang antarmuka dan pengalaman pengguna untuk aplikasi dan website yang intuitif dan
                          menarik.
                        </p>
                        <p className="text-sm font-medium mt-2">Keterampilan yang Dibutuhkan:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Design tools (Figma, Adobe XD)</li>
                          <li>User research</li>
                          <li>Wireframing dan prototyping</li>
                          <li>Visual design</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Gaji Rata-rata:</p>
                        <p className="text-sm">Rp 8 - 20 juta per bulan (tergantung pengalaman)</p>
                        <p className="text-sm font-medium mt-2">Perusahaan di Indonesia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Tokopedia</li>
                          <li>Bukalapak</li>
                          <li>Gojek</li>
                          <li>Agency desain</li>
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
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Karir Bisnis & Keuangan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Financial Analyst</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Menganalisis data keuangan dan membuat rekomendasi untuk keputusan investasi dan bisnis.
                        </p>
                        <p className="text-sm font-medium mt-2">Keterampilan yang Dibutuhkan:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Analisis keuangan</li>
                          <li>Excel dan financial modeling</li>
                          <li>Akuntansi</li>
                          <li>Business intelligence</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Gaji Rata-rata:</p>
                        <p className="text-sm">Rp 8 - 20 juta per bulan (tergantung pengalaman)</p>
                        <p className="text-sm font-medium mt-2">Perusahaan di Indonesia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Bank-bank besar</li>
                          <li>Perusahaan konsultan (Deloitte, PwC)</li>
                          <li>Perusahaan investasi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Marketing Manager</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Mengembangkan dan mengelola strategi pemasaran untuk produk atau layanan perusahaan.
                        </p>
                        <p className="text-sm font-medium mt-2">Keterampilan yang Dibutuhkan:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Digital marketing</li>
                          <li>Analisis pasar</li>
                          <li>Branding</li>
                          <li>Content strategy</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Gaji Rata-rata:</p>
                        <p className="text-sm">Rp 12 - 25 juta per bulan (tergantung pengalaman)</p>
                        <p className="text-sm font-medium mt-2">Perusahaan di Indonesia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>FMCG (Unilever, P&G)</li>
                          <li>E-commerce (Tokopedia, Shopee)</li>
                          <li>Perusahaan telekomunikasi</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Human Resources Manager</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Mengelola proses rekrutmen, pengembangan, dan kesejahteraan karyawan dalam perusahaan.
                        </p>
                        <p className="text-sm font-medium mt-2">Keterampilan yang Dibutuhkan:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Rekrutmen dan seleksi</li>
                          <li>Employee relations</li>
                          <li>Training dan pengembangan</li>
                          <li>Compensation & benefits</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Gaji Rata-rata:</p>
                        <p className="text-sm">Rp 10 - 25 juta per bulan (tergantung pengalaman)</p>
                        <p className="text-sm font-medium mt-2">Perusahaan di Indonesia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Perusahaan multinasional</li>
                          <li>Startup unicorn</li>
                          <li>BUMN</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tren" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Industri dengan Pertumbuhan Tercepat
                </CardTitle>
                <CardDescription>
                  Sektor industri yang diprediksi akan tumbuh pesat dalam 5 tahun ke depan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Teknologi Informasi</h4>
                      <span className="text-green-600 font-medium">+25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Mencakup pengembangan software, cloud computing, cybersecurity, dan AI/ML.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">E-commerce & Digital Economy</h4>
                      <span className="text-green-600 font-medium">+22%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600">Marketplace online, fintech, dan layanan digital lainnya.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Energi Terbarukan</h4>
                      <span className="text-green-600 font-medium">+18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Solar panel, energi angin, dan teknologi ramah lingkungan lainnya.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Healthcare & Wellness</h4>
                      <span className="text-green-600 font-medium">+15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600">Telemedicine, health tech, dan layanan kesehatan digital.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Pendidikan Digital</h4>
                      <span className="text-green-600 font-medium">+12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "55%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Platform e-learning, edtech, dan solusi pendidikan jarak jauh.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-blue-600" />
                  Pekerjaan dengan Permintaan Tinggi
                </CardTitle>
                <CardDescription>
                  Profesi yang paling banyak dicari di Indonesia dalam beberapa tahun ke depan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Data Scientist & Data Analyst</h4>
                    <p className="text-sm text-gray-600">
                      Permintaan tinggi di berbagai industri untuk menganalisis big data dan memberikan insights bisnis.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Gaji:</span>
                      <span>Rp 15-30 juta/bulan</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Software Developer (Mobile & Web)</h4>
                    <p className="text-sm text-gray-600">
                      Kebutuhan akan pengembang aplikasi mobile dan web terus meningkat seiring digitalisasi bisnis.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Gaji:</span>
                      <span>Rp 10-25 juta/bulan</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">UI/UX Designer</h4>
                    <p className="text-sm text-gray-600">
                      Desainer antarmuka dan pengalaman pengguna sangat dibutuhkan untuk menciptakan produk digital yang
                      user-friendly.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Gaji:</span>
                      <span>Rp 8-20 juta/bulan</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Digital Marketing Specialist</h4>
                    <p className="text-sm text-gray-600">
                      Ahli pemasaran digital yang dapat mengelola kampanye online dan social media marketing.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Gaji:</span>
                      <span>Rp 8-18 juta/bulan</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Cybersecurity Expert</h4>
                    <p className="text-sm text-gray-600">
                      Ahli keamanan siber untuk melindungi data dan sistem perusahaan dari serangan cyber.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Gaji:</span>
                      <span>Rp 15-30 juta/bulan</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="jurusan" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Jurusan Teknik & Komputer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Teknik Informatika</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Software Engineer</li>
                          <li>Web Developer</li>
                          <li>Mobile App Developer</li>
                          <li>Game Developer</li>
                          <li>DevOps Engineer</li>
                          <li>System Analyst</li>
                          <li>IT Project Manager</li>
                          <li>Quality Assurance Engineer</li>
                          <li>Machine Learning Engineer</li>
                          <li>Cloud Engineer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 30 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Sistem Informasi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Business Analyst</li>
                          <li>Database Administrator</li>
                          <li>IT Consultant</li>
                          <li>System Analyst</li>
                          <li>ERP Specialist</li>
                          <li>Data Analyst</li>
                          <li>IT Project Manager</li>
                          <li>Information Security Analyst</li>
                          <li>Business Intelligence Analyst</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Teknik Elektro</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Electrical Engineer</li>
                          <li>Power Systems Engineer</li>
                          <li>Telecommunications Engineer</li>
                          <li>Control Systems Engineer</li>
                          <li>Electronics Engineer</li>
                          <li>Automation Engineer</li>
                          <li>IoT Developer</li>
                          <li>Embedded Systems Engineer</li>
                          <li>Robotics Engineer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 7 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Teknik Sipil</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Civil Engineer</li>
                          <li>Structural Engineer</li>
                          <li>Construction Manager</li>
                          <li>Project Manager</li>
                          <li>Transportation Engineer</li>
                          <li>Water Resources Engineer</li>
                          <li>Geotechnical Engineer</li>
                          <li>Urban Planner</li>
                          <li>Quantity Surveyor</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Teknik Mesin</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Mechanical Engineer</li>
                          <li>Design Engineer</li>
                          <li>Manufacturing Engineer</li>
                          <li>Automotive Engineer</li>
                          <li>HVAC Engineer</li>
                          <li>Quality Control Engineer</li>
                          <li>Maintenance Engineer</li>
                          <li>Project Engineer</li>
                          <li>R&D Engineer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Jurusan Ekonomi & Bisnis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Manajemen</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Business Manager</li>
                          <li>Marketing Manager</li>
                          <li>Sales Manager</li>
                          <li>Human Resources Manager</li>
                          <li>Operations Manager</li>
                          <li>Product Manager</li>
                          <li>Brand Manager</li>
                          <li>Management Consultant</li>
                          <li>Entrepreneur</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 30 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Akuntansi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Akuntan</li>
                          <li>Auditor</li>
                          <li>Tax Consultant</li>
                          <li>Financial Controller</li>
                          <li>Finance Manager</li>
                          <li>Cost Accountant</li>
                          <li>Financial Analyst</li>
                          <li>Budget Analyst</li>
                          <li>Forensic Accountant</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Ekonomi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Economist</li>
                          <li>Economic Analyst</li>
                          <li>Market Research Analyst</li>
                          <li>Policy Analyst</li>
                          <li>Investment Analyst</li>
                          <li>Financial Consultant</li>
                          <li>Banking Professional</li>
                          <li>Risk Analyst</li>
                          <li>Economic Researcher</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Bisnis Digital</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Digital Marketing Specialist</li>
                          <li>E-commerce Manager</li>
                          <li>Social Media Manager</li>
                          <li>SEO Specialist</li>
                          <li>Content Marketing Manager</li>
                          <li>Growth Hacker</li>
                          <li>Digital Business Analyst</li>
                          <li>Online Business Manager</li>
                          <li>Digital Transformation Consultant</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 7 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Perbankan & Keuangan</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Bank Officer</li>
                          <li>Investment Banker</li>
                          <li>Financial Advisor</li>
                          <li>Credit Analyst</li>
                          <li>Risk Manager</li>
                          <li>Portfolio Manager</li>
                          <li>Wealth Manager</li>
                          <li>Treasury Analyst</li>
                          <li>Fintech Specialist</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 30 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Jurusan Kesehatan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Kedokteran</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Dokter Umum</li>
                          <li>Dokter Spesialis</li>
                          <li>Dokter Bedah</li>
                          <li>Dokter Anak</li>
                          <li>Dokter Kandungan</li>
                          <li>Dokter Jantung</li>
                          <li>Dokter Kulit</li>
                          <li>Peneliti Medis</li>
                          <li>Konsultan Kesehatan</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 10 - 50+ juta per bulan (tergantung spesialisasi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Farmasi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Apoteker</li>
                          <li>Clinical Pharmacist</li>
                          <li>Peneliti Farmasi</li>
                          <li>Quality Control Specialist</li>
                          <li>Regulatory Affairs Specialist</li>
                          <li>Medical Representative</li>
                          <li>Product Development Scientist</li>
                          <li>Pharmaceutical Consultant</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Keperawatan</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Perawat</li>
                          <li>Perawat Spesialis</li>
                          <li>Kepala Perawat</li>
                          <li>Perawat ICU</li>
                          <li>Perawat Bedah</li>
                          <li>Perawat Anak</li>
                          <li>Perawat Geriatri</li>
                          <li>Perawat Home Care</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 4 - 15 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Gizi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Ahli Gizi</li>
                          <li>Konsultan Gizi</li>
                          <li>Dietisien Klinis</li>
                          <li>Ahli Gizi Olahraga</li>
                          <li>Ahli Gizi Komunitas</li>
                          <li>Food Service Manager</li>
                          <li>Peneliti Gizi</li>
                          <li>Nutrition Educator</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 4 - 15 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Jurusan Sosial & Humaniora
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Psikologi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Psikolog Klinis</li>
                          <li>Psikolog Anak</li>
                          <li>Psikolog Pendidikan</li>
                          <li>Psikolog Industri & Organisasi</li>
                          <li>Konselor</li>
                          <li>HR Specialist</li>
                          <li>Peneliti Psikologi</li>
                          <li>Terapis</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 5 - 20 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Hukum</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Pengacara</li>
                          <li>Hakim</li>
                          <li>Jaksa</li>
                          <li>Notaris</li>
                          <li>Konsultan Hukum</li>
                          <li>Legal Officer</li>
                          <li>Compliance Officer</li>
                          <li>Mediator</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 30+ juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Ilmu Komunikasi</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Public Relations Officer</li>
                          <li>Jurnalis</li>
                          <li>Content Creator</li>
                          <li>Social Media Manager</li>
                          <li>Brand Manager</li>
                          <li>Corporate Communications</li>
                          <li>Event Organizer</li>
                          <li>Media Planner</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 5 - 20 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Hubungan Internasional</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Diplomat</li>
                          <li>Analis Kebijakan Luar Negeri</li>
                          <li>Staf Organisasi Internasional</li>
                          <li>Peneliti Politik Internasional</li>
                          <li>Konsultan Hubungan Internasional</li>
                          <li>International Business Specialist</li>
                          <li>NGO Officer</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 6 - 25 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Jurusan Pendidikan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Pendidikan Guru</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Guru SD/SMP/SMA</li>
                          <li>Dosen</li>
                          <li>Kepala Sekolah</li>
                          <li>Pengembang Kurikulum</li>
                          <li>Konsultan Pendidikan</li>
                          <li>Tutor/Pengajar Privat</li>
                          <li>Peneliti Pendidikan</li>
                          <li>Penulis Buku Pendidikan</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 4 - 15 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Bimbingan Konseling</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Guru BK</li>
                          <li>Konselor Sekolah</li>
                          <li>Konselor Karir</li>
                          <li>Konselor Keluarga</li>
                          <li>Konselor Rehabilitasi</li>
                          <li>Konsultan Pengembangan Diri</li>
                          <li>Terapis</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 4 - 15 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Pendidikan Bahasa</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pekerjaan yang Tersedia:</p>
                        <ul className="text-sm list-disc list-inside">
                          <li>Guru Bahasa</li>
                          <li>Penerjemah</li>
                          <li>Interpreter</li>
                          <li>Editor</li>
                          <li>Penulis</li>
                          <li>Content Writer</li>
                          <li>Pengajar Bahasa Asing</li>
                          <li>Peneliti Linguistik</li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Rentang Gaji:</p>
                        <p className="text-sm">Rp 4 - 20 juta per bulan (tergantung posisi dan pengalaman)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
