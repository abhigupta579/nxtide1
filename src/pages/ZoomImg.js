import React ,{useCallback,useState} from 'react'
import Zoom from 'react-medium-image-zoom'

import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ZoomImg() {
   
        const [isZoomed, setIsZoomed] = useState(false)
      
        const handleZoomChange = useCallback(shouldZoom => {
          setIsZoomed(shouldZoom)
        }, [])

  return (
    <div><h1>ZoomImage...</h1>
         <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        alt="That wanaka tree, alone in the water near mountains"
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
        width="700"
      />
    </ControlledZoom>
    </div>
  )
};
