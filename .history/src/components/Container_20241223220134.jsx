import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Model'

export default function Container() {
  return (
      <Canvas>
          <Suspense fallback="loading">
              <Model />
              <OrbitControls enableZoom={ false} />
              
          </Suspense>
    </Canvas>
  )
}
