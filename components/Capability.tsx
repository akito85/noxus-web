'use client'

import { useState, ReactNode, useEffect } from 'react'

// Define interfaces for data structures
interface ServiceItemData {
  id: string
  text: string
  highlighted?: boolean
  image: string
  description: string
}

interface ServiceCategory {
  title: string
  items: ServiceItemData[]
}

// Define interfaces for component props
interface AccordionItemProps {
  title: string
  children: ReactNode
  isOpen: boolean
  onToggle: () => void
}

const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full flex items-center px-6 py-4 text-left focus:outline-none hover:bg-white/5 transition-all duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex-1 text-white text-2xl font-normal font-['Satoshi_Variable'] leading-8">
          {title}
        </div>

        <div className="size-6 relative overflow-hidden flex items-center justify-center flex-shrink-0">
          <div
            className={`w-4 h-0.5 bg-red-500 absolute transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
            }`}
          />
          <div
            className={`w-0.5 h-4 bg-red-500 absolute transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6">{children}</div>
      </div>
    </div>
  )
}

interface ServiceItemProps {
  text: string
  isHighlighted?: boolean
  onClick: () => void
  isSelected?: boolean
}

const ServiceItem = ({
  text,
  isHighlighted = false,
  onClick,
  isSelected = false,
}: ServiceItemProps) => (
  <div className="relative group w-full">
    <button
      onClick={onClick}
      className={`relative w-full flex items-center gap-4 text-left px-4 py-3 transition-all duration-300 ease-out overflow-hidden ${
        isSelected
          ? 'bg-red-900/20 border-l-4 border-red-500'
          : 'hover:bg-white/5 hover:translate-x-1'
      }`}
    >
      <div
        className={`flex-1 text-lg font-medium font-['Satoshi_Variable'] leading-relaxed transition-all duration-300 ease-out ${
          isSelected
            ? 'text-white font-semibold'
            : 'text-white/70 group-hover:text-white/90'
        }`}
      >
        {text}
      </div>
    </button>
  </div>
)

interface RightPanelProps {
  selectedService: ServiceItemData | null
}

const RightPanel = ({ selectedService }: RightPanelProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentService, setCurrentService] = useState<ServiceItemData | null>(
    selectedService
  )

  useEffect(() => {
    if (selectedService) {
      // Fade out first
      setIsVisible(false)

      // Update content after fade out
      const updateTimer = setTimeout(() => {
        setCurrentService(selectedService)
      }, 200)

      // Fade in with new content
      const showTimer = setTimeout(() => {
        setIsVisible(true)
      }, 250)

      return () => {
        clearTimeout(updateTimer)
        clearTimeout(showTimer)
      }
    }
  }, [selectedService])

  // Show empty state when no service is selected
  if (!currentService) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-8 text-white/40 transition-all duration-300 ease-out">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white/40 rounded-full animate-spin" />
          </div>
          <p className="text-lg font-['Satoshi_Variable']">
            Select a service to view details
          </p>
        </div>
      </div>
    )
  }

  // Split description by newlines and filter out empty strings
  const descriptionItems = currentService.description
    .split('\n')
    .filter(item => item.trim() !== '')

  return (
    <div className="relative w-full h-full">
      <div
        className={`w-full p-6 rounded-[30px] transition-all duration-400 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 w-full">
          {/* Image Section */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-2xl">
              <img
                className={`w-full h-full object-cover transition-all duration-600 ease-out ${
                  isVisible
                    ? 'scale-100 opacity-100 blur-0'
                    : 'scale-105 opacity-0 blur-sm'
                }`}
                src={currentService.image}
                alt={currentService.text}
              />
              {/* Overlay gradient for smoother transition */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent transition-opacity duration-400 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-4 transition-all duration-500 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? '200ms' : '0ms',
            }}
          >
            <div className="flex justify-center items-center gap-3">
              <h3 className="text-white text-center text-2xl font-['Satoshi_Variable'] leading-tight">
                Our Capabilities
              </h3>
            </div>

            {/* Loop through description items */}
            <div className="space-y-3 p-6">
              {descriptionItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 mt-0.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-white/90 text-lg font-['Satoshi_Variable'] leading-relaxed">
                    {item.trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface CapabilityProps {}

const Capability = () => {
  const [openItem, setOpenItem] = useState<number>(0)
  const [selectedService, setSelectedService] = useState<string | null>(
    'web-mobile'
  )

  const services: ServiceCategory[] = [
    {
      title: 'Software Development',
      items: [
        {
          id: 'web-mobile',
          text: 'Web & Mobile Application Development',
          highlighted: true,
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Web+%26+Mobile+Development',
          description:
            'Web & Mobile Application Development\nAPI Design, Development & Lifecycle Management\nDatabase Architecture & Optimization\nServer-Side Systems & Backend Solutions\nScalable & Maintainable Codebase',
        },
        {
          id: 'api-design',
          text: 'API Design, Development & Lifecycle Management',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=API+Development',
          description:
            'RESTful & GraphQL API Development\nAPI Documentation & Testing\nVersion Control & Lifecycle Management\nAuthentication & Security Implementation\nRate Limiting & Performance Optimization',
        },
        {
          id: 'database',
          text: 'Database Architecture & Optimization',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Database+Architecture',
          description:
            'Database Schema Design\nQuery Performance Optimization\nData Modeling & Normalization\nBackup & Recovery Solutions\nScaling & Replication Strategies',
        },
        {
          id: 'backend',
          text: 'Server-Side Systems & Backend Solutions',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Backend+Solutions',
          description:
            'Microservices Architecture\nLoad Balancing & Caching\nMessage Queues & Event Processing\nServer Configuration & Management\nPerformance Monitoring & Logging',
        },
        {
          id: 'scalable',
          text: 'Scalable & Maintainable Codebase',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Scalable+Code',
          description:
            'Clean Code Principles\nDesign Patterns Implementation\nCode Review & Quality Assurance\nTesting & Test Automation\nDocumentation & Knowledge Transfer',
        },
      ],
    },
    {
      title: 'Systems Integration & Data Migration',
      items: [
        {
          id: 'legacy-modernization',
          text: 'Legacy System Modernization',
          highlighted: true,
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Legacy+Modernization',
          description:
            'Legacy System Assessment\nModernization Strategy Planning\nIncremental Migration Approach\nData Preservation & Integrity\nMinimal Downtime Deployment',
        },
        {
          id: 'api-integration',
          text: 'Third-party API Integration',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=API+Integration',
          description:
            'Third-party Service Integration\nAPI Gateway Implementation\nData Synchronization\nError Handling & Retry Logic\nMonitoring & Alerting',
        },
        {
          id: 'data-pipeline',
          text: 'Data Pipeline Architecture',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Data+Pipeline',
          description:
            'ETL/ELT Process Design\nReal-time Data Streaming\nData Quality Validation\nPipeline Orchestration\nError Recovery & Monitoring',
        },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      items: [
        {
          id: 'cloud-architecture',
          text: 'Cloud Architecture & Deployment',
          highlighted: true,
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Cloud+Architecture',
          description:
            'Multi-cloud Strategy\nInfrastructure as Code\nAuto-scaling Solutions\nDisaster Recovery Planning\nCost Optimization',
        },
        {
          id: 'cicd-pipeline',
          text: 'CI/CD Pipeline Implementation',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=CI%2FCD+Pipeline',
          description:
            'Automated Build & Deployment\nTesting Integration\nCode Quality Gates\nRelease Management\nRollback Strategies',
        },
        {
          id: 'container-orchestration',
          text: 'Container Orchestration',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=Container+Orchestration',
          description:
            'Docker Containerization\nKubernetes Deployment\nService Mesh Implementation\nContainer Security\nResource Management',
        },
      ],
    },
    {
      title: 'AI Fine Tuning & Integration',
      items: [
        {
          id: 'model-training',
          text: 'Custom Model Training & Fine-tuning',
          highlighted: true,
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=AI+Model+Training',
          description:
            'Custom AI Model Development\nTransfer Learning Implementation\nHyperparameter Optimization\nModel Evaluation & Validation\nProduction Deployment',
        },
        {
          id: 'ml-pipeline',
          text: 'ML Pipeline Development',
          image: 'https://placehold.co/345x193/1e293b/f8fafc?text=ML+Pipeline',
          description:
            'MLOps Implementation\nData Preprocessing Pipelines\nModel Training Automation\nModel Monitoring & Drift Detection\nA/B Testing Framework',
        },
        {
          id: 'nlp',
          text: 'Natural Language Processing',
          image:
            'https://placehold.co/345x193/1e293b/f8fafc?text=NLP+Solutions',
          description:
            'Text Analysis & Processing\nSentiment Analysis\nChatbot Development\nLanguage Translation\nDocument Understanding',
        },
      ],
    },
  ]

  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? -1 : index)
  }

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId)
  }

  const getSelectedServiceData = (): ServiceItemData | null => {
    for (const category of services) {
      for (const item of category.items) {
        if (item.id === selectedService) {
          return item
        }
      }
    }
    return null
  }

  return (
    <div className="w-full self-stretch px-8 md:px-16 lg:px-28 py-20 relative bg-neutral-950 inline-flex flex-col justify-center items-center gap-20">
      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className="text-center justify-center text-white text-4xl font-bold font-['Satoshi_Variable'] leading-9">
          With an in-house team,
          <br />
          we offer personalized services
        </div>
        <div className="self-stretch text-center justify-center text-white text-2xl font-normal font-['Satoshi_Variable'] leading-loose">
          We deliver tailored solutions with precision, reliability, and speed.
        </div>
      </div>

      <div className="w-full max-w-6xl p-6 bg-stone-900/40 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[600px] relative">
          {/* Left Column - Services List */}
          <div className="flex flex-col justify-start min-w-0">
            <div className="space-y-1">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  title={service.title}
                  isOpen={openItem === index}
                  onToggle={() => handleToggle(index)}
                >
                  <div className="space-y-2 py-2">
                    {service.items.map((item, itemIndex) => (
                      <ServiceItem
                        key={itemIndex}
                        text={item.text}
                        isHighlighted={item.highlighted}
                        isSelected={selectedService === item.id}
                        onClick={() => handleServiceClick(item.id)}
                      />
                    ))}
                  </div>
                </AccordionItem>
              ))}
            </div>
          </div>

          {/* Right Column - Service Details */}
          <div className="flex flex-col justify-start min-w-0">
            <div className="sticky top-8 h-full">
              <RightPanel selectedService={getSelectedServiceData()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Capability
