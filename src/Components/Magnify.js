import React from 'react'
import './Magnify.css';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from '@ricarso/react-image-magnifiers';



export default function Magnify() {
  
  return (
    <div>
          <GlassMagnifier
  imageSrc="https://shayariraja.com/wp-content/uploads/2023/06/girls-Dp-by-shayariraja-32-1024x1024.jpg"
  imageAlt="Example"
className='imgMag'
/>
<GlassMagnifier
  imageSrc="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH"
  imageAlt="Example"
className='imgMag2'
/>
<Magnifier
  imageSrc="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
  imageAlt="Example"
  largeImageSrc="./large-image.jpg" // Optional
  mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
  touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
  className='imgMag2'
/>
    </div>
  )
}
