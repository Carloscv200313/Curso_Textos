import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    {
      text: "Un",
      className: "text-blue-500",
    },
    {
      text: "legado",

    },
    {
      text: "de",
      className: "text-blue-500",
    },
    {
      text: "conocimiento",

    },
    {
      text: "para",
      className: "text-blue-500",
    },
    {
      text: "las",
      className: "text-blue-500",
    },
    {
      text: "mentes",

    },
    {
      text: "del",
      className: "text-blue-500",
    },
    {
      text: "mañana",
    },
  ];
  return (
    <div className="min-h-[100vh] flex items-center justify-center" >
      <div
        className=" absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#030303] to-[#2517f5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <section className="w-5/6 flex flex-col min-h-screen items-center justify-start pt-28">        
          <TypewriterEffect words={words} className="pb-6" />
          <h1 className="text-gray-600 text-[21px] w-8/12 text-center flex items-center justify-center">Explora los proyectos y logros que nuestros estudiantes han dejado como legado para las futuras generaciones.</h1>
      </section>
    </div>
  );
}
