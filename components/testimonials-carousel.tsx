"use client"

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    quote: "Vertex Steel and Engineering Services delivered exceptional steel detailing for our commercial project. Their precision and attention to detail were outstanding, resulting in zero fabrication errors.",
    author: "Michael Anderson",
    position: "Project Manager",
    company: "BuildTech Construction",
    image: '/images/gallery/steel-building-modern.jpg',
  },
  {
    quote: "Working with Vertex has been a game-changer for our projects. Their BIM coordination and clash detection services saved us significant time and costs during construction.",
    author: "Sarah Johnson",
    position: "Chief Engineer",
    company: "Metropolitan Structures",
    image: '/images/gallery/steel-frame-blue.jpg',
  },
  {
    quote: "The team's expertise in structural steel detailing is unmatched. They consistently deliver fabrication-ready drawings that meet all industry standards and exceed our expectations.",
    author: "David Chen",
    position: "Director of Engineering",
    company: "Apex Steel Solutions",
    image: '/images/gallery/steel-structure-golden.jpg',
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading construction companies and fabricators worldwide
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].company}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="order-1 lg:order-2">
                <Quote className="h-16 w-16 text-primary mb-6" />
                <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="space-y-2">
                  <p className="text-xl font-bold text-primary">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-foreground font-semibold">
                    {testimonials[currentIndex].company}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrevious}
                    className="rounded-full hover:bg-primary hover:text-white transition-colors bg-transparent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    className="rounded-full hover:bg-primary hover:text-white transition-colors bg-transparent"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
