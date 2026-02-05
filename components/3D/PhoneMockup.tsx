'use client'

import { motion } from 'framer-motion'

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -30 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-80 h-96 flex items-center justify-center"
    >
      <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden flex flex-col">
          <div className="h-6 w-32 bg-gray-900 mx-auto rounded-b-2xl relative z-10" />
          
          <div className="flex-1 p-4 space-y-4 bg-gradient-to-br from-orange-50 to-white">
            <div className="glass p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <span className="text-sm font-medium">AlgoAI</span>
              </div>
              <p className="text-xs text-gray-600">Explain Binary Search using Mokolo Market...</p>
            </div>
            
            <div className="bg-primary/10 p-3 rounded-lg ml-8">
              <p className="text-xs">It's like finding a stall in the center of the market!</p>
            </div>
            
            <div className="glass p-3 rounded-lg">
              <div className="w-full h-16 bg-primary/20 rounded mb-2 flex items-center justify-center">
                <span className="text-primary text-2xl">📊</span>
              </div>
              <p className="text-xs">O(log n) visualization</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
