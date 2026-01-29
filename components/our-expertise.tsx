"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const expertiseItems = [
  {
    title: 'Steel Building Construction',
    description: 'Preparation of detailed shop drawings for beams, columns, bracings, trusses, and frames in accordance with project specifications and approved design documents.',
    image: '/images/gallery/steel-building-modern.jpg',
    category: 'Structural Steel Shop Drawings',
  },
  {
    title: '3D BIM Modeling',
    description: 'Creation of intelligent 3D models using BIM workflows to identify interferences, improve coordination, and enhance constructability.',
    image: '/images/bim-model-1.png',
    category: 'BIM Modeling & Clash Detection',
  },
  {
    title: 'Structural Detailing',
    description: 'Development of clear erection drawings with member identification, connection references, and sequencing to support efficient site installation.',
    image: '/images/gallery/steel-frame-render.jpg',
    category: 'Erection Drawings & Assembly Sequencing',
  },
  {
    title: 'Steel Frame Engineering',
    description: 'Design and detailing of bolted and welded steel connections, including load-based calculations and coordination with delegated design requirements.',
    image: '/images/gallery/steel-frame-blue.jpg',
    category: 'Connection Design & Engineering Calculations',
  },
  {
    title: 'Precision Fabrication',
    description: 'Accurate detailing of stairs, ladders, handrails, platforms, embeds, gratings, and other secondary steel components integrated with the main structure.',
    image: '/images/gallery/steel-mezzanine-interior.jpg',
    category: 'Miscellaneous & Secondary Steel Detailing',
  },
  {
    title: 'Long Span Structures',
    description: 'Extraction of precise material quantities, bolt lists, and connection data to support procurement, costing, and project planning.',
    image: '/images/bim-model-4.png',
    category: 'Steel Quantity Take-Offs & Estimation',
  },
  {
    title: 'Complete Building Systems',
    description: 'Management of drawing revisions and preparation of as-built documentation reflecting site changes and final construction conditions.',
    image: '/images/gallery/construction-workflow.jpg',
    category: 'Revision Control & As-Built Documentation',
  },
  {
    title: 'Construction Excellence',
    description: 'Accurate detailing of primary frames, secondary members, bracing systems, and connections in coordination with manufacturer design and erection requirements.',
    image: '/images/gallery/steel-structure-golden.jpg',
    category: 'Pre-Engineered / Metal Building (PEB / PEMB) Detailing',
  },
]

export function OurExpertise() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            From Design to Delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            We leverage structural technology and proven methodologies to deliver exceptional steel detailing services across all project phases.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group relative overflow-hidden rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-2xl transition-all duration-500 h-[320px]">
                <div className="relative h-full w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-primary/95 group-hover:via-primary/80 transition-all duration-500" />
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-balance group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed text-pretty line-clamp-3 group-hover:text-white transition-colors">
                    {item.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <p className="text-xs font-semibold text-white/80 group-hover:text-white uppercase tracking-wide">
                      {item.category}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
