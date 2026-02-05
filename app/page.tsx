'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, MessageCircle, TrendingUp, Globe, Download, Smartphone } from 'lucide-react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppPreview from '@/components/AppPreview'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-dark">
      <Hero />
      <Features />
      <AppPreview />
      <Download />
      <Footer />
    </main>
  )
}
