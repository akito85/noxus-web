'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'

import Noxus from '../../components/header/Noxus'
import { Button } from '../../components/atom/Button'
import Navigation from '../../components/header/Navigation'

type MenuItem = {
  id: string
  label: string
  href: string
}

export default function Header() {
  const [currentPage, setCurrentPage] = useState('services')
  const router = useRouter()

  const menuData: MenuItem[] = [
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'work', label: 'Work', href: '/work' },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ]

  const handleNavigation = (item: MenuItem) => {
    setCurrentPage(item.id)
  }

  return (
    <header className="sticky top-0 z-100 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/70 backdrop-blur-[20px] shadow-sm">
      {/* Logo */}
      <Link href="/">
        <Noxus />
      </Link>

      {/* Navigation */}
      <Navigation
        menuItems={menuData}
        onItemClick={handleNavigation}
        className="shadow-2xl md:invisible lg:visible"
      />

      {/* Button */}
      <Button variant="primary" text="Let's Connect" />
    </header>
  )
}
