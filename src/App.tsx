import './App.css'
import Area from './Area'
import MainScreen from './MainScreen'
import Scene from './Scene'

function App() {

  return (
    <div className='grid'>
      <MainScreen />
      <Scene />
      <Area name="import"></Area>
      <Area name="integrations"></Area>
      <Area name="context"></Area>
    </div>
  )
}

export default App
