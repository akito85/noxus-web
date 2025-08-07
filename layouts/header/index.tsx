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
    <header className="sticky top-0 z-50 px-4 sm:px-8 md:px-16 lg:px-28 py-4 bg-[#0A0A0A]/70 backdrop-blur-[20px] shadow-sm">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:items-center lg:justify-between w-full mx-auto">
        {/* Logo */}
        <Link className="size-md" href="/">
          <Noxus />
        </Link>
        
        {/* Navigation Menu */}
        <Navigation menuItems={menuData} />
        
        {/* Desktop Button */}
        <Button variant="primary" text="Let's Connect" />
      </nav>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden flex items-center justify-between w-full">
        <Link className="size-md" href="/">
          <Noxus />
        </Link>
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
    </header>
  )
}
