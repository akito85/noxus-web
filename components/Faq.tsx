'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      question: 'How long does a typical project take?',
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We work across diverse industries including technology, healthcare, finance, e-commerce, education, and startups. Our adaptable approach allows us to understand and meet the unique needs of any sector while delivering tailored solutions.',
    },
    {
      question: 'Do you offer design-only or development-only services?',
      answer:
        'Yes, we offer flexible service options. You can choose design-only services for UI/UX design and prototyping, development-only services if you already have designs, or our full-service package that includes both design and development for a seamless experience.',
    },
    {
      question: 'Do you provide support after the project is launched?',
      answer:
        'Absolutely! We offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We provide different support packages to match your ongoing needs and budget.',
    },
    {
      question: "What if I don't have a full brief or tech spec yet?",
      answer:
        'No problem at all! We specialize in helping clients refine their ideas. We offer discovery sessions and consultation services to help you define your requirements, create detailed briefs, and develop comprehensive technical specifications before starting development.',
    },
    {
      question: 'Are there any hidden costs?',
      answer:
        'We believe in complete transparency. All costs are outlined clearly in our proposals with no hidden fees. Any potential additional costs (like third-party integrations or scope changes) are discussed and approved before implementation.',
    },
  ]

  return (
    <div className="w-full self-stretch px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 py-10 md:py-20 relative inline-flex flex-col justify-center items-center gap-10 md:gap-20">
      <div className="w-full h-32 md:h-44 left-0 top-[400px] md:top-[612px] absolute bg-gradient-to-b from-neutral-950/0 to-neutral-950" />

      <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
        <div className="text-center justify-center text-white text-2xl md:text-4xl font-bold font-['Satoshi_Variable'] leading-tight md:leading-9">
          FAQ
        </div>
        <div className="self-stretch text-center justify-center text-white text-lg md:text-2xl font-normal font-['Satoshi_Variable'] leading-relaxed md:leading-loose px-4">
          The most common questions we get asked.
        </div>
      </div>

      <div className="self-stretch p-4 md:p-6 bg-stone-900/40 rounded-2xl md:rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-xl flex flex-col justify-start items-center gap-3 md:gap-5 overflow-hidden">
        {faqData.map((item, index) => {
          const isOpen = openItems.has(index)

          return (
            <div
              key={index}
              className="self-stretch rounded-lg md:rounded-sm backdrop-blur-xl overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 md:px-5 py-3 md:py-4 flex justify-between items-center gap-2 hover:bg-white/5 transition-all duration-300 ease-out text-left group"
              >
                <div className="flex-1 text-white text-base md:text-xl font-bold font-['Satoshi_Variable'] leading-6 md:leading-7 pr-2">
                  {item.question}
                </div>
                <div className="size-5 md:size-6 flex-shrink-0 flex items-center justify-center">
                  <div
                    className={`transition-all duration-500 ease-out ${isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'} group-hover:scale-125`}
                  >
                    <Plus className="w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300" />
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                  transitionTimingFunction: isOpen
                    ? 'cubic-bezier(0.16, 1, 0.3, 1)'
                    : 'cubic-bezier(0.7, 0, 0.84, 0)',
                }}
              >
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <div className="text-white/80 text-sm md:text-base font-normal font-['Satoshi_Variable'] leading-relaxed md:leading-loose border-t border-white/10 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
