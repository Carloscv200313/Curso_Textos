'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SocialIcons from "@/components/social-icons"
import SkillBar from "@/components/skill-bar"
import { Camera, Palette, Plane, Map } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: resumeRef, inView: resumeInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Home Section */}
        <section ref={homeRef} className={`grid lg:grid-cols-2 gap-8 transition-opacity duration-1000 ${homeInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter">
                OSCAR NUÑEZ
              </h1>
              <p className="text-xl text-muted-foreground">
                Ciencia de Datos
              </p>
            </div>
            <div className="flex gap-4">
              <Button>Resume</Button>
              <Button variant="secondary">Portfolio</Button>
            </div>
            <SocialIcons />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/alumnos/Oscar/perfil.jpeg"
              alt="Workspace setup with dual monitors"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className={`grid lg:grid-cols-2 gap-12 transition-opacity duration-1000 ${aboutInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter">ABOUT</h2>
            <p className="text-muted-foreground">jmartin@pixelwork.com</p>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Graphic Designer with over 10 years of experience specializing in IT Department management for various companies and corporations. I can implement effective strategies at local and global levels. My greatest strength is business awareness, which enables me to deliver appropriate IT solutions for business needs and applications.
              </p>
              <p className="text-muted-foreground">
                Florida, Orlando
                <br />
                12529 State Road 535
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/alumnos/Oscar/perfil.jpeg"
              alt="Professional portrait"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Resume Section */}
        <section ref={resumeRef} className={`transition-opacity duration-1000 ${resumeInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold tracking-tighter mb-12">RESUME</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">SOFTWARE SKILLS</h3>
                <div className="space-y-4">
                  <SkillBar name="Photoshop" progress={90} />
                  <SkillBar name="Illustrator" progress={85} />
                  <SkillBar name="InDesign" progress={80} />
                  <SkillBar name="Premiere" progress={75} />
                  <SkillBar name="After Effect" progress={70} />
                </div>
              </section>
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">LANGUAGES</h3>
                <div className="space-y-4">
                  <SkillBar name="English" progress={100} />
                  <SkillBar name="Arabic" progress={80} />
                  <SkillBar name="Turkish" progress={60} />
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">EXPERIENCE</h3>
                <div className="space-y-6">
                  <div className="relative pl-8 pb-6 border-l border-muted">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                    <h4 className="font-medium">WHITE FISH ADVERTISING CO.</h4>
                    <p className="text-sm text-muted-foreground">Senior Graphic Designer</p>
                  </div>
                  <div className="relative pl-8 pb-6 border-l border-muted">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                    <h4 className="font-medium">PYRAMIDS SUN ADVERTISING CO.</h4>
                    <p className="text-sm text-muted-foreground">Senior Graphic Designer</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                    <h4 className="font-medium">PLANET STATIONARY & PRINTING SERVICES CO.</h4>
                    <p className="text-sm text-muted-foreground">Graphic Designer</p>
                  </div>
                </div>
              </section>
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">EDUCATION</h3>
                <div>
                  <p className="font-medium">BSc/Ms in Computer Science,</p>
                  <p className="text-sm text-muted-foreground">University of Maryland</p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">WHAT CAN I DO ?</h3>
                <div className="space-y-2">
                  <p>Logo - Stationary - Branding</p>
                  <p>Newsletter - Packaging - Catalog</p>
                  <p>Strategy - Advertisement</p>
                </div>
              </section>
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">DESIGN SKILLS</h3>
                <div className="space-y-2">
                  <p>Creativity - Planing & Strategy</p>
                  <p>Signs & Typography - Layout</p>
                  <p>Grid - Color sense - Inspiration</p>
                </div>
              </section>
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">HOBBIES & INTERESTS</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    <span>Photography</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    <span>Drawing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    <span>Travel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5" />
                    <span>Aviation</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

