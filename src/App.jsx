import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypingTest from './components/TypingTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TypingTest/>
  )
}

export default App
