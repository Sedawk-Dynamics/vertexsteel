'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Ready to start your steel detailing project? Contact us today and let's build something exceptional together.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      
      <Footer />
    </div>
  )
}
