"use client"
import Image from "next/image";
export function HeroSection() {
  const words = [
    { text: "SOY", size: "text-6xl" },
    { text: "PIERO CORREA", size: "text-8xl" },
    { text: "UN INGENIERO DE SISTEMAS", size: "text-4xl" }, // Tamaño reducido
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative">
      <div className="flex items-center justify-between">
        {/* Sección de texto */}
        <div className="space-y-4">
          {words.map((word, index) => (
            <div key={index} className={`flex gap-2 ${word.size}`}>
              {word.text.split("").map((char, i) => (
                <span
                  key={i}
                  className="letter font-bold tracking-tight"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Imagen a la derecha */}
        <div className="w-80 h-80 flex-shrink-0 mt-4">
          <Image
            height={100}
            width={100}
            src="/Correa/15.jpg"
            alt="Foto de Piero Correa"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Redes sociales */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Mis redes sociales: </h2>
        <br>
        
        </br>
        <div className="flex gap-8 justify-center">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/pierocorrea23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Image
              width={100}
              height={100}
              src="/Correa/fb.png"
              alt="Facebook Logo"
              className="w-8 h-8 rounded-full object-cover shadow-lg"
            />
            <span className="text-sm mt-2 text-gray-600">@pierocorrea23</span>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/PieroSe49746478"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Image
              width={100}
              height={100}
              src="/Correa/x.png"
              alt="Twitter Logo"
              className="w-8 h-8 rounded-full object-cover shadow-lg"
            />
            <span className="text-sm mt-2 text-gray-600">@PieroSe23</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/pierocorrea23/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Image
              width={100}
              height={100}
              src="/Correa/ig.png"
              alt="Instagram Logo"
              className="w-8 h-8 rounded-full object-cover shadow-lg"
            />
            <span className="text-sm mt-2 text-gray-600">@pierocorrea23</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/piero-sebastian-correa-cardenas-aa4098323/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Image
              width={100}
              height={100}
              src="/Correa/logo1.png"
              alt="LinkedIn Logo"
              className="w-8 h-8 rounded-full object-cover shadow-lg"
            />
            <span className="text-sm mt-2 text-gray-600">@pierocorrea</span>
          </a>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        @keyframes letterColorWave {
          0% {
            color: gray;
          }
          50% {
            color: black;
          }
          100% {
            color: gray;
          }
        }

        .letter {
          display: inline-block;
          animation: letterColorWave 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
