"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const showcaseItems = [
  {
    title: "Structural Steel Shop Drawings",
    description:
      "Preparation of detailed shop drawings for beams, columns, bracings, trusses, and frames in accordance with project specifications and approved design documents.",
    image: "/images/steel-building-construction.jpg",
  },
  {
    title: "Erection Drawings & Assembly Sequencing",
    description:
      "Development of clear erection drawings with member identification, connection references, and sequencing to support efficient site installation.",
    image: "/images/steel-frame-3d.jpg",
  },
  {
    title: "Connection Design & Engineering Calculations",
    description:
      "Design and detailing of bolted and welded steel connections, including load-based calculations and coordination with delegated design requirements.",
    image: "/images/bim-model-1.png",
  },
  {
    title: "Miscellaneous & Secondary Steel Detailing",
    description:
      "Accurate detailing of stairs, ladders, handrails, platforms, embeds, gratings, and other secondary steel components integrated with the main structure.",
    image: "/images/steel-stairs.jpg",
  },
  {
    title: "BIM Modeling & Clash Detection",
    description:
      "Creation of intelligent 3D models using BIM workflows to identify interferences, improve coordination, and enhance constructability.",
    image: "/images/bim-model-2.png",
  },
  {
    title: "Steel Quantity Take-Offs & Estimation",
    description:
      "Extraction of precise material quantities, bolt lists, and connection data to support procurement, costing, and project planning.",
    image: "/images/bim-model-3.png",
  },
  {
    title: "Revision Control & As-Built Documentation",
    description:
      "Management of drawing revisions and preparation of as-built documentation reflecting site changes and final construction conditions.",
    image: "/images/bim-model-4.png",
  },
  {
    title: "Pre-Engineered / Metal Building (PEB / PEMB) Detailing",
    description:
      "Accurate detailing of primary frames, secondary members, bracing systems, and connections in coordination with manufacturer design and erection requirements.",
    image: "/images/steel-structure-sunset.jpg",
  },
]

export function Showcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* GRID ONLY — NO HEADINGS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent group-hover:from-primary/90 group-hover:via-black/70 transition-all duration-500" />
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-5 text-white"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
