'use client'

import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

const QUESTION = 'How did Europe’s five largest banks do this quarter?'

const STEPS = [
  { key: 'plan', text: 'Split into 5 lookups, one per bank' },
  { key: 'retrieve', text: '23 sources: filings, market data, news' },
  { key: 'ground', text: 'Every figure linked to its source' },
  { key: 'verify', text: '41 of 41 facts checked' },
]

const TYPING = -1
const DONE = STEPS.length

/**
 * A looping, illustrative agent run. Rendered complete on the server (and for
 * reduced motion), then replayed step by step in the browser.
 */
export function AgentRun() {
  const [typed, setTyped] = useState(QUESTION.length)
  const [step, setStep] = useState(DONE)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false
    let timer: ReturnType<typeof setTimeout>
    const wait = (ms: number) => new Promise<void>((resolve) => (timer = setTimeout(resolve, ms)))

    async function run() {
      while (!cancelled) {
        setTyped(0)
        setStep(TYPING)
        await wait(700)
        for (let i = 1; i <= QUESTION.length && !cancelled; i++) {
          setTyped(i)
          await wait(26)
        }
        await wait(450)
        for (let i = 0; i < STEPS.length && !cancelled; i++) {
          setStep(i)
          await wait(1050)
        }
        if (cancelled) return
        setStep(DONE)
        await wait(7000)
      }
    }
    run()

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  const finished = step === DONE

  return (
    <div
      role="img"
      aria-label="Animated example: an AI agent plans, retrieves sources, verifies every fact and answers a question about European banks."
      className="rounded-2xl border bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">agent run</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span className={`h-1.5 w-1.5 rounded-full ${finished ? 'bg-emerald-500' : 'bg-primary animate-pulse'}`} />
          {finished ? 'done' : 'running'}
        </span>
      </div>

      <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed">
        <p className="relative text-foreground">
          <span className="invisible">
            <span className="text-primary">› </span>
            {QUESTION}
          </span>
          <span className="absolute inset-0">
            <span className="text-primary">› </span>
            {QUESTION.slice(0, typed)}
            {step === TYPING && <span className="caret" />}
          </span>
        </p>

        <ul className="space-y-2.5">
          {STEPS.map(({ key, text }, i) => {
            const state = step > i ? 'done' : step === i ? 'running' : 'idle'
            return (
              <li
                key={key}
                className={`flex items-start gap-3 transition-opacity duration-300 ${state === 'idle' ? 'opacity-0' : 'opacity-100'}`}
              >
                <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center">
                  {state === 'done' ? (
                    <Check size={14} strokeWidth={3} className="text-primary" />
                  ) : (
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-primary" />
                  )}
                </span>
                <span className="w-16 shrink-0 text-muted-foreground">{key}</span>
                <span className={state === 'done' ? 'text-foreground/90' : 'text-muted-foreground'}>{text}</span>
              </li>
            )
          })}
        </ul>

        <div
          className={`flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 transition-all duration-500 ${
            finished ? 'opacity-100' : 'translate-y-1 opacity-0'
          }`}
        >
          <span className="text-foreground">Answer ready, every number cited</span>
          <span className="flex shrink-0 gap-1 text-[11px] text-primary">
            <span className="rounded border border-primary/40 px-1.5">1</span>
            <span className="rounded border border-primary/40 px-1.5">2</span>
            <span className="rounded border border-primary/40 px-1.5">+21</span>
          </span>
        </div>
      </div>
    </div>
  )
}
