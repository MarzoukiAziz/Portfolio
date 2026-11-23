export const site = {
  name: 'Aziz Marzouki',
  role: 'Tech Lead, AI & Cloud',
  location: 'Luxembourg',
  url: 'https://azizmarzouki.com',
  email: 'contact@azizmarzouki.com',
  description:
    'Tech Lead, AI & Cloud at Algora in Luxembourg. I work where AI agents, cloud infrastructure and backend engineering meet, for asset and wealth managers.',
}

export const socials = [
  { href: 'https://github.com/MarzoukiAziz', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/aziz-marzouki/', label: 'LinkedIn' },
  { href: 'https://medium.com/@azizmarzouki', label: 'Blog' },
  { href: `mailto:${site.email}`, label: 'Email' },
] as const
