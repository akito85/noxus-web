'use client'

import { ReactNode } from 'react'

interface HeroProps {
  layout?: 'single' | 'two-column' | 'custom'
  leftColumn?: ReactNode
  rightColumn?: ReactNode
  singleContent?: ReactNode
  children?: ReactNode // ✅ support JSX children
}

const Hero = ({
  layout = 'single',
  leftColumn,
  rightColumn,
  singleContent,
  children,
}: HeroProps) => {
  return (
    <div
      className="w-full px-28 py-20 relative bg-neutral-950 overflow-hidden"
      style={{
        backgroundImage: `url(/assets/images/Home/Hero/Center_Left.png), url(/assets/images/Home/Hero/Right_Bottom.png)`,
        backgroundPosition: 'left bottom, right bottom',
        backgroundSize: 'contain, contain',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      <div
        className={`
          w-full 
          ${
            layout === 'single'
              ? 'flex flex-col justify-center items-center gap-10'
              : layout === 'two-column'
                ? 'inline-flex flex-col justify-center items-start gap-10'
                : ''
          }
        `}
      >
        {layout === 'custom' && children}

        {layout === 'single' && !children && singleContent}

        {layout === 'two-column' && !children && (
          <div className="self-stretch flex-1 inline-flex justify-start items-center gap-20">
            {leftColumn}
            {rightColumn}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
