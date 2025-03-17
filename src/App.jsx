import { useState } from 'react'
import './App.css'
import './Component/Navbar'
import Navbar from './Component/Navbar'
import Artifacts from'./Component/Artifacts'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  )
}

export default App
