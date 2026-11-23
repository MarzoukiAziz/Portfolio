'use client'

import { useEffect, useState } from 'react'

const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Luxembourg',
  hour: '2-digit',
  minute: '2-digit',
})

/** Current time in Luxembourg. Renders a placeholder on the server to keep hydration stable. */
export function LocalTime() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()))
    tick()
    const id = setInterval(tick, 20_000)
    return () => clearInterval(id)
  }, [])

  return <span className="tabular-nums">{time}</span>
}
