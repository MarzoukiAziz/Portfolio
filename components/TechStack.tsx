const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Symfony', category: 'Backend' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Firebase', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'Ansible', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
]

export function TechStack() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
      <div className="w-12 h-0.5 bg-primary mb-6" />
      <div className="flex flex-wrap gap-2">
        {technologies.map(({ name, category }) => (
          <span
            key={name}
            title={category}
            className="px-3 py-1.5 rounded-md border border-border bg-card text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
