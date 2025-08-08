'use client'

import { useState } from 'react'
import Image from 'next/image'

// TypeScript interfaces
interface Technology {
  name: string
  logoUrl: string
}

interface TechCardProps {
  tech: Technology
  index: number
}

interface SectionHeaderProps {
  title: string
  subtitle: string
}

interface TechGridProps {
  technologies: Technology[]
}

interface StackProps {
  title?: string
  subtitle?: string
  techList?: Technology[]
}

// Technology data with brand SVG logos from devicons CDN
const technologies: Technology[] = [
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Netxtjs',
    logoUrl: '/assets/images/Stacks/nextjs.svg',
  },
  {
    name: 'Reactjs',
    logoUrl: '/assets/images/Stacks/reactjs.svg',
  },
  {
    name: 'fastify',
    logoUrl: '/assets/images/Stacks/fastify.svg',
  },
  {
    name: 'Tailwindcss',
    logoUrl: '/assets/images/Stacks/tailwindcss2.svg',
  },
  {
    name: 'Docker',
    logoUrl: '/assets/images/Stacks/docker.svg',
  },
  {
    name: 'Clickhouse',
    logoUrl: '/assets/images/Stacks/clickhouse.svg',
  },
  {
    name: 'Singlestore',
    logoUrl: '/assets/images/Stacks/singlestore.svg',
  },  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
  {
    name: 'Vercel',
    logoUrl: '/assets/images/Stacks/vercel.svg',
  },
]

// Individual tech card component with Next.js Image
const TechCard = ({ tech, index }: TechCardProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [imageError, setImageError] = useState<boolean>(false)

  const handleImageLoad = (): void => {
    setImageLoaded(true)
  }

  const handleImageError = (): void => {
    setImageError(true)
    setImageLoaded(true) // Stop showing spinner when error occurs
    console.warn(`Failed to load logo for ${tech.name}`)
  }

  return (
    <div
      className="w-28 h-28 p-5 bg-stone-900/40 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-xl flex justify-center items-center overflow-hidden hover:bg-stone-800/50 transition-all duration-300 hover:scale-105 group cursor-pointer relative"
      style={{
        animationDelay: `${index * 50}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
      }}
      title={tech.name}
    >
      <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 relative">
        {!imageError ? (
          <Image
            src={tech.logoUrl}
            alt={`${tech.name} logo`}
            width={88}
            height={88}
            className={`w-full h-full object-contain transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            priority={index < 8} // Prioritize first 8 images for better performance
          />
        ) : (
          // Fallback for failed images
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center text-white text-xs font-semibold">
            {tech.name.charAt(0)}
          </div>
        )}

        {/* Loading placeholder - only show when image hasn't loaded and there's no error */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  )
}

// Section header component
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="self-stretch flex flex-col justify-start items-center gap-6">
      <h2 className="text-center text-white text-4xl font-bold font-['Satoshi_Variable'] leading-9">
        {title}
      </h2>
      <p className="self-stretch text-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
        {subtitle}
      </p>
    </div>
  )
}

// Tech grid component
const TechGrid = ({ technologies }: TechGridProps) => {
  return (
    <div className="w-full max-w-6xl flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex justify-center items-start gap-6 flex-wrap">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
      <div className="self-stretch text-center text-white text-xl font-normal font-['Satoshi_Variable'] leading-7">
        And many more...
      </div>
    </div>
  )
}

// Main Stack component
const Stack = ({
  title = 'Technologies That Power Our Work',
  subtitle = 'We use proven, modern technologies to build reliable, scalable digital products.',
  techList = technologies,
}: StackProps) => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="w-full px-6 md:px-28 py-20 bg-neutral-950 flex flex-col justify-center items-center gap-20">
        <SectionHeader title={title} subtitle={subtitle} />
        <TechGrid technologies={techList} />
      </section>
    </>
  )
}

export default Stack
