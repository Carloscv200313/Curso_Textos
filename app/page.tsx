export default function Home() {

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-black">

      <section className="w-5/6 flex flex-col min-h-screen items-center justify-start pt-28 gap-12">        
          <h1 className="text-blue-100 text-4xl md:text-8xl font-serif w-full text-center flex items-center justify-center animate-fade-in-down">
            Un legado de conocimiento para las mentes del mañana
          </h1>
          <h2 className="text-gray-400 text-base w-full md:text-2xl font-light text-center flex items-center justify-center animate-fade-in-up">
            Explora los proyectos y logros que nuestros estudiantes han dejado como legado para las futuras generaciones.
          </h2>

          <a href="#explorar" className="mt-8 text-lg md:text-xl text-blue-200 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg transition-all duration-300 ease-in-out">
            Explora ahora
          </a>
      </section>
      
    </div>
  );
}
