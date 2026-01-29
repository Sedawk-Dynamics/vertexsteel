"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const blogs = [
  {
    title: 'The Role of Structural Steel Design in Building Construction',
    excerpt: 'In modern construction, the choice of material directly impacts the longevity, safety, and efficiency of a building...',
    image: '/images/gallery/steel-structure-golden.jpg',
    category: 'Structural Design',
  },
  {
    title: 'How Expert Steel Detailing Accelerates Construction Success',
    excerpt: "In today's fast-paced construction environment, delivering complex projects on time and within budget requires precision...",
    image: '/images/gallery/steel-frame-blue.jpg',
    category: 'Steel Detailing',
  },
  {
    title: 'BIM Coordination: The Future of Steel Construction',
    excerpt: 'Building Information Modeling (BIM) has revolutionized the construction industry by enabling better collaboration and accuracy...',
    image: '/images/bim-modeling.jpg',
    category: 'Technology',
  },
]

export function NewsBlogs() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F2937] to-[#1E3A4C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">News And </span>
            <span className="text-primary">Blogs</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in steel detailing and construction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 hover:border-primary">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
