import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//old component
/*import {UseState, UseStateSecond} from '../oldComponent/UseState'
import UseReducer from '../oldComponent/UseReducer'
import UseEffect from '../oldComponent/UseEffect'
import UseRef from '../oldComponent/UseRef'
import LayoutEffect from '../oldComponent/UseLayoutEffect'
import UseContext from '../oldComponent/UseContext'
import UseMemo from '../oldComponent/UseMemo'*/App

//new component
import UseState from '../newComponent/useState'


function App() {
  return (
    <>
  
      {/*<UseState/> 
      <UseStateSecond/> 
      <UseReducer/> 
      <UseEffect/> 
      <UseRef/> 
      <LayoutEffect/> 
      <UseContext/> 
      <UseMemo/>*/}

      <UseState/>

    </>
  )
}

export default App
