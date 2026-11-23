import { ArrowUpRight } from 'lucide-react'
import { LocalTime } from './LocalTime'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SpotlightGroup } from './SpotlightGroup'

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Full professional' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'A2' },
]

const path = [
  { place: 'Sousse', what: 'ISSAT, preparatory cycle', when: '2018 – 20' },
  { place: 'Tunis', what: 'ESPRIT, engineering degree', when: '2020 – 22' },
  { place: 'Paris', what: 'ISEP master’s, then Orange', when: '2022 – 24' },
  { place: 'Luxembourg', what: 'Algora, Tech Lead', when: '2025 –' },
]

const moments = [
  {
    src: '/images/fit4start.jpg',
    alt: 'Aziz Marzouki holding the Fit 4 Start #15 trophy awarded to Algora',
    label: 'Luxinnovation',
    title: 'Fit 4 Start #15, with Algora',
    position: 'object-[50%_60%]',
    captionTop: true,
  },
  {
    src: '/images/x2.JPEG',
    alt: 'Aziz Marzouki speaking on stage with a microphone',
    label: 'On stage',
    title: 'Talking about what we build',
    position: 'object-[50%_25%]',
    captionTop: false,
  },
]

export function About() {
  return (
    <section id="about" className="container-x py-24 md:py-36">
      <SectionHeading index="01" label="About">
        Where AI, cloud and backend <span className="accent-serif">meet.</span>
      </SectionHeading>

      <Reveal>
        <SpotlightGroup className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <figure data-spot className="card min-h-[24rem] !p-0 md:col-span-2 md:row-span-2">
            <img
              src="/images/portrait.jpg"
              alt="Portrait of Aziz Marzouki"
              width={864}
              height={1095}
              className="absolute inset-0 h-full w-full object-cover object-[50%_15%]"
            />
          </figure>

          <div data-spot className="card md:col-span-4">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              I lead the engineering behind Algora, working closely with the founders on what to
              build next.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Before Algora I worked as a full-stack developer at Orange in Paris and at XoAuto, an
              electric-vehicle startup, where I also looked after CI/CD and cloud infrastructure. I
              enjoy code reviews and mentoring.
            </p>
          </div>

          <div data-spot className="card md:col-span-2">
            <p className="eyebrow">Based in</p>
            <p className="display mt-4 text-3xl">Luxembourg</p>
            <p className="mt-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <LocalTime /> · 49.61° N, 6.13° E
            </p>
          </div>

          <div data-spot className="card md:col-span-2">
            <p className="eyebrow">Speaks</p>
            <ul className="mt-4 space-y-1.5">
              {languages.map(({ name, level }) => (
                <li key={name} className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-semibold tracking-tight">{name}</span>
                  <span className="text-xs text-muted-foreground">{level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-spot className="card md:col-span-6">
            <p className="eyebrow">The path so far</p>
            <ol className="mt-6 grid gap-6 sm:grid-cols-4 sm:gap-4">
              {path.map(({ place, what, when }, i) => (
                <li key={place} className="relative sm:pt-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 hidden h-px w-full bg-border sm:block"
                  />
                  <span
                    aria-hidden
                    className={`absolute -top-1 left-0 hidden h-2 w-2 rounded-full sm:block ${
                      i === path.length - 1 ? 'bg-primary' : 'bg-muted-foreground/50'
                    }`}
                  />
                  <p className="font-display text-lg font-semibold tracking-tight">{place}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{what}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">{when}</p>
                </li>
              ))}
            </ol>
          </div>

          {moments.map(({ src, alt, label, title, position, captionTop }) => (
            <figure key={src} data-spot className="card group min-h-[32rem] !p-0 md:col-span-2">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${position}`}
              />
              <div
                className={`absolute inset-x-0 h-2/5 from-black/80 to-transparent ${
                  captionTop ? 'top-0 bg-gradient-to-b' : 'bottom-0 bg-gradient-to-t'
                }`}
              />
              <figcaption className={`absolute inset-x-6 text-white ${captionTop ? 'top-5' : 'bottom-5'}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75">{label}</p>
                <p className="mt-1 font-display text-lg font-semibold tracking-tight">{title}</p>
              </figcaption>
            </figure>
          ))}

          <a
            data-spot
            href="https://www.linkedin.com/feed/update/urn:li:activity:7501591128476114944/"
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex min-h-[32rem] flex-col !p-0 md:col-span-2"
          >
            <div className="relative h-64 shrink-0 overflow-hidden">
              <img
                src="/images/algora-team.jpg"
                alt="The Algora team standing in front of the office"
                width={958}
                height={670}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[50%_40%] transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="flex items-start justify-between">
                <p className="eyebrow">In the press</p>
                <ArrowUpRight size={18} className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="mt-4">
                <p className="font-display text-xl font-semibold tracking-tight">Algora, featured in Paperjam</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Luxembourg&apos;s business magazine on how our team is bringing AI to wealth
                  management.
                </p>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">Photo: Algora</p>
              </div>
            </div>
          </a>
        </SpotlightGroup>
      </Reveal>
    </section>
  )
}
