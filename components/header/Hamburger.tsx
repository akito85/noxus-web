import { useState } from 'react'

type HamburgerProps = {
  onClick: () => void
}

const Hamburger = ({ onClick }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    onClick()
  }

  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer z-20"
      onClick={handleClick}
    >
      <div
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? 'transform rotate-45 translate-y-1.5' : ''
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-white rounded-full my-1 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </button>
  )
}

export default Hamburger
