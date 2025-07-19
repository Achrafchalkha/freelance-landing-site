"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah El Mansouri",
    course: "English Language Course",
    quote:
      "Highway Academy transformed my English skills completely. The personalized attention and expert teaching methods helped me achieve my IELTS goals.",
    rating: 5,
  },
  {
    name: "Ahmed Benali",
    course: "Mathematics Tutoring",
    quote:
      "The mathematics support I received was exceptional. My grades improved dramatically, and I gained confidence in problem-solving.",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    course: "University Preparation",
    quote:
      "Thanks to Highway Academy, I was well-prepared for university. The comprehensive support made all the difference in my academic journey.",
    rating: 5,
  },
  {
    name: "Youssef Alami",
    course: "French Language Course",
    quote:
      "The French classes at Highway Academy are outstanding. The teachers are native speakers and the interactive approach made learning enjoyable and effective.",
    rating: 5,
  },
  {
    name: "Khadija Bennani",
    course: "TOEFL Preparation",
    quote:
      "I achieved my target TOEFL score thanks to the intensive preparation program. The mock tests and personalized feedback were incredibly helpful.",
    rating: 5,
  },
  {
    name: "Omar Rachid",
    course: "Business English",
    quote:
      "The Business English course helped me advance in my career. The practical approach and real-world scenarios prepared me for professional communication.",
    rating: 5,
  },
  {
    name: "Aicha Idrissi",
    course: "Academic Support",
    quote:
      "My daughter's grades improved significantly after joining Highway Academy. The teachers are patient, knowledgeable, and truly care about student success.",
    rating: 5,
  },
  {
    name: "Mehdi Tazi",
    course: "Conversation Club",
    quote:
      "The conversation clubs are fantastic! They helped me gain confidence in speaking English and made many new friends along the way.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="py-16 sm:py-20 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">What Our Students Say</h2>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what our students have to say about their experience at Highway
            Academy.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
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

          {/* Testimonials Carousel */}
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
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

          {/* Dots Indicator */}
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
