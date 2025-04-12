'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md dark:border-gray-800 dark:bg-black/60 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground transition hover:text-blue-600 dark:hover:text-blue-400"
        >
          Makris.dev
        </Link>
        <ul className="flex gap-5 text-sm font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'transition-colors hover:text-blue-600 dark:hover:text-blue-400',
                  pathname === link.href
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
