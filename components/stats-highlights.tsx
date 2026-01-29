"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { CheckCircle2, Users, Award, Clock, TrendingUp } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
  { number: '50+', label: 'Expert Detailers', color: 'from-orange-500 to-primary' },
  { number: '15+', label: 'Years Experience', color: 'from-primary to-red-500' },
]

const certifications = [
  { name: 'AISC', description: 'American Institute of Steel Construction' },
  { name: 'ISO 9001', description: 'Quality Management Certified' },
  { name: 'OSHA', description: 'Safety Standards Compliant' },
]

const serviceCards = [
  {
    title: 'Steel Detailing',
    description: 'Comprehensive structural and miscellaneous steel detailing services',
    image: '/images/gallery/steel-frame-blue.jpg',
    icon: CheckCircle2,
  },
  {
    title: 'BIM Coordination',
    description: 'Advanced 3D modeling with clash detection and coordination',
    image: '/images/gallery/steel-frame-render.jpg',
    icon: TrendingUp,
  },
  {
    title: 'Shop Drawings',
    description: 'Precise fabrication-ready drawings for efficient production',
    image: '/images/gallery/steel-stairs-detail.jpg',
    icon: Award,
  },
  {
    title: 'Connection Design',
    description: 'Engineered connection details ensuring structural integrity',
    image: '/images/gallery/steel-mezzanine-interior.jpg',
    icon: Users,
  },
  {
    title: 'Project Management',
    description: 'End-to-end coordination from design to delivery',
    image: '/images/gallery/construction-workflow.jpg',
    icon: Clock,
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality control and standards compliance',
    image: '/images/gallery/steel-structure-golden.jpg',
    icon: CheckCircle2,
  },
]

export function StatsHighlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`p-8 text-center relative overflow-hidden group border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl bg-gradient-to-br ${stat.color}`}>
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="text-5xl md:text-6xl font-bold text-white mb-3"
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-white/90 font-semibold text-lg">{stat.label}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Standards & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group bg-card">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{cert.name}</div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Key Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive steel detailing services delivered with precision and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl bg-card h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-primary/80 transition-all duration-500" />
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
