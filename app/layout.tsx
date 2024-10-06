import type { Metadata } from "next";
import "./globals.css";
import { NavbarDinamico } from "@/components/navbar-dinamico";


export const metadata: Metadata = {
  title: "Nuestro Legado",
  description: "Pagina hecha para mostrar nuestro proyectos realizados durante nuestros primeros 2 años de estudio durante la carrera de Ingenieria de Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        <NavbarDinamico/>
        {children}
      </body>
    </html>
  );
}
