import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">CONTACTO</h2>
          <div className="space-y-8 text-gray-600">
            <p className="text-justify">
              Hola, mi nombre es Piero Correa y soy estudiante de la Universidad Nacional Tecnológica de Lima Sur, donde
              actualmente curso el cuarto ciclo de la carrera de Ingeniería de Sistemas. A mis 19 años, tengo una gran
              motivación por aprender y mejorar continuamente mis habilidades en el campo de la tecnología. Aunque aún
              no cuento con experiencia profesional, estoy comprometido con mi formación y enfocado en profundizar mis
              conocimientos, especialmente en tecnologías como Next.js, TypeScript y Tailwind. Mi objetivo es encontrar
              oportunidades que me permitan aplicar lo aprendido en proyectos reales y, al mismo tiempo, seguir
              creciendo profesionalmente en el ámbito tecnológico.
            </p>
            <div>
              <h3 className="text-gray-800 font-bold mb-2">Dirección</h3>
              <p className="text-gray-600">Villa el Salvador, Lima</p>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-2">Número Teléfonico</h3>
              <p className="text-gray-600">+51 982 765 510</p>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-2">Gmail</h3>
              <p className="text-gray-600">2313070096@untels.edu.pe</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">FORMULARIO DE CONTACTO</h2>
          <form className="space-y-6">
            <Input
              placeholder="Tu nombre"
              className="bg-[#252525] text-gray-300 border-0 rounded-none h-12"
            />
            <Input
              placeholder="Tu número telefónico"
              className="bg-[#252525] text-gray-300 border-0 rounded-none h-12"
            />
            <Input
              placeholder="Tu correo"
              className="bg-[#252525] text-gray-300 border-0 rounded-none h-12"
            />
            <Textarea
              placeholder="Mensaje"
              className="bg-[#252525] text-gray-300 border-0 rounded-none min-h-[120px]"
            />
            <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-none h-12">
              ENVIAR MENSAJE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
