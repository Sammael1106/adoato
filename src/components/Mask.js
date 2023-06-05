import React, { useRef, useState, useEffect } from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'

import {
  useGLTF,
  useScroll,
  useTexture,
  useCursor
} from '@react-three/drei'


export default function Mask(props) {
  const { nodes, materials } = useGLTF('glb/atoado.glb');
  const scroll = useScroll()
  const maskRef = useRef()
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  useCursor(hovered)

  useEffect(() => {
    const scrollElement = document.getElementsByTagName('canvas')[0].nextSibling
    if (clicked) {
      scrollElement.scrollTo({ top: 2000, left: 0, behavior: 'smooth' })
    }
  })

  useFrame(() => {
    if (scroll) {
      if (scroll.scroll.current > 0.9) {
        maskRef.current.material.opacity = (9 / scroll.scroll.current) - 9
      } else {
        maskRef.current.material.opacity = 1
      }
    }
  })

  const [ao, color] = useTexture(['textures/Mask_AO.png', 'textures/Mask_Color.png'])
  ao.flipY = false
  color.flipY = false
  const material = new THREE.MeshStandardMaterial({
    roughnessMap: false,
    roughness: 0.2,
    aoMap: ao,
    aoMapIntensity: 1.5,
    map: color,
    metalness: 1,
    color: new THREE.Color(0xfed1ac),
    envMapIntensity: 0.8,
    transparent: true,
    opacity: 1
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={maskRef}
        castShadow
        receiveShadow
        geometry={nodes.LP.geometry}
        material={material}
        position={[0, 36.78, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={() => setClicked(true)}
        scale={1.16}/>
    </group>
  );
}

useGLTF.preload('glb/atoado.glb');