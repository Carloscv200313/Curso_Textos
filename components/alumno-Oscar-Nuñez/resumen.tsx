import SkillBar from "@/components/skill-bar"
import { Camera, Palette, Plane, Map } from 'lucide-react'
export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container px-4 pt-24 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">SOFTWARE SKILLS</h2>
              <div className="space-y-4">
                <SkillBar name="Photoshop" progress={90} />
                <SkillBar name="Illustrator" progress={85} />
                <SkillBar name="InDesign" progress={80} />
                <SkillBar name="Premiere" progress={75} />
                <SkillBar name="After Effect" progress={70} />
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">LANGUAGES</h2>
              <div className="space-y-4">
                <SkillBar name="English" progress={100} />
                <SkillBar name="Arabic" progress={80} />
                <SkillBar name="Turkish" progress={60} />
              </div>
            </section>
          </div>
          
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">EXPERIENCE</h2>
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                  <h3 className="font-medium">WHITE FISH ADVERTISING CO.</h3>
                  <p className="text-sm text-muted-foreground">Senior Graphic Designer</p>
                </div>
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                  <h3 className="font-medium">PYRAMIDS SUN ADVERTISING CO.</h3>
                  <p className="text-sm text-muted-foreground">Senior Graphic Designer</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                  <h3 className="font-medium">PLANET STATIONARY & PRINTING SERVICES CO.</h3>
                  <p className="text-sm text-muted-foreground">Graphic Designer</p>
                </div>
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">EDUCATION</h2>
              <div>
                <p className="font-medium">BSc/Ms in Computer Science,</p>
                <p className="text-sm text-muted-foreground">University of Maryland</p>
              </div>
            </section>
          </div>
          
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">WHAT CAN I DO ?</h2>
              <div className="space-y-2">
                <p>Logo - Stationary - Branding</p>
                <p>Newsletter - Packaging - Catalog</p>
                <p>Strategy - Advertisement</p>
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">DESIGN SKILLS</h2>
              <div className="space-y-2">
                <p>Creativity - Planing & Strategy</p>
                <p>Signs & Typography - Layout</p>
                <p>Grid - Color sense - Inspiration</p>
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">HOBBIES & INTERESTS</h2>
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
      </main>
    </div>
  )
}

