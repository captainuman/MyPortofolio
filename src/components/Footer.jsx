import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted transition-colors hover:text-accent">
            <Mail size={18} />
          </a>
          <a href="#home" className="ml-2 flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent">
            Top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}