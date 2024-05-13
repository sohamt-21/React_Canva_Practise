import { useState } from 'react'
import './App.css'
import Canva from './Components/Canva'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canva/>
    </>
  )
}

export default App
