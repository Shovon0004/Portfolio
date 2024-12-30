import React from 'react'

export default function Container() {
  return (
      <Canvas>
          <Suspense fallback={null}></Suspense>
    </Canvas>
  )
}
