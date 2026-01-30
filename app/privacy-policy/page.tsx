'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vertex Steel and Engineering Services LLC ("Company", "we", "our", or "us") operates the website https://www.vertexsteelandengineeringservices.com (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Personal Data:</strong> Contact information you provide through contact forms, including name, email, phone number, and company details.</span>
                </li>
                <li className="text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Usage Data:</strong> Information about how you access and use the Site, including IP address, browser type, pages visited, and time spent on pages.</span>
                </li>
                <li className="text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our Site and hold certain information.</span>
                </li>
              </ul>
            </div>

            {/* Use of Data */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Use of Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vertex Steel and Engineering Services LLC uses the collected data for various purposes:
              </p>
              <ul className="space-y-2 ml-6 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To provide and maintain our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To notify you about changes to our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To allow you to participate in interactive features of our Site</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To provide customer support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To gather analysis or valuable information so that we can improve our Service</span>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Security of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mt-3">
                Email: sales@vertexsteelandengineeringservices.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
