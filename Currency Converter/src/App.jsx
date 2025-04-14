import { useState , useEffect  } from 'react'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'
import Input from './components/Input'
import './App.css'

function App() {

  return (
    <>

      <h1 style={{fontSize:'40px',textAlign:'center',backgroundColor:'orange'}}>Currency Converter app</h1>
      <Input/>
    </>
  )
}

export default App
