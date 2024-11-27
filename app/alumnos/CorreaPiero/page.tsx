import { HeroSection } from "@/components/hero-section"
import { ProjectSection } from "@/components/project-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <HeroSection />
        <ProjectSection />
        <ContactSection />
        
        <footer className="py-20 text-center text-gray-400">
          <p className="text-sm uppercase tracking-wider">GRACIAS POR VER</p>
        </footer>
      </div>
    </main>
  )
}

