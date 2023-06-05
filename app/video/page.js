"use client";

import React, { useRef, useEffect, useState } from 'react'

export default function VideoPage () {
  const videoRef = useRef()

  useEffect(() => {
    const video = videoRef.current
    var promise = video.play();

    if (promise !== undefined) {
      promise.then(_ => {
        // Autoplay started
      }).catch(error => {
        // Autoplay not allowed
        // Mute video and try to play again
        video.muted = true;
        video.play();
      });
    }
  })

  return (
    <main style={{backgroundColor: 'white', display: 'flex', alignItems: 'center'}}>
      <video width="600" height="800" autoPlay loop muted ref={videoRef}>
        <source src="adoato_animation_final.mp4" type="video/mp4"/>
      </video>
    </main>
  )
}