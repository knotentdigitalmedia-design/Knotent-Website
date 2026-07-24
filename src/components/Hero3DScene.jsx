import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Text, Html } from '@react-three/drei'
import * as THREE from 'three'

// The revolving group of icons
function RevolvingIcons() {
  const groupRef = useRef()
  
  useFrame((state, delta) => {
    // Rotate the entire group slowly around the Y axis
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
    }
  })

  // Icons configuration
  const icons = [
    { label: 'ig', color: '#E1306C', position: [2.5, 1, 0] },
    { label: 'f', color: '#1877F2', position: [-2.5, 1, 0] },
    { label: 'G', color: '#EA4335', position: [0, 1.5, 2.5] },
    { label: 'SEO', color: '#333333', position: [0, 0.5, -2.5] },
    { label: 'ADS', color: '#000000', position: [1.8, -0.5, 1.8] },
    { label: 'AI', color: '#111111', position: [-1.8, -0.5, -1.8] }
  ]

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <group key={i} position={icon.position}>
          {/* Billboard behavior: we don't want them to billboard completely, but face outwards slightly */}
          <RoundedBox args={[1, 1, 0.2]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color={icon.color} roughness={0.2} metalness={0.8} />
          </RoundedBox>
          <Html
            position={[0, 0, 0.11]}
            transform
            occlude
            style={{
              color: 'white',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              fontWeight: 'bold',
              pointerEvents: 'none'
            }}
          >
            {icon.label}
          </Html>
        </group>
      ))}
    </group>
  )
}

function Stage() {
  return (
    <group position={[0, -2, 0]}>
      {/* Base cylinder */}
      <mesh receiveShadow>
        <cylinderGeometry args={[3, 3.2, 0.2, 64]} />
        <meshStandardMaterial color="#1a0000" roughness={0.8} metalness={0.2} />
      </mesh>
      {/* Glowing ring */}
      <mesh position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 2.9, 64]} />
        <meshBasicMaterial color="#ff0000" side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function Target() {
  return (
    <group position={[0, -1, 0]} rotation={[-Math.PI / 4, 0, 0]}>
      {/* Center red */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#F50615" roughness={0.4} />
      </mesh>
      {/* White ring */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>
      {/* Red ring */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial color="#F50615" roughness={0.4} />
      </mesh>
      {/* White ring outer */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[1.4, 1.4, 0.1, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>
      {/* Outer red ring */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[1.8, 1.8, 0.1, 32]} />
        <meshStandardMaterial color="#F50615" roughness={0.4} />
      </mesh>
    </group>
  )
}

function LightCone() {
  return (
    <mesh position={[0, 2.5, 0]} rotation={[0, 0, 0]}>
      <coneGeometry args={[3, 8, 32]} />
      <meshBasicMaterial 
        color="#ff0000" 
        transparent 
        opacity={0.15} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function Hero3DScene() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
      <Canvas camera={{ position: [0, 1, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[0, 6, 0]} 
          angle={0.5} 
          penumbra={0.5} 
          intensity={50} 
          color="#ff3333"
          castShadow 
        />
        <pointLight position={[5, 5, 5]} intensity={10} color="#ffffff" />
        
        <Stage />
        <Target />
        <LightCone />
        <RevolvingIcons />
      </Canvas>
    </div>
  )
}
