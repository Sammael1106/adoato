"use client";

import React, { useRef, useEffect, useState } from 'react'

export default function VideoPage () {
  const videoRef = useRef()

  useEffect(() => {
    const video = videoRef.current
    video.play()
    setTimeout(() => {
      if (!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2))
        video.controls = true
    }, 100)
  })

  return (
    <main style={{backgroundColor: 'white', display: 'flex', alignItems: 'center'}}>
      <video width="600" height="800" loop muted ref={videoRef} autoPlay>
        <source src="adoato_animation_final.mp4" type="video/mp4" />
      </video>
    </main>
  )
}
