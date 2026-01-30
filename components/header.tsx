"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Our Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm "
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-32">
          
      {/* LOGO */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center overflow-visible"
      >
        <Link href="/" className="block overflow-visible">
          <Image
            src="/images/vertex-logo.png"
            alt="Vertex Steel and Engineering Services"
            width={960}
            height={320}
            className="h-28 w-auto scale-200 origin-left cursor-pointer hover:opacity-90 transition-all 
                      mt-[15px] mb-0"
            priority
          />
        </Link>
      </motion.div>


          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {/* DOWNLOAD BROCHURE */}
              <a
                href="/brochure/vertex-brochure.pdf"
                download
                className="inline-flex"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold gap-2"
                >
                  <Download className="h-5 w-5" />
                  Brochure
                </Button>
              </a>

              {/* GET QUOTE */}
              <Link href="/contact">
                <Button size="lg" className="font-semibold">
                  Get Quote
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* MOBILE BROCHURE BUTTON */}
              <a href="/brochure/vertex-brochure.pdf" download>
                <Button size="lg" variant="outline" className="w-full gap-2">
                  <Download className="h-5 w-5" />
                  Download Brochure
                </Button>
              </a>

              <Link href="/contact">
                <Button size="lg" className="font-semibold w-full">
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
