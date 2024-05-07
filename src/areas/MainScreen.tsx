import { useEffect, useRef } from 'react';
import {Scene, Camera, WebGLRenderer, ACESFilmicToneMapping} from 'three'
import Area from "./Area";
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const defaultScene = new Scene()
let camera: Camera

function MainScreen({gltf}: {gltf?: GLTF}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if(canvasRef.current !== null) {
      const renderer = new WebGLRenderer({canvas: canvasRef.current})
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
      renderer.toneMapping = ACESFilmicToneMapping
      renderer.toneMappingExposure = 0.03
      const animate = () => { 
        if(camera) { 
          renderer.render(defaultScene, camera)
        }
        requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [canvasRef])

  useEffect(() => {
    defaultScene.clear()
    if(gltf) {
      defaultScene.add(gltf.scene)
      camera = gltf.cameras[0]
    }
  }, [gltf])

  return <Area name="main-screen"><canvas ref={canvasRef}></canvas></Area>
}

export default MainScreen