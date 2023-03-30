/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 coin.gltf --transform
Author: rukitu (https://sketchfab.com/rukitu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/coin-d41feb2c10ed4c06ad4b8134ccaba516
Title: Coin
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Coin(props) {
  const { nodes, materials } = useGLTF('/coin-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0, -0.04]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.Cylinder015_Gold_0.geometry} material={materials.Gold} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/coin-transformed.glb')
