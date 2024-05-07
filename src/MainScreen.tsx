import { useEffect, useRef } from 'react';
import {Scene, Camera, WebGLRenderer, ACESFilmicToneMapping} from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import Area from "./Area";

const scene = new Scene()
let camera: Camera
const loader = new GLTFLoader()
loader.load('room.glb', (gltf) => {
  console.log('loaded')
  scene.add(gltf.scene)
  camera = gltf.cameras[0]
  console.log(gltf)
})

function MainScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if(canvasRef.current !== null) {
      const renderer = new WebGLRenderer({canvas: canvasRef.current})
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
      renderer.toneMapping = ACESFilmicToneMapping
      renderer.toneMappingExposure = 0.03
      const animate = () => { 
        if(camera) { 
          renderer.render(scene, camera)
          requestAnimationFrame(animate) 
        }
      }
      requestAnimationFrame(animate)
    }
  }, [canvasRef])

  return <Area name="main-screen"><canvas ref={canvasRef}></canvas></Area>
}

export default MainScreen