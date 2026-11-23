import { Bot, Cloud, Server } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SpotlightGroup } from './SpotlightGroup'

const areas = [
  {
    icon: Bot,
    title: 'AI agents',
    text: 'Multi-agent systems that plan, call tools and ground every answer in a source, so people can check the result instead of trusting it blindly.',
    tools: ['Google ADK', 'Vertex AI', 'MCP', 'RAG', 'LLMs'],
  },
  {
    icon: Cloud,
    title: 'Cloud platforms',
    text: 'Cloud-native architectures on Google Cloud and AWS, described in code and shipped through automated pipelines.',
    tools: ['Google Cloud', 'AWS', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    icon: Server,
    title: 'Backend engineering',
    text: 'APIs, data models and microservices that are tested, secured and documented before anyone depends on them.',
    tools: ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'PostgreSQL', 'CI/CD'],
  },
]

export function Work() {
  return (
    <section id="work" className="border-y bg-card/40">
      <div className="container-x py-24 md:py-36">
        <SectionHeading index="02" label="What I do">
          Agents, cloud and <span className="accent-serif">the code between.</span>
        </SectionHeading>

        <SpotlightGroup className="grid gap-4 md:grid-cols-3">
          {areas.map(({ icon: Icon, title, text, tools }, i) => (
            <Reveal key={title} delay={i * 110} className="h-full">
              <article data-spot className="card flex h-full flex-col bg-background">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border bg-card text-primary">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="display mt-8 text-2xl md:text-3xl">{title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{text}</p>
                <ul className="mt-8 flex flex-wrap gap-1.5 border-t pt-5">
                  {tools.map((tool) => (
                    <li key={tool} className="rounded-full border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </SpotlightGroup>
      </div>
    </section>
  )
}
