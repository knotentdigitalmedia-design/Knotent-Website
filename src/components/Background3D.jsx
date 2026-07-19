import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import * as THREE from 'three'

function Starfield() {
  const ref = useRef()
  const count = 4000
  
  // Create a circular texture
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const context = canvas.getContext('2d')
    context.beginPath()
    context.arc(32, 32, 30, 0, Math.PI * 2)
    context.fillStyle = '#FFFFFF'
    context.fill()
    return new THREE.CanvasTexture(canvas)
  }, [])

  // Generate random points in a sphere
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 * Math.cbrt(Math.random()) // radius
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [count])

  // Track scroll position using a ref to prevent React re-renders on every scroll pixel
  const scrollY = useRef(0)
  
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    // Constant slow rotation
    ref.current.rotation.x -= delta / 30
    ref.current.rotation.y -= delta / 40
    
    // Smoothly interpolate scroll-based movement (Parallax)
    const targetY = scrollY.current * 0.001
    const targetRotZ = scrollY.current * 0.0005
    
    ref.current.position.y += (targetY - ref.current.position.y) * 0.1
    ref.current.rotation.z += (targetRotZ - ref.current.rotation.z) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture}
        size={0.015}
        color="#F50615"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  )
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <fog attach="fog" args={['#000000', 1, 5]} />
        <Starfield />
      </Canvas>
    </div>
  )
}
