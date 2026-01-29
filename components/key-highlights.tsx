"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const highlights = [
  {
    title: "Steel Detailing",
    image: "/images/gallery/steel-building-modern.jpg",
    points: [
      "Steel detailing is a critical part of the construction process that transforms engineering designs into accurate, fabrication-ready drawings.",
      "Our steel detailing services focus on accuracy, constructability, and compliance with project standards to support efficient and error-free construction.",
      "We provide clear and detailed information required for fabrication, assembly, and on-site erection.",
    ],
  },
  {
    title: "Connection Design & Delegated Design",
    image: "/images/7.png",
    points: [
      "We provide steel connection and delegated design services to support safe, efficient, and code-compliant structural solutions.",
      "Our scope includes the design and detailing of bolted and welded connections in coordination with project requirements and governing standards.",
      "Through close collaboration with engineers and fabricators, we deliver optimized, constructible connection designs that ensure structural integrity and smooth project execution.",
    ],
  },
  {
    title: "Miscellaneous Detailing",
    image: "/images/gallery/steel-stairs-detail.jpg",
    points: [
      "We offer specialized steel miscellaneous detailing services covering stairs, ladders, handrails, railings, platforms, embeds, and other secondary steel components.",
      "Our detailing ensures precise dimensions, proper connections, and compliance with project standards.",
      "With a focus on accuracy and constructability, we deliver fabrication-ready drawings that support efficient manufacturing and safe installation.",
    ],
  },
  {
    title: "Estimation / Quantity Take-off",
    image: "/images/gallery/construction-workflow.jpg",
    points: [
      "Our estimation includes detailed quantity take-offs, material assessments, and connection requirements based on project drawings and specifications.",
      "By delivering reliable and precise estimates, we support better cost control, efficient planning, and smooth project execution.",
    ],
  },
  {
    title: "Pre-Engineered Building",
    image: "/images/1.png",
    points: [
      "We provide pre-engineered steel building detailing services that support efficient, cost-effective, and high-quality construction solutions.",
      "Our scope includes accurate detailing for primary and secondary framing systems, connections, and components, sheeting in compliance with project specifications and applicable codes.",
      "With a focus on precision and coordination, we deliver fabrication-ready drawings that enable smooth manufacturing and fast on-site erection.",
    ],
  },
  {
    title: "Project Management",
    image: "/images/2.jpg",
    points: [
      "We offer dedicated project management services for steel detailing to ensure timely delivery, quality control, and effective coordination throughout the project lifecycle.",
      "Our team manages schedules, communication, and revisions while closely coordinating with clients, engineers, and fabricators.",
      "Through structured workflows and proactive management, we ensure accuracy, consistency and smooth execution from project kick-off to final delivery.",
    ],
  },
]

export function KeyHighlights() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B4A6F] to-[#164E63] relative overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Key Highlights
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setExpandedIndex(index)}
              onHoverEnd={() => setExpandedIndex(null)}
              className="relative group cursor-pointer"
            >
              <div className="relative h-[22rem] rounded-xl overflow-hidden border-4 border-white/20 hover:border-white/50 transition-all duration-500">

                {/* Image */}
                <Image
                  src={highlight.image || "/placeholder.svg"}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Default dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold">
                    {highlight.title}
                  </h3>
                </div>

                {/* Expanded Overlay */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="
                        absolute inset-0
                        bg-[#EA6A1A]/90
                        backdrop-blur-sm
                        p-6
                        flex flex-col
                        z-20
                      "
                    >
                      {/* Scrollable content */}
                      <div className="flex-1 overflow-y-auto pr-1">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {highlight.title}
                        </h3>

                        <ul className="space-y-3 pb-6">
                          {highlight.points.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-white/95 text-sm leading-relaxed flex items-start"
                            >
                              <span className="mr-2">•</span>
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Button area (ALWAYS VISIBLE) */}
                      <div className="pt-4 border-t border-white/30">
                        <Button
                          size="sm"
                          className="
                            bg-white
                            text-[#0B4A6F]
                            font-semibold
                            shadow-lg
                            hover:bg-white/90
                            transition-all
                            w-fit
                          "
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
