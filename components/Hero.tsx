'use client'

import { motion } from 'framer-motion'
import PhoneMockup from './3D/PhoneMockup'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Master Algorithms with Your{' '}
            <span className="text-primary">AI Lecturer</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg">
            Learn CS concepts with AlgoAI, your Cameroonian professor who explains complex algorithms through familiar cultural contexts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all"
              onClick={() => window.open('/apk/algotutor.apk', '_blank')}
            >
              📱 Download APK
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 glass px-8 py-4 rounded-xl font-bold text-lg opacity-70"
            >
              🍎 iOS Coming Soon
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
