import { useState } from 'react'
import Negi from './negi'

function App() {
  const [count, setCount] = useState(0)
  let username = "pratham"
  return (
    <>
    <Negi/>
    <h1>Namaste Pratham - Welcome to React | sorry this is Vite not react {username}</h1>
    </>
  )
}
export default App
