'use client'

import { useState } from 'react'
import Link from 'next/link'

import Noxus from '../../components/header/Noxus'
import { Button } from '../../components/atom/Button'
import Navigation from '../../components/header/Navigation'
import Hamburger from '../../components/header/Hamburger'

type MenuItem = {
  id: string
  label: string
  href: string
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuData: MenuItem[] = [
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'work', label: 'Work', href: '/work' },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#0A0A0A]/70 backdrop-blur-[20px] shadow-sm">
      {/* Logo */}
      <Link href="/">
        <Noxus />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex">
        <Navigation menuItems={menuData} />
      </div>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden">
        <Hamburger onClick={handleMenuToggle} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A] lg:hidden">
          <div className="flex flex-col items-center py-4">
            <Navigation menuItems={menuData} />
            <div className="mt-4">
              <Button variant="primary" text="Let's Connect" />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Button */}
      <div className="hidden lg:flex">
        <Button variant="primary" text="Let's Connect" />
      </div>
    </header>
  )
}
