import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { SocialLinks } from './SocialLinks'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t">
      <div aria-hidden className="glow absolute -bottom-72 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full" />

      <div className="container-x relative py-24 md:py-40">
        <Reveal>
          <p className="eyebrow">
            <span className="text-primary">04</span> / Contact
          </p>
          <h2 className="display mt-6 text-balance text-[clamp(2.75rem,8.2vw,6.5rem)]">
            Let&apos;s build something <span className="accent-serif">people can trust.</span>
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="group mt-12 inline-flex items-center gap-3 border-b-2 border-foreground/20 pb-2 font-display text-xl font-medium tracking-tight transition-colors hover:border-primary hover:text-primary sm:text-3xl md:text-4xl"
          >
            {site.email}
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-9 md:w-9" />
          </a>
        </Reveal>

        <div className="mt-24 flex flex-col gap-6 border-t pt-8 md:mt-32 md:flex-row md:items-center md:justify-between">
          <SocialLinks />
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
