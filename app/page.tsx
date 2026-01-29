import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { OurExpertise } from '@/components/our-expertise'
import { KeyHighlights } from '@/components/key-highlights'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Process } from '@/components/process'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { Showcase } from '@/components/showcase'
import { NewsBlogs } from '@/components/news-blogs'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OurExpertise />
      <KeyHighlights />
      <WhyChooseUs />
      <Process />
      <TestimonialsCarousel />
      <Showcase />
      <NewsBlogs />
      <ContactForm />
      <Footer />
    </main>
  )
}
