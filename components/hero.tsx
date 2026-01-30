"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

const backgroundImages = [
  "/images/steel-building-construction.jpg",
  "/images/steel-frame-3d.jpg",
  "/images/steel-structure-sunset.jpg",
  "/hero-steel.jpg",
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // 5s per slide

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 mt-[40px] bg-gradient-to-r from-white via-slate-50 to-slate-100">

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — TEXT (50%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight mt-[39]">
              Building Excellence Through{" "}
              <span className="text-primary">Precision</span> Detailing
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              We provide accurate, efficient, and standards-compliant steel detailing services
              that support seamless fabrication and construction using advanced BIM technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link href="/contact">
                <Button size="lg" className="font-semibold text-base group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base bg-white/80 backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </Link>
            </div>

            {/* STATS
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground mt-1">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Support Available</div>
              </div>
            </div> */}
          </motion.div>

          {/* RIGHT — IMAGE SLIDESHOW (50%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl mt-[-130]"
          >
            {/* Image slideshow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={backgroundImages[currentImageIndex]}
                  alt="Steel Structure"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
