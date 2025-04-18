import Hero from "@/components/hero"
import WelcomeSection from "@/components/welcome-section"
import CampusInfo from "@/components/campus-info"
import CampusInfoSulsel from "@/components/campus-info-sulsel"
import CareerRecommendations from "@/components/career-recommendations"
import Contact from "@/components/contact"
import Forum from "@/components/forum"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        <WelcomeSection />
        <CampusInfo />
        <CampusInfoSulsel />
        <CareerRecommendations />
        <Forum />
        <Contact />
      </div>
    </main>
  )
}
