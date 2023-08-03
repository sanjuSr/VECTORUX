import { useState } from 'react'

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
