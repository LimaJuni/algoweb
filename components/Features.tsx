'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, MessageCircle, TrendingUp, Globe } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Real-time algorithmic explanations tailored to your learning pace and curiosity.'
  },
  {
    icon: Globe,
    title: 'Cultural Context',
    description: 'Complex CS concepts explained using familiar Cameroonian metaphors and landmarks.'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Visualize your mastery of data structures and algorithms with elegant analytics.'
  },
  {
    icon: MessageCircle,
    title: 'Interactive Chat',
    description: 'Step-by-step debugging sessions with your AI lecturer for instant feedback.'
  }
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Designed for <span className="text-primary">Mastery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn Computer Science with a tool that understands your context and speaks your language.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-2xl group hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <feature.icon size={32} className="text-primary group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
