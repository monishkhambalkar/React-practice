import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]   = useState(1);
  // const result = factorial(counter);   // this function will take time if we do heavy functionality

  // so for that we can use useMemo
  const result = useMemo(()=>{
    return  factorial(counter); 
  }, [counter])

  const [name, setName] = useState("");

  return (
    <>
      <div>
        <h1>Factorial of {counter} is :  <span> {result} </span></h1>
        <div>
          <button onClick={()=>setCounter(counter - 1)}>Decrease</button>
          <button onClick={()=>setCounter(counter + 1)}>Increase</button>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <label htmlFor="">Enter Name</label>
        </div>
        <input type="text" name={name} id="" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <p>{`My name is ${name}`}</p>
      </div>
    </>
  )

}

function  factorial(n){
  let i = 0;
  while (i < 200000000) i++;
  if(n < 0){
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n -1);
}

export default App
