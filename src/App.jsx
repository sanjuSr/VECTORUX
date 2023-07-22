import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vector from "./Vector";

import { Routes,Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

            <Route path="/" exact element={<Vector/>}></Route>

      </Routes>
    </>
  )
}

export default App
