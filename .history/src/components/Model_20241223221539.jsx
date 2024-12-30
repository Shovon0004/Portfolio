

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/Model.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="bb57980ed1b9400a920cbf6dd7f551b4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.001']} skeleton={nodes.Object_16.skeleton} />
                    <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Material.002']} skeleton={nodes.Object_17.skeleton} />
                    <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.Material} skeleton={nodes.Object_19.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Model.glb')
