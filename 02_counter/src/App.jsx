import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCount] = useState(10)

  // let counter = 50 ;
  const addVal = ()=> {
    if(counter < 20){
      counter++
      setCount(counter)
    }
    else 
    console.warn("value more than 20" , Math.floor(Math.random() * 100) , counter)
  }
  const remVal = ()=>{
    if(counter > 0){
      counter--
      setCount(counter)
    }
    else 
    console.warn("value less than zero" , Math.floor(Math.random() * 100) , counter)
  }

  return (
    <>
      <h1>Pratham Negi</h1>
      <h3>Counter value : {counter}</h3>
      <button onClick={addVal}>Add value  {counter}</button><br />
      <button onClick={remVal}>Remove value  {counter}</button>
    </>
  )
}

export default App
