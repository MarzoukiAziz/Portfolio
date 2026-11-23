import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

// Text mirrors the LinkedIn profile; keep the two in sync.
const experiences = [
  {
    company: 'Algora',
    role: 'Tech Lead, AI & Cloud',
    period: 'Mar 2025 – Now',
    place: 'Luxembourg',
    summary: 'Leading the engineering behind Algora, an AI platform for asset and wealth managers.',
    points: [
      'Technical direction: responsible for the platform’s architecture across backend, frontend and internal tooling, working closely with the founders on what to build next.',
      'AI: design and delivery of agent-based features with a focus on answers that can be traced back to their sources.',
      'Cloud: running multiple environments on Google Cloud, including releases, monitoring and alerting.',
      'Security and compliance: data protection, audit logging and GDPR work expected by financial institutions.',
      'Team: code reviews, engineering standards and mentoring of junior engineers and interns.',
    ],
    stack: ['Python', 'FastAPI', 'Google ADK', 'Vertex AI', 'Google Cloud', 'RAG', 'MCP'],
  },
  {
    company: 'Orange',
    role: 'Full Stack Developer',
    period: 'Jan 2024 – Dec 2024',
    place: 'Paris',
    summary: 'Full-stack development on the PaaS portal used by Orange teams.',
    points: [
      'Delivered 25+ features and fixed 10+ bugs across the frontend and backend.',
      'Maintained the CI/CD pipelines (Jenkins, GitLab) and Docker-based deployments.',
      'Took part in code reviews, technical documentation, client demos and Agile ceremonies.',
    ],
    stack: ['React', 'Node.js', 'Jenkins', 'GitLab CI', 'Docker'],
  },
  {
    company: 'XoAuto',
    role: 'Full Stack Developer',
    period: 'Jun 2022 – Jan 2024',
    place: 'Remote',
    summary: 'Full-stack development for an electric-vehicle service platform.',
    points: [
      'Built the server-side architecture and the client-side interfaces of the web application.',
      'Worked on authentication, PostgreSQL performance and search caching.',
      'Automated delivery with GitHub Actions and infrastructure with Terraform on AWS.',
    ],
    stack: ['PostgreSQL', 'AWS', 'Terraform', 'GitHub Actions'],
  },
]

const education = [
  { school: 'ISEP Paris', degree: 'Master’s degree, computer software engineering', period: '2022' },
  { school: 'ESPRIT', degree: 'Engineering degree, financial computing', period: '2020 – 22' },
  { school: 'ISSAT Sousse', degree: 'Preparatory cycle for engineering studies, MPI', period: '2018 – 20' },
]

export function Experience() {
  return (
    <section id="experience" className="container-x py-24 md:py-36">
      <SectionHeading index="03" label="Experience">
        Where I&apos;ve <span className="accent-serif">worked.</span>
      </SectionHeading>

      <div>
        {experiences.map((exp) => (
          <Reveal key={exp.company}>
            <article className="group grid gap-4 border-t py-10 md:grid-cols-12 md:gap-8 md:py-14">
              <div className="font-mono text-xs leading-6 text-muted-foreground md:col-span-3">
                <p>{exp.period}</p>
                <p>{exp.place}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="display text-3xl transition-colors group-hover:text-primary md:text-5xl">
                  {exp.company}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {exp.role}
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed md:text-xl">{exp.summary}</p>
                <ul className="mt-5 max-w-2xl space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {exp.stack.map((tool) => (
                    <li key={tool} className="rounded-full border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div className="grid gap-4 border-t py-10 md:grid-cols-12 md:gap-8">
            <p className="font-mono text-xs leading-6 text-muted-foreground md:col-span-3">Education</p>
            <ul className="md:col-span-9">
              {education.map(({ school, degree, period }) => (
                <li key={school} className="flex items-baseline justify-between gap-4 border-b py-3 first:pt-0 last:border-0">
                  <span>
                    <span className="font-medium">{school}</span>
                    <span className="text-sm text-muted-foreground"> · {degree}</span>
                  </span>
                  <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">{period}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
