import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = ()=>{
    setCounter(counter + 1)
    console.log(counter)
  }

  const subValue = ()=>{
    if (counter>0)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Parth and React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={subValue}>Sub Value</button>
    </>
  )
}

export default App
