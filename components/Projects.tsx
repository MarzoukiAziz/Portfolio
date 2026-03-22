import { ExternalLink, Youtube } from 'lucide-react'

const projects = [
  {
    title: 'GrowFunds',
    description:
      'A crowdfunding platform enabling users to create, manage, and back funding campaigns.',
    image: '/images/portfolio/1.jpg',
    link: 'https://www.youtube.com/watch?v=PiSGzLJPOV4',
    type: 'video' as const,
    tags: ['FullStack', 'Web App'],
  },
  {
    title: 'XOAuto',
    description:
      'An automotive marketplace with advanced search, filtering, and real-time listings.',
    image: '/images/portfolio/2.jpg',
    link: 'https://www.youtube.com/watch?v=ticj76cAXiA',
    type: 'video' as const,
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'beFlutter Pro',
    description:
      'A comprehensive online educational platform focused on Dart and Flutter development.',
    image: '/images/portfolio/3.jpg',
    link: 'https://beflutter.pro/',
    type: 'website' as const,
    tags: ['Education', 'Flutter', 'Firebase', 'Node.js'],
  },
  {
    title: 'Sheet Metal Bending',
    description:
      'A simulation and analysis tool for sheet metal bending processes.',
    image: '/images/portfolio/4.jpg',
    link: 'https://www.youtube.com/watch?v=V78RpMpthfY',
    type: 'video' as const,
    tags: ['Simulation', 'Engineering'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <div className="w-12 h-0.5 bg-primary mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">{project.title}</h3>
                {project.type === 'video' ? (
                  <Youtube
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                ) : (
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
