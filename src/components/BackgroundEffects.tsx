'use client'

import { useEffect, useState } from 'react'

export function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-noise">
      {/* Gradient orb 1 */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full bg-primary opacity-[0.03] blur-[120px]"
        style={{
          left: '10%',
          top: '20%',
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
        }}
      />

      {/* Gradient orb 2 */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent opacity-[0.03] blur-[120px]"
        style={{
          right: '5%',
          bottom: '15%',
          transform: `translate(${-(mousePosition.x - 0.5) * 40}px, ${-(mousePosition.y - 0.5) * 40}px)`,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
