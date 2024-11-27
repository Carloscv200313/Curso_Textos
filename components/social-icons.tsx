import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a href="#" className="hover:text-primary transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-primary transition-colors">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-primary transition-colors">
        <Linkedin className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-primary transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-primary transition-colors">
        <Github className="h-5 w-5" />
      </a>
    </div>
  )
}

