'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const screenshots = [
  {
    title: 'Personalized Chat',
    description: 'AI lecturer explains algorithms with local context',
    image: '/images/chat-screenshot.png'
  },
  {
    title: 'Code Editor',
    description: 'Built-in mobile compiler for instant testing',
    image: '/images/editor-screenshot.png'
  },
  {
    title: 'Progress Analytics',
    description: 'Track your mastery across different topics',
    image: '/images/analytics-screenshot.png'
  }
]

export default function AppPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Experience the <span className="text-primary">Interface</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how AlgoTutor makes complex algorithms simple and engaging
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              className="group perspective-1000"
            >
              <div className="relative">
                <div className="aspect-[9/16] bg-gray-900 rounded-[2rem] p-2 shadow-2xl group-hover:shadow-primary/20 transition-all">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-orange-200 rounded-[1.5rem] flex items-center justify-center">
                    <div className="text-center text-gray-700">
                      <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        📱
                      </div>
                      <p className="font-medium">{screenshot.title}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
