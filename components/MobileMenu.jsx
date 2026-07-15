'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-30 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 z-30 md:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
      >
        <div className="px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-mint-light/20 rounded-lg transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <Link
              href="/contact"
              className="block w-full px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-center focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-secondary"
              onClick={onClose}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
