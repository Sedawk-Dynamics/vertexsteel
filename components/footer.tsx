"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-[#F6F8FB] via-[#EEF2F7] to-[#E6EBF2] text-slate-800 py-20 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <Image
              src="/images/vertex-logo.png"
              alt="Vertex Steel and Engineering Services"
              width={640}
              height={220}
              priority
              className="h-36 md:h-40 w-auto mb-6"
            />

            <p className="text-slate-600 mb-6 max-w-md leading-relaxed text-sm">
              Professional steel detailing services for structural and
              miscellaneous steel. We support fabricators and contractors with
              efficient, standards-compliant detailing solutions.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sales@vertexxsteelandengineeringservices.com"
                className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors"
              >
                <span className="p-2 bg-slate-200 rounded-lg">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm">
                  sales@vertexxsteelandengineeringservices.com
                </span>
              </a>

              <div className="flex items-center gap-3 text-slate-600">
                <span className="p-2 bg-slate-200 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm">United States</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-slate-900">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Structural Steel Detailing",
                "Miscellaneous Steel Detailing",
                "Fabrication & Erection Drawings",
                "Connection Design",
                "Quantity Take-off",
                "PEMB Steel Detailing",
                "BIM Coordination",
                "Revit Coordination Model",
              ].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Sectors Served */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-slate-900">
              Sectors Served
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Commercial Buildings",
                "Industrial",
                "Health Care",
                "Institutions",
                "Sports Stadiums",
                "Bridges",
              ].map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {currentYear} Vertex Steel and Engineering Services LLC. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            {[Linkedin, Facebook, Twitter].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-slate-200 hover:bg-primary hover:text-white rounded-lg transition-all"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
