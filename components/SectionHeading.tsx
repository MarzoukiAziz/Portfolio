import { Reveal } from './Reveal'

export function SectionHeading({
  index,
  label,
  children,
}: {
  index: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow">
        <span className="text-primary">{index}</span> / {label}
      </p>
      <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl text-balance">{children}</h2>
    </Reveal>
  )
}
