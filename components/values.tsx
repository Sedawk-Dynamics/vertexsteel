"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Target, Shield, Users, Lightbulb, Handshake, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision & Quality',
    description: 'We uphold the highest standards of accuracy and quality in every detail we produce, ensuring constructible and dependable outputs.',
  },
  {
    icon: Shield,
    title: 'Integrity & Accountability',
    description: 'We conduct our business with honesty, transparency, and responsibility, honoring our commitments to clients and partners.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We prioritize client needs by delivering responsive, customized solutions that contribute to project success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Technology',
    description: 'We continuously adopt advanced tools, BIM methodologies, and best practices to improve efficiency and stay ahead in the industry.',
  },
  {
    icon: Handshake,
    title: 'Collaboration & Teamwork',
    description: 'We believe in strong coordination with clients, engineers, and fabricators to achieve clarity and efficiency across all project stages.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We foster a culture of learning, improvement, and professional growth to consistently enhance our services.',
  },
]

export function Values() {
  return (
    <section id="values" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Built on Strong Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our values guide every decision we make and every project we deliver, ensuring excellence in all aspects of our work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
