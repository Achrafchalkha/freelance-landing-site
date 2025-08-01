"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/useLanguage"

export function Testimonials() {
  const { t, isRTL } = useLanguage()
  
  const testimonials = [
    {
      name: t('testimonials.students.0.name'),
      course: t('testimonials.students.0.course'),
      quote: t('testimonials.students.0.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.students.1.name'),
      course: t('testimonials.students.1.course'),
      quote: t('testimonials.students.1.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.students.2.name'),
      course: t('testimonials.students.2.course'),
      quote: t('testimonials.students.2.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.students.3.name'),
      course: t('testimonials.students.3.course'),
      quote: t('testimonials.students.3.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.students.4.name'),
      course: t('testimonials.students.4.course'),
      quote: t('testimonials.students.4.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.students.5.name'),
      course: t('testimonials.students.5.course'),
      quote: t('testimonials.students.5.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.students.6.name'),
      course: t('testimonials.students.6.course'),
      quote: t('testimonials.students.6.quote'),
      rating: 5,
    },
    {
      name: t('testimonials.students.7.name'),
      course: t('testimonials.students.7.course'),
      quote: t('testimonials.students.7.quote'),
      rating: 5,
    },
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        if (isRTL) {
          setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        } else {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length, isRTL])

  const nextTestimonial = () => {
    if (isRTL) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (isRTL) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  const getVisibleTestimonials = () => {
    const visibleCount = 3
    if (testimonials.length <= visibleCount) {
      return testimonials
    }
    return testimonials
  }

  return (
    <section className="py-16 sm:py-20 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="border-[#F95700] text-[#F95700] hover:bg-[#F95700] hover:text-white bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="border-[#F95700] text-[#F95700] hover:bg-[#F95700] hover:text-white bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonials carousel */}
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8"
            style={{ 
              transform: isRTL 
                ? `translateX(${currentIndex * (100 / 3)}%)` 
                : `translateX(-${currentIndex * (100 / 3)}%)`,
              direction: isRTL ? 'rtl' : 'ltr'
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#1E1E1E] border-[#333] hover:border-[#F95700] transition-all duration-300 flex-shrink-0 w-full md:w-1/3"
                style={{ minWidth: "calc(100% / 3 - 1rem)" }}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-[#F95700] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#AAAAAA] mb-4 italic text-sm sm:text-base flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="font-semibold text-[#F5F5F5] text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-[#F95700]">{testimonial.course}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#F95700]" : "bg-[#333]"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
