import { useState } from 'react'
import './App.css'
import Context from './areas/Context'
import Import from './areas/Import'
import Integrations from './areas/Integrations'
import MainScreen from './areas/MainScreen'
import SceneSettings from './areas/SceneSettings'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

function App() {
  const [gltf, setGLTF] = useState<GLTF|undefined>()

  return (
    <div className='grid'>
      <MainScreen gltf={gltf}/>
      <SceneSettings />
      <Import setGLTF={setGLTF}/>
      <Integrations />
      <Context />
    </div>
  )
}

export default App
