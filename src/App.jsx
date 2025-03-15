import { useState } from 'react'
import './App.css'
import './Component/Navbar'
import Navbar from './Component/Navbar'
import Artifacts from'./Component/Artifacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Artifacts></Artifacts>
    </>
  )
}

export default App
