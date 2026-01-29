"use client"

import { motion } from 'framer-motion'
import { FileText, Cog, CheckCircle2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Project Analysis',
    description: 'We review your structural drawings, specifications, and project requirements in detail',
  },
  {
    icon: Cog,
    number: '02',
    title: 'Detailed Engineering',
    description: 'Our experts create precise 3D models and fabrication-ready shop drawings using advanced BIM software',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Quality Review',
    description: 'Rigorous quality checks ensure clash-free, standards-compliant deliverables',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Final Delivery',
    description: 'Complete documentation delivered on time, ready for fabrication and construction',
  },
]

export function Process() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A streamlined, proven approach to delivering exceptional steel detailing services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 z-0" />
                )}

                <motion.div
                  whileHover={{ y: -15, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-card border-2 border-border rounded-2xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-500 group h-full"
                >
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 relative"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-colors" />
                    <div className="relative bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
