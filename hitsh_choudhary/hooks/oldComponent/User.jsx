import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function User(){

    const {userName} = useContext(AppContext);

    return(
        <>
            <h1>User : {userName}</h1>
        </>
    )
    
}


export default User;