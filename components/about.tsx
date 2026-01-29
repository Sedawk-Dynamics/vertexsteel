"use client"

import { motion } from 'framer-motion'
import { CheckCircle2, Target, Eye, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  'Advanced BIM methodologies and best practices',
  'SDS/2, Tekla, AutoCAD & Revit expertise',
  'Clash-free, constructible drawings',
  'Industry standards compliance',
  'On-time project delivery',
  'Expert engineering team',
]

const companyValues = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide accurate, efficient, and standards-compliant steel detailing services that support seamless fabrication and construction.',
    color: 'bg-primary/10 border border-primary/20',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be a globally trusted steel detailing company, recognized for precision, innovation, and reliability.',
    color: 'bg-card border border-border',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuously adopting advanced tools and BIM methodologies to deliver superior results.',
    color: 'bg-primary/10 border border-primary/20',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance max-w-3xl mx-auto">
            Engineering Excellence Since Day One
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            At Vertex Steel and Engineering Services, we provide precise and reliable steel detailing services for structural and miscellaneous steel. Our team delivers fabrication-ready drawings that meet industry standards, ensuring accuracy, efficiency, and on-time project execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {companyValues.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`p-8 h-full hover:shadow-lg transition-all duration-300 ${item.color}`}>
                  <Icon className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="leading-relaxed opacity-90">{item.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3 bg-background p-4 rounded-lg"
            >
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
