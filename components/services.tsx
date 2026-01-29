"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Building2, Boxes, Network, Layers } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Structural & Miscellaneous Steel Detailing',
    description: 'Comprehensive structural & Misc steel detailing for Commercial buildings, bridges, industrial facilities, Sports, Health care & Institutions with precision and accuracy.',
  },
  {
    icon: Boxes,
    title: 'Fabrication Shop Drawings',
    description: 'Detailed fabrication-ready shop drawings that meet industry standards and ensure efficient manufacturing processes.',
  },
  {
    icon: Network,
    title: 'Connection Design',
    description: 'Expert connection design services ensuring structural integrity and compliance with engineering specifications.',
  },
  {
    icon: Layers,
    title: 'BIM & PEMB Detailing',
    description: 'Advanced BIM-based steel detailing and Pre-Engineered Metal Building (PEMB) services using cutting-edge software.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Steel Detailing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine engineering expertise with advanced detailing tools to produce reliable, standards-compliant steel drawings you can build with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 hover:border-primary group relative overflow-hidden bg-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300 relative z-10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-foreground relative z-10 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
