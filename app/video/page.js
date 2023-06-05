"use client";

import React, { useRef, useEffect, useState } from 'react'

export default function VideoPage () {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current)
    videoRef.current.play()
  })

  return (
    <main style={{backgroundColor: 'white', display: 'flex', alignItems: 'center'}}>
      <video width="600" height="800" autoPlay loop muted ref={videoRef}>
        <source src="adoato_animation_final.mp4" type="video/mp4"/>
      </video>
    </main>
  )
}