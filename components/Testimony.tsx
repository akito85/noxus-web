'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const containerRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: 'Randy George',
      title: 'Creative Director of XYZ Company',
      avatar: '/api/placeholder/56/56',
      quote:
        "Working with Noxus was a game-changer. They didn't just build what we asked — they challenged our thinking and delivered a smarter solution. The result? A faster, more scalable platform that cut our support tickets by 40% within the first month.",
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'CTO at Innovation Labs',
      avatar: '/api/placeholder/56/56',
      quote:
        "The team's attention to detail and technical expertise exceeded our expectations. They transformed our complex requirements into an elegant, user-friendly platform that our customers absolutely love.",
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      title: 'Product Manager at TechFlow',
      avatar: '/api/placeholder/56/56',
      quote:
        "Outstanding collaboration from start to finish. They didn't just deliver code – they delivered a complete solution that scaled beautifully with our growing user base.",
    },
    {
      id: 4,
      name: 'Emma Thompson',
      title: 'Founder of Digital Dreams',
      avatar: '/api/placeholder/56/56',
      quote:
        "Working with this team was transformative for our business. Their innovative approach and deep technical knowledge helped us achieve results we didn't think were possible.",
    },
  ]

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [isTransitioning, testimonials.length])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
    setTimeout(() => setIsTransitioning(false), 300)
  }, [isTransitioning, testimonials.length])

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 300)
    },
    [isTransitioning, currentIndex]
  )

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div className="w-full bg-red-900 relative overflow-hidden">
      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center px-4 py-16 lg:px-28 lg:py-20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full max-w-6xl relative gap-10">
          {/* Background Quote Icon */}
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24  relative opacity-40 overflow-hidden left-0 top-0 absolute rounded-full"
            src="/assets/images/Services/iconQuote.svg"
            width={0}
            height={0}
            alt=""
          />

          {/* Testimonial Content */}
          <div className="flex relative overflow-hidden gap-10 py-20">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="w-full max-w-[1440px] flex flex-col justify-center items-start gap-6 lg:gap-10 max-w-4xl mx-auto">
                    {/* Author Info */}
                    <div className="w-full flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg lg:text-xl">
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-white text-sm lg:text-base font-bold leading-tight font-['Satoshi_Variable']">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/70 text-xs lg:text-sm font-normal leading-tight font-['Satoshi_Variable']">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="w-full text-white text-xl lg:text-4xl font-bold leading-relaxed lg:leading-tight font-['Satoshi_Variable']">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-end justify-between">
            {/* Dots Indicator */}
            {/*
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            */}

            {/* Arrow Controls */}
            <div className="flex gap-3 lg:gap-5">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-white/50 flex items-center justify-center transition-all duration-200 hover:border-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-white/50 flex items-center justify-center transition-all duration-200 hover:border-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-red-900 transition-all duration-300 ease-out opacity-90"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

export default Testimony
