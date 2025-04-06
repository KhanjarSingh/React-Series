
import Card from './components/Card'
import './App.css'

function App() {
    let Obj={
      username:"Parth",
      age:'18'
    }  

    let Arr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> TailWindcss Test</h1>
      <Card title="Cutie" myObj={Obj} newArray={[Arr]}/>
      <br/>
      <Card />
    </>
  )
}

export default App
