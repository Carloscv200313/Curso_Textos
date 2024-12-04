'use client'
import Image from "next/image"
import SkillBar from "@/components/skill-bar"
import { Camera, Palette, Plane, Map } from 'lucide-react'
import FlipText from "@/components/ui/flip-text";
import TypingAnimation from "@/components/ui/text-reveal";
export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container py-0 space-y-24">
        {/* Home Section */}
        <section
          className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/alumnos/Oscar/compu.jpeg')" }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black bg-opacity-90"></div>
          {/* Contenido sobre la imagen */}
          <div className="flex flex-col justify-center space-y-20 ">

            <FlipText
              className="text-5xl font-bold -tracking-widest text-white md:text-9xl md:leading-[5rem]"
              word="OSCAR    MANUEL"
            />
            <FlipText
              className="text-5xl font-bold -tracking-widest text-blue-800 md:text-9xl md:leading-[5rem]"
              word="NUÑEZ    BUSTOS"
            />
          </div>
        </section>




        {/* About Section */}
        <section
          className={`grid lg:grid-cols-2 gap-12 transition-opacity duration-1000 min:h-[100vh]`}
        >
          {/* Contenido del texto */}
          <div className="space-y-6 flex flex-col justify-center h-auto">
            <h2 className="text-4xl font-bold tracking-tighter">ACERCA DE MI</h2>
            <p className="text-muted-foreground">2313010780@untels.edu.pe</p>
            <TypingAnimation
              className="text-xl text-white"
              text="Soy Oscar Manuel Núñez Bustos, estudiante del cuarto ciclo de la carrera de Ingenieria de Sistemas en la Universidad Nacional Tecnológica de Lima Sur. A pesar de estar aún en una etapa temprana de mi formación, he logrado destacar por mi dedicación y pasión en áreas como machine learning, estadística avanzada, muestreo y análisis de datos. He liderado y participado en proyectos que van desde la creación de modelos predictivos hasta el análisis de grandes volúmenes de datos, generando soluciones innovadoras con impacto tangible. Estos logros no solo reflejan mi compromiso académico, sino también mi visión de cómo la Ciencia de Datos puede transformar realidades, aportar valor a la sociedad y resolver problemas complejos de manera ética y responsable."
            />
            <p className="text-muted-foreground">Lima, Perú</p>
          </div>

          {/* Imagen con comportamiento sticky */}
          <div className="relative flex items-center justify-center">
            <div className="sticky  ">
              <Image
                src="/alumnos/Oscar/perfil.jpeg"
                alt="Professional portrait"
                width={500}
                height={500}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </section>


        {/* Resume Section */}
        <section className={`transition-opacity duration-1000`}>
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

