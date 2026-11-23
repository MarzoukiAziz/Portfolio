import { ArrowUpRight } from 'lucide-react'
import { socials } from '@/lib/site'

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-3">
      {socials
        .filter(({ label }) => label !== 'Email')
        .map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
    </ul>
  )
}
