"use client";

import React, { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three';
import { useControls } from 'leva'
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { Canvas, useFrame, useThree } from '@react-three/fiber'

import {
  Center,
  useScroll,
  Environment,
  Image,
  ScrollControls,
  OrbitControls,
  Sparkles,
  useProgress,
  Html,
  Plane
} from '@react-three/drei'

import { Perf } from 'r3f-perf';
import gsap from 'gsap'

import Mask from 'src/components/Mask'
import Gems from 'src/components/Gems_spread'

export default function Home() {
  // const { focusDistance, focalLength, bokehScale, fogNear, fogFar } = useControls({
  //   focusDistance: { value: 0.24, min: 0, max: 2, step: 0.001 },
  //   focalLength: { value: 0.3, min: 0, max: 1, step: 0.001 },
  //   bokehScale: { value: 6, min: 0, max: 10, step: 1 },
  //   fogNear: {value: 26, min: -100, max: 100},
  //   fogFar: {value: 8, min: -100, max: 100}
  // })

  const { focusDistance, focalLength, bokehScale, fogNear, fogFar } = {
    focusDistance: 0.24,
    focalLength: 0.3,
    bokehScale: 6,
    fogNear: 26,
    fogFar: 8,
  }

  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <main>
      <Canvas shadows dpr={[1, 2]}
              camera={{ position: [0, 0, 100], fov: 50, zoom: 1.8, near: 10, far: 200 }}
              >
        <Loader progress={progress} />
        <Suspense fallback={null}>
          <color attach="background" args={['black']} />
          <fog attach="fog" args={['black', fogNear, fogFar]} />

          <ScrollControls page={0} >
            <Scene loaded={loaded === total} />
          </ScrollControls>
        </Suspense>
        {/* <OrbitControls /> */}
        {/* <Perf /> */}
      </Canvas>
    </main>
  )
}

function Scene({loaded}) {
  const { camera } = useThree()
  const gemsGroupRef = useRef()
  const maskGroupRef = useRef()
  const logoRef = useRef()
  const sparklesRef = useRef()
  const scroll = useScroll()

  useFrame((state, delta) => {
    if (maskGroupRef.current && scroll) {
      gemsGroupRef.current.rotation.y += delta / 10
      gemsGroupRef.current.position.z = scroll.scroll.current * 40
      maskGroupRef.current.rotation.y = Math.PI * scroll.scroll.current
      if (scroll.scroll.current > 0.90) {
        logoRef.current.material.opacity = 10 - (9 / scroll.scroll.current)
      } else {
        logoRef.current.material.opacity = 0
      }
    }
  })

  useEffect(() => {
    if (loaded) {
      gsap.to(camera.position, {
        z: 40,
        duration: 2,
        ease: "power4.out",
        delay: 0.2
      });
      gsap.to(gemsGroupRef.current.position, {
        z: 0,
        duration: 2,
        ease: "power4.out",
        delay: 0.2
      });
    }
  })

  return <>
    <group ref={sparklesRef} position={[0,0,15]}>
      <Sparkles count={200} scale={20} size={6} speed={0.4} color={'pink'} opacity={1} />
    </group>
    <Center position={[0, 0.8, -15]}>
      <group ref={maskGroupRef} >
        <Mask scale={0.25} />
      </group>
    </Center>
    <group ref={gemsGroupRef} rotation={[Math.PI/2, 0, 0]} position={[0,0,-40]}>
      <Gems scale={0.1} position={[0,15,0]} />
      <Gems scale={0.1} position={[0,22,0]} />
    </group>
    <Image ref={logoRef} url="ADOATO_LOGO_black.png" scale={[9.5, 14.5, 0]} transparent={true} opacity={0} position={[0,-0.75,-11]}/>
    <Environment resolution={32} files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/drackenstein_quarry_1k.hdr"/>
    <directionalLight intensity={2} position={[0, -10, -10]} color={'red'}/>
    <directionalLight intensity={1} position={[0, 10, 10]} color={'brown'}/>
  </>
}

function Loader({progress}) {
  const { clock } = useThree()
  return <Html center className={`progress-overlay ${progress === 100 ? 'loaded' : 'in-progress'}`} zIndexRange={1000}>
    <div className='progress' style={{width:`${clock.elapsedTime > 0 ? progress : 0}%`}}></div>
  </Html>
}