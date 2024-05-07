import {GLTF, GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import Area from "./Area";
import { Dispatch, useEffect, useState } from 'react';

const loader = new GLTFLoader()

const importScene = () => {
  //const file = await pickFile()
  document.getElementById('import_scene')?.click()
}

const handleFile = async (files: FileList|null, setState: Dispatch<string>) => {
  const file = files?.[0]
  if(file) {
    const fileBuffer = await file.arrayBuffer()
    try {
    loader.parse(fileBuffer, '/', () => setState('imported file!'), (error) => setState(`${error}`))
    } catch(error) {
      setState(`${error}`)
    }
  } else {
    setState('failed to load file :(')
  }
}

function Import({setGLTF}:
  {setGLTF: Dispatch<GLTF|undefined>}) {

  const [importStatusText, setImportStatusText] = useState('choose a file')

  useEffect(() => {
    // load default scene
    loader.load('room.glb', (gltf) => {
      setGLTF(gltf)
    })
  }, [])

  return <Area name="import">
    <input type="file" id="import_scene" onChange={(event) => {
      handleFile(event.target.files, setImportStatusText)
    }}/>
    <span className="import-control">
      <button onClick={() => {
        setImportStatusText('picking file...')
        importScene()
      }}>import scene</button>
      <label>{importStatusText}</label>
    </span>
    
    <button>export current config</button>
  </Area>
}

export default Import