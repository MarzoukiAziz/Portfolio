'use client'

import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What I do', href: '#work' },
  { label: 'Experience', href: '#experience' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border bg-background/70 pl-6 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl">
        <a href="#home" className="font-display text-base font-semibold tracking-tight">
          Aziz Marzouki<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background sm:inline-flex"
          >
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-accent md:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="mx-auto mt-2 max-w-3xl rounded-3xl border bg-background/95 p-3 shadow-lg backdrop-blur-xl md:hidden">
          {[...navLinks, { label: 'Contact', href: '#contact' }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium hover:bg-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
