/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 sneakerOne.glb
Author: LimitlessLions (https://sketchfab.com/LimitlessLions)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rtfkt-challenge-2-1dc7102864c747e9991f067ce62e8581
Title: RTFKT Challenge 2
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sneakerOne.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[1.57, 0, 0]} scale={100}>
        <group >
          <mesh geometry={nodes.Object_4.geometry} material={materials.NikeLogo} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['Quarter.005']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['Vamp.005']} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['mudGuard.005']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['outsole.005']} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['midsole.005']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials['laces.005']} />
          <mesh geometry={nodes.Object_11.geometry} material={materials['tongueLogo.005']} />
          <mesh geometry={nodes.Object_12.geometry} material={materials['tongue.005']} />
          <mesh geometry={nodes.Object_13.geometry} material={materials['heelCounter.005']} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['heelLogo.005']} />
          <mesh geometry={nodes.Object_15.geometry} material={materials['mustache.005']} />
          <mesh geometry={nodes.Object_16.geometry} material={materials['heelNotch.005']} />
          <mesh geometry={nodes.Object_17.geometry} material={materials['collar.005']} />
          <mesh geometry={nodes.Object_18.geometry} material={materials['eyestay.005']} />
          <mesh geometry={nodes.Object_19.geometry} material={materials['eyestay_2.005']} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.sole} />
          <mesh geometry={nodes.Object_21.geometry} material={materials['quarterInner.005']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sneakerOne.glb')
