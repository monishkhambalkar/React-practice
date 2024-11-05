import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items center bg-cover bg-no-repeat' 
    style={{background: `url(https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=3000)`}}>
      <h1 className='bg-red-200'>Vite + React</h1>
    </div>
  )
}

export default App
