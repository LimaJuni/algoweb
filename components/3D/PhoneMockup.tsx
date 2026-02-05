'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'

function Phone() {
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.051]}>
        <boxGeometry args={[0.85, 1.7, 0.01]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      
      {/* Screen content */}
      <mesh position={[0, 0.2, 0.052]}>
        <boxGeometry args={[0.7, 0.3, 0.001]} />
        <meshStandardMaterial color="#FF6B35" />
      </mesh>
      
      <mesh position={[0, -0.2, 0.052]}>
        <boxGeometry args={[0.6, 0.2, 0.001]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </Float>
  )
}

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -30 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-80 h-96"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Phone />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </motion.div>
  )
}
