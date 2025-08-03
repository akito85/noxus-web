import { ReactNode } from 'react'

type FrameProps = {
  children?: ReactNode
  src?: string
  alt?: string
  imageClassName?: string
  background?: string
  borderRadius?: string
  outline?: string
  padding?: string
  gap?: string
  backdropBlur?: string
  containerGap?: string
  className?: string
  containerClassName?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  overflow?: string
  imageWidth?: string
  imageHeight?: string
  objectFit?: string
}

const Frame = ({
  children,
  src,
  alt = 'Frame image',
  imageClassName = '',
  background = 'bg-stone-900/40',
  borderRadius = 'rounded-[30px]',
  outline = 'outline outline-1 outline-offset-[-1px] outline-white/10',
  padding = 'p-3',
  gap = 'gap-5',
  backdropBlur = 'backdrop-blur-xl',
  containerGap = 'gap-20',
  className = '',
  containerClassName = '',
  justifyContent = 'justify-center',
  alignItems = 'items-center',
  flexDirection = 'flex-col',
  overflow = 'overflow-hidden',
  imageWidth = 'w-full',
  imageHeight = 'h-full',
  objectFit = 'object-cover',
}: FrameProps) => {
  const renderContent = () => {
    // If src prop is provided, render as image
    if (src) {
      return (
        <img
          src={src}
          alt={alt}
          className={`${imageWidth} ${imageHeight} ${objectFit} ${borderRadius} ${imageClassName}`}
        />
      )
    }

    // Otherwise render children (React components)
    return children
  }

  return (
    <div
      className={`self-stretch flex-1 inline-flex justify-start items-center ${containerGap} ${containerClassName}`}
    >
      <div
        className={`
        flex-1 self-stretch 
        ${padding} 
        ${background} 
        ${borderRadius} 
        ${outline} 
        ${backdropBlur} 
        inline-flex 
        ${flexDirection} 
        ${justifyContent} 
        ${alignItems} 
        ${gap} 
        ${overflow}
        ${className}
      `}
      >
        {renderContent()}
      </div>
    </div>
  )
}

export default Frame
