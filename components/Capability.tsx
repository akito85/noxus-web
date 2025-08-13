'use client'

import { useState, ReactNode } from 'react'

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
    <>
      <button
        onClick={onToggle}
        className="w-full flex items-center px-5 py-3 text-left focus:outline-none rounded"
        aria-expanded={isOpen}
      >
        {/* Text content */}
        <div className="flex-1 text-white text-3xl font-normal font-['Satoshi_Variable'] leading-9">
          {title}
        </div>
        
        {/* Toggle icon */}
        <div className="size-5 relative overflow-hidden flex items-center justify-center flex-shrink-0">
          {/* First line of X - rotates from horizontal to diagonal */}
          <div
            className={`w-3 h-0.5 bg-red-800 absolute transition-all duration-400 ease-out ${
              isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
            }`}
          />
          {/* Second line of X - rotates from vertical to diagonal */}
          <div
            className={`w-0.5 h-3 bg-red-800 absolute transition-all duration-400 ease-out ${
              isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100 mt-3 mb-3' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="flex flex-col ml-3">{children}</div>
      </div>
    </>
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
  <button
    onClick={onClick}
    className={`flex items-center gap-3 text-left p-2 rounded-lg transition-all duration-300 ease-out transform ${
      isSelected ? '' : 'hover:bg-white/5 hover:scale-102'
    }`}
  >
    <div
      className={`w-2 h-8 flex-shrink-0 transition-all duration-300 ease-out ${
        isSelected
          ? 'bg-red-800 shadow-sm shadow-red-800/30 opacity-100'
          : 'bg-transparent opacity-0'
      }`}
    />
    <div
      className={`flex-1 text-xl font-normal font-['Satoshi_Variable'] leading-loose transition-all duration-300 ease-out ${
        isSelected ? 'text-white font-normal' : 'text-white/70'
      }`}
    >
      {text}
    </div>
  </button>
)

interface RightPanelProps {
  selectedService: ServiceItemData | null
}

const RightPanel = ({ selectedService }: RightPanelProps) => {
  if (!selectedService) return null

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 p-6">
      <div className="w-full max-w-80 h-48 flex flex-col justify-start items-start gap-2.5 overflow-hidden rounded-lg">
        <img
          className="w-full h-48 object-cover"
          src={selectedService.image}
          alt={selectedService.title}
        />
      </div>
      <div className="flex flex-col justify-start items-end gap-5">
        <div className="w-full self-stretch text-center justify-end text-white text-3xl font-normal font-['Satoshi_Variable'] leading-9">Our Capabilities:</div>
        <div className="w-full self-stretch justify-end text-white text-xl font-normal font-['Satoshi_Variable'] leading-loose">
          {selectedService.description}
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
    // Toggle selection - if clicking the same service, deselect it
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
    <div className="w-full self-stretch px-28 py-20 relative bg-neutral-950 inline-flex flex-col justify-center items-center gap-20">
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
      <div className="p-6 bg-stone-900/40 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {/* Left Column - Services List */}
            <div className="flex flex-col justify-start items-start">
              <div className="w-full rounded-[20px] flex flex-col justify-center items-start">
                {services.map((service, index) => (
                  <AccordionItem
                    key={index}
                    title={service.title}
                    isOpen={openItem === index}
                    onToggle={() => handleToggle(index)}
                  >
                    {service.items.map((item, itemIndex) => (
                      <ServiceItem
                        key={itemIndex}
                        text={item.text}
                        isHighlighted={item.highlighted}
                        isSelected={selectedService === item.id}
                        onClick={() => handleServiceClick(item.id)}
                      />
                    ))}
                  </AccordionItem>
                ))}
              </div>
            </div>

            {/* Right Column - Service Details */}
            <div className="flex flex-col justify-start items-start">
              {selectedService && (
                <div className="top-6">
                  <RightPanel selectedService={getSelectedServiceData()} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Capability
