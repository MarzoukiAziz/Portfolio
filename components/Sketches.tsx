/**
 * Line drawings used as quiet backgrounds. The #sketch filter nudges every
 * stroke slightly so clean paths read as pen on paper.
 */
function SketchFilter({ id }: { id: string }) {
  return (
    <defs>
      <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
      </filter>
    </defs>
  )
}

/** Luxembourg City: Adolphe Bridge, the Spuerkeess tower, the Gëlle Fra, the cathedral and Kirchberg. */
export function LuxembourgSkyline({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 420 150"
      preserveAspectRatio="xMaxYMax meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <SketchFilter id="sketch-lux" />
      <g filter="url(#sketch-lux)">
        {/* sky */}
        <path d="M104 30q5-9 14-3q9-6 14 3M186 22q4-5 8 0q4-5 8 0M330 16q3-4 6 0q3-4 6 0" />

        {/* Spuerkeess tower */}
        <path d="M28 78V42h12v36M26 42l8-22l8 22M34 20v-7" />
        <circle cx="34" cy="53" r="3" />

        {/* Adolphe Bridge */}
        <path d="M14 78h238M14 83h238" />
        <path d="M70 128Q135 30 200 128M80 128Q135 46 190 128" />
        <path d="M70 83v45M200 83v45M95 83v14M110 83v4M160 83v4M175 83v14" />
        <path d="M22 128V98q12-14 24 0v30M46 98q12-14 24 0" />
        <path d="M200 98q12-14 24 0v30M224 98q12-14 24 0v30" />

        {/* plateau and cliff */}
        <path d="M252 78h168M262 86v18M280 88v24M301 86v16M324 88v22M349 86v18M372 88v22M397 86v16" />

        {/* cathedral */}
        <path d="M268 78V58h30v20M270 58l4-36l4 36M281 58l3-44l3 44M290 58l4-36l4 36M278 78v-9q5-6 10 0v9" />

        {/* old town roofs */}
        <path d="M304 78V66l6-6l6 6v12M316 66l7-8l7 8v12M330 68l6-6l6 6v10" />

        {/* Kirchberg */}
        <path d="M352 78V36h14v42M370 78V46h12v32M386 78V30h13v48M355 46h8M355 56h8M355 66h8M389 40h7M389 50h7M389 60h7M389 70h7" />

        {/* valley */}
        <path d="M0 128h420M250 128q8-15 17 0q8-19 18 0q9-13 18 0q8-17 18 0q9-12 18 0q8-18 18 0q9-13 18 0q8-16 18 0q7-10 13 0" />
        <path d="M96 139q8-4 16 0t16 0t16 0t16 0" />
      </g>

      {/* Gëlle Fra, picked out in the accent colour */}
      <g className="text-primary" stroke="currentColor" filter="url(#sketch-lux)">
        <path d="M229 78l2-32h4l2 32M233 46v-5" />
        <circle cx="233" cy="38" r="2.4" />
      </g>
    </svg>
  )
}

const cityMarks: Record<string, React.ReactNode> = {
  // Ribat of Sousse with a palm
  Sousse: (
    <path d="M2 28h44M5 28V15h3v-2h3v2h3v-2h3v2h3v-2h3v2h3v13M26 15V6h2V4h2v2h2V4h2v2h2v22M12 28v-6a3 3 0 016 0v6M43 28q-1-8 1-14M44 14q-5-3-8 1M44 14q5-3 8 1M44 14q-2-5-6-6M44 14q2-5 6-6" />
  ),
  // Bab el Bhar
  Tunis: (
    <path d="M2 28h44M8 28V10h32v18M8 10V7h4v3M16 10V7h4v3M24 10V7h4v3M32 10V7h4v3M36 7h4v3M17 28v-8a7 7 0 0114 0v8" />
  ),
  // Eiffel Tower
  Paris: (
    <path d="M6 29h36M24 2v4M24 6c0 10-4 18-10 23M24 6c0 10 4 18 10 23M19.5 20h9M21.5 13h5M17 29q7-7 14 0" />
  ),
  // Adolphe Bridge and a cathedral spire
  Luxembourg: (
    <path d="M2 28h44M3 15h42M10 28Q24 4 38 28M10 15v13M38 15v13M17 15v4M31 15v4M40 15l2-11l2 11" />
  ),
}

export function CityMark({ place, className = '' }: { place: string; className?: string }) {
  const mark = cityMarks[place]
  if (!mark) return null
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <SketchFilter id={`sketch-${place}`} />
      <g filter={`url(#sketch-${place})`}>{mark}</g>
    </svg>
  )
}
