export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative">
      <div className="space-y-2 mb-8">
        <p className="text-white-400 text-sm">SOY</p>
        <h1 className="text-8xl font-bold tracking-tight">PIERO CORREA</h1>
        <p className="text-white-400 text-sm">
          UN INGENIERO DE SISTEMAS
        </p>
      </div>

      <div className="absolute bottom-0 left-0 flex gap-6">
        {/* Columna para cada red social */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://www.facebook.com/pierocorrea23" // Enlace a tu perfil
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <img 
              src="/Correa/fb.png" // Ruta de la imagen de Facebook
              alt="Facebook Logo" 
              className="w-6 h-6" // Tamaño del logo
            />
            <span>@pierocorrea23</span> {/* Tu usuario de Facebook */}
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            href="https://x.com/PieroSe49746478" // Enlace a tu perfil
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <img 
              src="/Correa/x.png" // Ruta de la imagen de Twitter
              alt="Twitter Logo" 
              className="w-6 h-6" // Tamaño del logo
            />
            <span>@PieroSe23</span> {/* Tu usuario de Twitter */}
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            href="https://www.instagram.com/pierocorrea23/" // Enlace a tu perfil
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <img 
              src="/Correa/ig.png" // Ruta de la imagen de Instagram
              alt="Instagram Logo" 
              className="w-6 h-6" // Tamaño del logo
            />
            <span>@pierocorrea23</span> {/* Tu usuario de Instagram */}
          </a>
        </div>
      </div>
    </section>
  );
}
