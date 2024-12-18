import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Portfolio
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="text-white/70 hover:text-white">
            About
          </Link>
          <Link href="#projects" className="text-white/70 hover:text-white">
            Projects
          </Link>
          <Link href="#skills" className="text-white/70 hover:text-white">
            Skills
          </Link>
          <Link href="#contact" className="text-white/70 hover:text-white">
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
          Resume
        </Button>
      </div>
    </header>
  )
}

