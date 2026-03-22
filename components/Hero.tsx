import { Github, Linkedin, Mail, BookOpen, ArrowRight } from 'lucide-react'

const socials = [
  { href: 'https://github.com/MarzoukiAziz', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/moazmar/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://medium.com/@azizmarzouki', icon: BookOpen, label: 'Blog' },
  { href: 'mailto:contact@azizmarzouki.com', icon: Mail, label: 'Email' },
]

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6 animate-fade-in">
          {/* Open for work badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-emerald-500 font-medium">Open For Work</span>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-primary">Aziz</span>! 👋
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mt-3 font-medium">
              Full Stack Developer &amp; Software Architect
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Computer Engineering graduate with solid experience in fullstack web development
            and DevOps. Passionate about crafting elegant solutions, solving complex problems,
            and delivering quality software.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-sm font-medium hover:bg-accent transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 scale-105 blur-sm" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src="/images/x2.JPEG"
                alt="Aziz Marzouki"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Code badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg px-3 py-2 text-xs font-mono shadow-lg">
              <span className="text-muted-foreground">const </span>
              <span className="text-primary">developer</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-emerald-500">&quot;passionate&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
