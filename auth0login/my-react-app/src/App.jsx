import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const{user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  console.log("user curent ",user);


  return (
    <>
    {isAuthenticated && <h3>Hello {user.name}</h3>}
    { isAuthenticated ? 
      ( <button onClick={(e) => logout()}>Log out</button> ) 
      : ( <button onClick={ (e) => loginWithRedirect()}>Login wit redirect</button>)}
    </>
  )
}

export default App
