import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Starfield() {
  const ref = useRef()
  const count = 4000
  
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

  // Track scroll position using vanilla JS since we are in the R3F loop
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    // Constant slow rotation
    ref.current.rotation.x -= delta / 30
    ref.current.rotation.y -= delta / 40
    
    // Smoothly interpolate scroll-based movement (Parallax)
    const targetY = scrollY * 0.001
    const targetRotZ = scrollY * 0.0005
    
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
        size={0.012}
        color="#F50615"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  )
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <fog attach="fog" args={['#000000', 1, 5]} />
        <Starfield />
      </Canvas>
    </div>
  )
}
