import {useState , useCallback, useEffect , useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str+='0123456789'
    if (charAllowed) str += "!@#$%^&*-_+={}[]:;<.>,?"


    for (let i=1; i<=length;i++){
      let char=  Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  } , [length, numberAllowed, charAllowed , setPassword])


  useEffect(()=>{
      passwordGenerator()
  },[length, charAllowed, numberAllowed , passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    alert('Password Copied')
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
        <div className='w-full h-full max-w-2xl mx-auto shadow-md rounded-lg px-6 py-5 my-20 text-orange-300 bg-gray-800'>
<h1 className='text-white text-center mb-7'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5' > 
          <input type='text' 
          value={password} 
          className='outline-none w-full py-3 px-4 text-lg bg-white text-black' 
          placeholder='password'
          ref={passwordRef}
          readOnly/>
          <button className='outline-none bg-blue-700 text-white px-7 py-6 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div>
        <div className='flex items-center text-base gap-x-3 py-4'>
          <input  
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
          />
          <label className='pd-1'>Length:{length}</label>
          </div>

          <div className='flex items-center text-base gap-x-3 py-4'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberinput'
            onChange={()=>setNumberAllowed(true)}
          />
          <label className='pd-1'>Numbers</label>
          </div>

          <div className='flex items-center text-base gap-x-3 py-4'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='numberinput'
            onChange={()=>setCharAllowed(true)}
          />
          <label className='pd-1'>Characters</label>
          </div>
        </div>
    </div>
  )
}

export default App
