import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h2>inside custom function in Vite</h2>
    </div>
  )
}

// const reactElement = {
//     type : "a" , 
//     props : {
//         href: "https://google.com",
//         target : "_blank"
//     },
//     children : "click me to visit gugal"
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit gugal</a>
)

const reactElement = React.createElement(
  "a" ,
  {href : "https://youtube.com" , target : "_blank"},
  "mujhe dabao"
)

createRoot(document.getElementById('root')).render(
  <App />
)
