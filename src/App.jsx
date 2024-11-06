/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unknown-property */
 
 
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import "./App.css"
import { Robot } from './components/Robot'
import { Suspense, useState } from 'react'
 
function App() {
 const[play,setplat]=useState(true);

 const playhandle=()=>{
  setplat(!play)
 }

  return (
    <div className='App h-full w-full bg-black'>
       <Canvas  camera={{ fov: 15, position: [0, 0, 10]}} >
        
        {/* <axesHelper />
     
        <gridHelper args={[40,40]}/> */}
       <ambientLight />
       <directionalLight position={[0,0,2]} />
     
     
      <OrbitControls />
     <Suspense>
        <Robot play={play} position={[0,-1,0]} />
     </Suspense>
      
    </Canvas>
    <div>
      <button className={` ${play? `bg-blue-400 `:`bg-red-500`} text-white ml-4 rounded-xl p-2 absolute top-[89vh]`} onClick={playhandle}>
        {console.log(play)}
        {play ?" play ":" stop"}
      </button>
    </div>
    </div>
  )
}

export default App
