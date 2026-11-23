import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { AgentRun } from './AgentRun'
import { LocalTime } from './LocalTime'
import { site } from '@/lib/site'

const facts = [
  { label: 'Now', value: 'Algora, Luxembourg' },
  { label: 'Before', value: 'Orange · XoAuto' },
  { label: 'Focus', value: 'Agents · RAG · Google Cloud' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div aria-hidden className="glow absolute -top-40 right-[-10%] h-[44rem] w-[44rem] rounded-full" />

      <div className="container-x relative pb-16 pt-36 md:pb-24 md:pt-48">
        <p className="eyebrow rise flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {site.name} · Tech Lead, AI &amp; Cloud
        </p>

        <h1
          className="display rise mt-7 text-balance text-[clamp(2.75rem,8.2vw,6.5rem)]"
          style={{ animationDelay: '80ms' }}
        >
          I build AI agents that <span className="accent-serif">show their work.</span>
        </h1>

        <div className="mt-12 grid items-start gap-12 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="rise lg:col-span-6" style={{ animationDelay: '180ms' }}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I lead the engineering behind{' '}
              <a href="https://algora.lu" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary">
                Algora
              </a>
              , an AI platform for asset and wealth managers in Luxembourg. My work sits where AI
              agents, cloud infrastructure and backend engineering meet, with a focus on answers
              people can trace back to a source.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
              >
                See my experience <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="rise lg:col-span-6" style={{ animationDelay: '300ms' }}>
            <AgentRun />
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              Illustrative run, showing the kind of system I work on.
            </p>
          </div>
        </div>

        <dl className="rise mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-8 md:mt-24 md:grid-cols-4" style={{ animationDelay: '420ms' }}>
          {facts.map(({ label, value }) => (
            <div key={label}>
              <dt className="eyebrow">{label}</dt>
              <dd className="mt-2 text-sm font-medium md:text-base">{value}</dd>
            </div>
          ))}
          <div>
            <dt className="eyebrow">Local time</dt>
            <dd className="mt-2 text-sm font-medium md:text-base">
              <LocalTime /> in Luxembourg
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
