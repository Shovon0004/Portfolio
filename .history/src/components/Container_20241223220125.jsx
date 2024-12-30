import React from 'react'
import { Canvas } from '@react-three/fiber'
impo

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
