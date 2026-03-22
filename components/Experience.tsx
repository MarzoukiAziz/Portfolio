const experiences = [
  {
    company: 'Orange',
    role: 'Full Stack Web Developer',
    period: '2023 – 2024',
    points: [
      'Designed and implemented 25+ new features and resolved 10+ bugs for the PaaS portal.',
      'Automated CI/CD with Jenkins; managed infrastructure using Docker and Kubernetes.',
      'Streamlined server provisioning with Ansible in collaboration with the Ops team.',
      'Created UI mockups, wrote technical documentation, and managed Agile as SCRUM master.',
    ],
  },
  {
    company: 'SFM Group',
    role: 'Developer',
    period: '2022',
    points: [
      'Implemented internet connection quality testing using the LibreSpeed library.',
      'Designed database schemas for test results and user data.',
      'Built a backoffice dashboard with data mining insights for data-driven decisions.',
    ],
  },
  {
    company: 'Ministère des Transports',
    role: 'Mobile Developer',
    period: '2022',
    points: [
      'Developed a Symfony feature to track vehicle import requests for people with disabilities.',
      'Created a CRON job for daily SMS notifications via third-party APIs.',
    ],
  },
  {
    company: 'beFlutter Pro',
    role: 'Founder & Instructor',
    period: '2021 – Present',
    points: [
      'Built a comprehensive Flutter & Dart educational platform using Node.js and Firebase.',
      'Demonstrated 13+ applications to guide junior developers.',
    ],
  },
  {
    company: 'ESAC',
    role: 'Co-founder & Trainer',
    period: '2021 – 2022',
    points: [
      'Designed a Symfony scheduling platform for the Academic Support Centre.',
      'Mentored students in JavaFX and Symfony academic projects.',
    ],
  },
]

const education = [
  {
    institution: 'ISEP Paris',
    degree: 'Exchange Program – Computer Engineering',
    period: '2023 – 2024',
    detail:
      'Advanced topics: automatics, real-time systems, mobile development, machine learning, formal methods.',
  },
  {
    institution: 'ESPRIT Engineering School',
    degree: 'Computer Engineering Degree',
    period: '2021 – 2023',
    detail:
      'Algorithms, data structures, software engineering, design patterns, and hands-on group projects.',
  },
  {
    institution: 'ISSAT Sousse',
    degree: 'Preparatory Cycle – Mathematics & CS',
    period: '2019 – 2021',
    detail: 'Strong foundation in mathematics, algorithms, and coding fundamentals.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-primary mb-8" />
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-5 border-l border-border">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-semibold leading-tight">{exp.company}</h3>
                    <p className="text-sm text-primary mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0 mt-0.5">–</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div className="w-12 h-0.5 bg-primary mb-8" />
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.institution} className="relative pl-5 border-l border-border">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-semibold leading-tight">{edu.institution}</h3>
                    <p className="text-sm text-primary mt-0.5">{edu.degree}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
