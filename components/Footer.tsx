import { Github, Linkedin, Mail, BookOpen } from 'lucide-react'

const socials = [
  { href: 'https://github.com/MarzoukiAziz', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/moazmar/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://medium.com/@azizmarzouki', icon: BookOpen, label: 'Blog' },
  { href: 'mailto:contact@azizmarzouki.com', icon: Mail, label: 'Email' },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border mt-8">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-mono font-bold text-lg text-primary">
              &gt;_ aziz
            </a>
            <p className="text-sm text-muted-foreground mt-1">contact@azizmarzouki.com</p>
            <p className="text-sm text-muted-foreground">Paris 15ème, France · +33 07 75 21 49 72</p>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aziz Marzouki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
