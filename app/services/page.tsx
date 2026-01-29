'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Building2, Wrench, Boxes, Network, FileText, Ruler, Database, GitMerge, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Building2,
    title: 'Structural & Miscellaneous Steel Detailing',
    description: 'Comprehensive structural & Misc steel detailing for Commercial buildings, bridges, industrial facilities, Sports, Health care & Institutions with precision and accuracy.',
    features: [
      'Commercial & Industrial Buildings',
      'Bridges & Infrastructure',
      'Sports Stadiums',
      'Healthcare Facilities',
      'Institutional Projects'
    ],
    images: [
      '/images/miscellaneous/2.png',
      '/images/miscellaneous/4.png',
      '/images/miscellaneous/5.png',
      '/images/miscellaneous/6.png',
      '/images/miscellaneous/7.png',
     
    ]
  },
  {
    icon: Wrench,
    title: 'Fabrication & Erection Drawings',
    description: 'Detailed shop drawings and erection plans that ensure smooth fabrication and on-site assembly.',
    features: [
      'Detailed Shop Drawings',
      'Assembly Instructions',
      'Material Lists',
      'Erection Sequences',
      'Quality Control Plans'
    ],
    images: [
      '/images/fabrication/1.png',
      '/images/fabrication/2.png',
      '/images/fabrication/3.png',
      '/images/fabrication/4.png',
      
    ]
  },
  {
    icon: Boxes,
    title: 'Connection Design',
    description: 'Engineered connection designs that meet structural requirements and fabrication standards.',
    features: [
      'Moment Connections',
      'Shear Connections',
      'Bracing Connections',
      'Base Plate Design',
      'Splice Connections'
    ],
    images: [
      '/images/services/steel-deck-detail.png',
      '/images/services/roof-joist-detail.png',
      '/images/bim-model-3.png',
      '/images/gallery/steel-stairs-detail.jpg'
    ]
  },
  {
    icon: Ruler,
    title: 'Quantity Take-off',
    description: 'Accurate material quantification and cost estimation for steel structures.',
    features: [
      'Material Quantification',
      'Cost Estimation',
      'Bill of Materials',
      'Weight Calculations',
      'Procurement Support'
    ],
    images: [
      '/images/bim-model-1.png',
      // '/images/services/bim-structural-model.png',
      '/images/steel-stairs.jpg',
      '/images/shop-drawings.jpg'
    ]
  },
  {
    icon: Network,
    title: 'PEMB Steel Detailing',
    description: 'Pre-Engineered Metal Building detailing for industrial and commercial applications.',
    features: [
      'Primary Framing',
      'Secondary Members',
      'Wall & Roof Panels',
      'Accessories Detailing',
      'Anchor Bolt Plans'
    ],
    images: [
      '/images/Pemb/1.png',
      '/images/Pemb/2.png',
      '/images/Pemb/3.png',
      '/images/Pemb/4.png',
      '/images/Pemb/5.png',
      
    ]
  },
  {
    icon: GitMerge,
    title: 'BIM Co-ordination',
    description: 'Building Information Modeling coordination to eliminate clashes and ensure seamless construction.',
    features: [
      'Clash Detection',
      'Multi-Discipline Coordination',
      'Model Review',
      'Issue Resolution',
      '3D Visualization'
    ],
    images: [
      // '/images/gallery/4.png',
      '/images/gallery/5.png',
      '/images/gallery/6.png',
      // '/images/gallery/construction-workflow.jpg'
    ]
  },
  {
    icon: Database,
    title: 'Revit Co-ordination Model',
    description: 'Comprehensive Revit modeling services for integrated project delivery.',
    features: [
      'Structural Modeling',
      'Family Creation',
      'Model Coordination',
      'Documentation',
      'Quantity Extraction'
    ],
    images: [
      '/images/3.png',
      '/images/4.png',
      // '/images/services/structural-frame-colored.png',
      // '/images/gallery/steel-mezzanine-interior.jpg'
    ]
  },
]

function ServiceCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative group">
      <div className="relative h-80 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Comprehensive steel detailing solutions powered by expertise, precision, and cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <Card className="p-2 bg-card border-2 hover:border-primary/50 transition-all duration-300">
                      <ServiceCarousel images={service.images} />
                    </Card>
                  </div>

                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <Icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-3xl font-bold text-foreground mb-4 text-balance">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button size="lg" className="group">
                      Learn More
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
