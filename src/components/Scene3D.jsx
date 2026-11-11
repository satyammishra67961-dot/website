import React, { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function ParallaxGroup({ children }) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    const { x, y } = state.pointer
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, x * 0.28, 3, delta)
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -y * 0.22, 3, delta)
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, x * 0.35, 3, delta)
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, -y * 0.25, 3, delta)
  })
  return <group ref={ref}>{children}</group>
}

function GlassShape({ position, scale = 1, color = '#a78bfa', speed = 1, geometry = 'ico' }) {
  const mesh = useRef()
  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.12 * speed
    mesh.current.rotation.y += delta * 0.16 * speed
  })
  return (
    <Float speed={1.4 * speed} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry === 'ico' && <icosahedronGeometry args={[1, 0]} />}
        {geometry === 'torus' && <torusGeometry args={[0.8, 0.3, 24, 48]} />}
        {geometry === 'octa' && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          roughness={0.18}
          metalness={0.35}
          transparent
          opacity={0.62}
          flatShading
        />
      </mesh>
    </Float>
  )
}

function Orb({ position, scale = 1, color = '#8b5cf6' }) {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.28} />
      </mesh>
    </Float>
  )
}

function Particles({ count = 260 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color="#c4b5fd" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[6, 6, 6]} intensity={40} color="#a78bfa" />
      <pointLight position={[-6, -4, 4]} intensity={30} color="#60a5fa" />
      <ParallaxGroup>
        <GlassShape position={[-4.4, 1.7, -1]} scale={1.15} color="#8b5cf6" geometry="ico" speed={1.1} />
        <GlassShape position={[4.6, 1.2, -2]} scale={0.9} color="#60a5fa" geometry="torus" speed={0.9} />
        <GlassShape position={[3.9, -2.1, -1]} scale={1} color="#c4b5fd" geometry="octa" speed={1.3} />
        <GlassShape position={[-3.9, -2.3, -2]} scale={0.7} color="#f472b6" geometry="ico" speed={1} />
        <Orb position={[5.6, -1.4, -3]} scale={1.6} color="#8b5cf6" />
        <Orb position={[-5.8, 0.6, -3]} scale={1.9} color="#60a5fa" />
        <Particles count={260} />
      </ParallaxGroup>
    </>
  )
}

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) return null
    return this.props.children
  }
}

export default function Scene3D() {
  const supportsWebGL = useMemo(() => {
    if (typeof window === 'undefined') return false
    try {
      const canvas = document.createElement('canvas')
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
    } catch {
      return false
    }
  }, [])

  if (!supportsWebGL) return null

  return (
    <div className="hero-canvas" aria-hidden="true">
      <CanvasErrorBoundary>
        <Canvas
          dpr={[1, 1.6]}
          camera={{ position: [0, 0, 9], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  )
}
