import React from 'react';
import MainComponent from './components/MainComponent'
import LoginContextProvider from './components/LoginContextProvider';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <LoginContextProvider>
            <MainComponent/>
        </LoginContextProvider>
    </>
  )
}

export default App
