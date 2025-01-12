import React from 'react'
import { useState } from 'react'
import Api from './components/api'

export default function App() {
  const [count , setCount] = useState(0)
  function reset(){
    setCount(0)
  }
  return (
    <>
      <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>plus +</button>
      <button onClick={()=>setCount(count - 1)}>plus -</button>
      <button onClick={reset}>rest</button>
    </div>

    <Api/>
    </>
  

  )
}
