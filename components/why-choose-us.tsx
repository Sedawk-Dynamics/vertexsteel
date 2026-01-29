"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Clock, Shield, Users, Award, Zap, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Efficient project delivery without compromising on quality or accuracy',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality control processes ensure error-free deliverables',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced engineers with deep industry knowledge and technical expertise',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Industry Standards',
    description: 'Full compliance with AISC, CISC, and international steel standards',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'Latest BIM tools and software for precise 3D modeling and detailing',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: '24/7 client support throughout the project lifecycle',
    color: 'from-indigo-500 to-blue-500',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Your Trusted Steel Detailing Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We combine technical excellence with exceptional service to deliver steel detailing solutions that exceed expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border-2 hover:border-primary">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon with animated background */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <div className="relative bg-gradient-to-br from-muted to-muted/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground relative z-10 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '15+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-card border-2 border-border hover:border-primary transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
