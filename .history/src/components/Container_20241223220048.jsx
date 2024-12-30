import React from 'react'

export default function Container() {
  return (
      <Canvas>
          <Suspense fallback="loading">
              <Model />
              <OrbitControls  enableZo/>
              
          </Suspense>
    </Canvas>
  )
}
