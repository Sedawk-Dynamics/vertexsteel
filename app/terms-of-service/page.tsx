'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function TermsOfServicePage() {
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
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms and conditions carefully before using our website and services.
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Vertex Steel and Engineering Services LLC ("we", "us", or "our"), concerning your access to and use of the https://www.vertexsteelandengineeringservices.com website (the "Site").
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Vertex Steel and Engineering Services LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 ml-6 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Use the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Attempt to decompile or reverse engineer any software</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Vertex Steel and Engineering Services LLC's website are provided on an 'as is' basis. Vertex Steel and Engineering Services LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Vertex Steel and Engineering Services LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vertex Steel and Engineering Services LLC's website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Accuracy of Materials */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Vertex Steel and Engineering Services LLC's website could include technical, typographical, or photographic errors. Vertex Steel and Engineering Services LLC does not warrant that any of the materials on its website are accurate, complete, or current. Vertex Steel and Engineering Services LLC may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vertex Steel and Engineering Services LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vertex Steel and Engineering Services LLC of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vertex Steel and Engineering Services LLC may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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
