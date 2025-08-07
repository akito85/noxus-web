'use client'

import React, { useState } from 'react'

// Define the type for a single technology
interface Technology {
  name: string
  logoUrl: string
}

// Technology data with brand SVG logos from devicons CDN
const technologies: Technology[] = [
  {
    name: 'React',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'TypeScript',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Python',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'PostgreSQL',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MongoDB',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'AWS',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  },
  {
    name: 'Docker',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'GraphQL',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'Redis',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  {
    name: 'Kubernetes',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  },
  {
    name: 'Next.js',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'Firebase',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Git',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Vercel',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  },
  {
    name: 'Figma',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'VS Code',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    name: 'Vue.js',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Angular',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'Express.js',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Laravel',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
]

// Prop types for TechCard
interface TechCardProps {
  tech: Technology
  index: number
}

// Individual tech card component with brand SVG logos
const TechCard: React.FC<TechCardProps> = ({ tech, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className="w-20 h-20 p-5 bg-stone-900/40 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-xl flex justify-center items-center overflow-hidden hover:bg-stone-800/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
      style={{
        animationDelay: `${index * 50}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
      }}
      title={tech.name}
    >
      <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        {!imageError ? (
          <img
            src={tech.logoUrl}
            alt={`${tech.name} logo`}
            className={`w-full h-full object-contain transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true)
              console.warn(`Failed to load logo for ${tech.name}`)
            }}
          />
        ) : (
          // Fallback for failed images
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center text-white text-xs font-semibold">
            {tech.name.charAt(0)}
          </div>
        )}

        {/* Loading placeholder */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  )
}

// Prop types for SectionHeader
interface SectionHeaderProps {
  title: string
  subtitle: string
}

// Section header component
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
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

// Prop types for TechGrid
interface TechGridProps {
  technologies: Technology[]
  useLogos?: boolean
}

// Tech grid component
const TechGrid: React.FC<TechGridProps> = ({
  technologies,
  useLogos = false,
}) => {
  return (
    <div className="w-full max-w-5xl flex flex-col justify-start items-start gap-10">
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

// Prop types for Stack
interface StackProps {
  title?: string
  subtitle?: string
  techList?: Technology[]
}

// Main Stack component
const Stack: React.FC<StackProps> = ({
  title = 'Technologies That Power Our Work',
  subtitle =
    'We use proven, modern technologies to build reliable, scalable digital products.',
  techList = technologies,
}) => {
  return (
    <>
      <style jsx>{`
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
