'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuItem = {
  id: string
  label: string
  href: string
}

type NavigationProps = {
  menuItems?: MenuItem[]
  className?: string
  onItemClick?: (item: MenuItem) => void
}

// Navigation component with URL-based persistence
const Navigation = ({
  menuItems = [],
  className = '',
  onItemClick = () => {},
}: NavigationProps) => {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string>('')

  useEffect(() => {
    // Default to 'services' if on the root path
    if (pathname === '/') {
      setActiveItem('')
      return
    }

    const activeMenuItem = menuItems.find(
      (item) => item.href !== '/' && pathname.startsWith(item.href)
    )

    if (activeMenuItem) {
      setActiveItem(activeMenuItem.id)
    } else {
      // Optional: handle cases where no item matches
      setActiveItem('')
    }
  }, [pathname, menuItems])

  return (
    <nav
      className={`inline-flex justify-center items-center px-6 bg-stone-900/40 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-white/10 ${className}`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => onItemClick(item)} // Only call the passed-in handler
          className="h-11 min-w-28 p-2 rounded-sm inline-flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/5"
        >
          <div className="h-6 flex flex-col justify-start items-start overflow-hidden relative">
            {/* Default state text */}
            <div
              className={`text-center justify-start text-base font-normal font-['Satoshi_Variable'] leading-normal transition-all duration-300 ease-in-out ${
                activeItem === item.id
                  ? 'text-white transform -translate-y-6 opacity-0'
                  : 'text-white/70 transform translate-y-0 opacity-100'
              }`}
            >
              {item.label}
            </div>

            {/* Active state text */}
            <div
              className={`text-center justify-start text-red-400 text-base font-medium font-['Satoshi_Variable'] leading-normal transition-all duration-300 ease-in-out absolute top-0 left-0 ${
                activeItem === item.id
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-6 opacity-0'
              }`}
            >
              {item.label}
            </div>
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
