import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container grid lg:grid-cols-2 gap-12 px-4 pt-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">ABOUT</h1>
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
      </main>
    </div>
  )
}

