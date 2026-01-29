"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['713-370-8709', '880-601-6078'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@vertexsteelandengineeringservices.com', 'vertexsteelservices@gmail.com'],
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['8 The Green, Suite B', 'Dover, DE-19901'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['7 AM - 3 PM', '3 PM - 11 PM'],
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to start your steel detailing project? Contact us today for a consultation and discover how we can bring precision to your construction needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
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
          className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Build with Precision?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Join industry leaders who trust Vertex Steel for their steel detailing needs. Let's create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-semibold text-base">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="font-semibold text-base bg-white/10 hover:bg-white/20 text-white border-white/30">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
