import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function Login(){

    const {setUserName} = useContext(AppContext);

    return(
        <>
            <h1>Login</h1>
            <input type="text" name="" id="" onChange={(e)=>{
                setUserName(e.target.value);
            }}/>
        </>
    )
    
}


export default Login;