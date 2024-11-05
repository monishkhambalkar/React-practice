import React,  { useState, useRef } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [value, setValue] = useState(0);
  
  // increasing value whenever component is updating 
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   setCount(pre => pre + 1)
  // })


  // but we want only  increase count whenever dom event will be run
  const count = useRef(0);
  useEffect(()=>{
    count.current = count.current + 1;
  })


  const inputElem = useRef("");
  const btnClicked = () =>{
    console.log(inputElem.current.value) ;
  }


  return (
  <>
    <button onClick={() => {setValue(prev => prev - 1)}}> -1 </button>
    <h1>{value}</h1>
    <button onClick={() => {setValue(prev => prev + 1)}}> +1 </button>
    <h1>Render Count : {count.current}</h1>

    <input type="text" ref={inputElem}/>
    <button onClick={btnClicked}>Click Here</button>
  </>
  )
}

export default App
