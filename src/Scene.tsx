import Area from "./Area";

function Scene() {
  return <Area name="scene">
    <button>toggle camera</button>
    <button>toggle time of day</button>
    <button>exclusive fullscreen</button>
    <button>fullscreen window</button>
  </Area>
}

export default Scene