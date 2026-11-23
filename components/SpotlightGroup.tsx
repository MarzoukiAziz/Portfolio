'use client'

/** Tracks the cursor so every [data-spot] card inside can light up under it. */
export function SpotlightGroup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      data-spot-group
      className={className}
      onMouseMove={(e) => {
        e.currentTarget.querySelectorAll<HTMLElement>('[data-spot]').forEach((card) => {
          const rect = card.getBoundingClientRect()
          card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
          card.style.setProperty('--my', `${e.clientY - rect.top}px`)
        })
      }}
    >
      {children}
    </div>
  )
}
