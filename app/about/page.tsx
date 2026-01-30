'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, Target, Eye, Zap, Award, Users, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const softwareLogos = [
  { name: 'SDS/2', image: '/images/logos/sds2-logo.png' },
  { name: 'Tekla', image: '/images/logos/tekla-logo.png' },
  { name: 'AutoCAD', image: '/images/logos/autocad-logo.png' },
  { name: 'Revit', image: '/images/logos/revit-logo.png' },
]

const features = [
  'Advanced BIM methodologies and best practices',
  'SDS/2, Tekla, AutoCAD & Revit expertise',
  'Clash-free, constructible drawings',
  'Industry standards compliance',
  'On-time project delivery',
  'Expert engineering team',
]

const companyValues = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide accurate, efficient, and standards-compliant steel detailing services that support seamless fabrication and construction.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be a globally trusted steel detailing company, recognized for precision, innovation, and reliability.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuously adopting advanced tools and BIM methodologies to deliver superior results.',
  },
]

const stats = [
  { icon: Award, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '50+', label: 'Expert Engineers' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
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
              About <span className="text-primary">Vertex Steel</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Engineering Excellence Since Day One - Delivering precision steel detailing solutions to clients worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Vertex Steel and Engineering Services, we provide precise and reliable steel detailing services for structural and miscellaneous steel. Our team delivers fabrication-ready drawings that meet industry standards, ensuring accuracy, efficiency, and on-time project execution.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our expertise lies in providing detailed, clash-free steel drawings that support efficient fabrication and erection. Quality, compliance, and technical excellence drive everything we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We leverage cutting-edge technology and a team of experienced engineers to deliver solutions that exceed client expectations across commercial buildings, industrial facilities, healthcare, institutions, sports stadiums, and bridges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96"
            >
              <Image
                src="/images/steel-building-construction.jpg"
                alt="Vertex Steel Engineering"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Innovation */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-card border-2 hover:border-primary/50">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Software We Use */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Software & Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We utilize industry-leading software platforms to deliver exceptional steel detailing solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareLogos.map((software, index) => (
              <motion.div
                key={software.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="p-8 h-56 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-500 bg-card border-2 hover:border-primary group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-32 w-full mb-4 flex items-center justify-center">
                    <Image
                      src={software.image || "/placeholder.svg"}
                      alt={software.name}
                      width={200}
                      height={80}
                      className="object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center font-medium relative z-10">Industry-Leading Software</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Expertise
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-background p-6 rounded-lg border-2 border-border hover:border-primary/50 transition-all duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
