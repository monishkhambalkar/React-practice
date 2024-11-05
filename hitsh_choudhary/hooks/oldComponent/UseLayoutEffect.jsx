import React, {useLayoutEffect, useEffect, useRef} from "react";

function LayoutEffect(){

    useLayoutEffect(()=>{
        console.log(divRef.current.value);
    },[])

    useEffect(()=>{
        divRef.current.value = "Hello";
    },[])

    return (
        <>
        <h1>useLayoutEffect</h1>
        <input type=" " name="" id="" value="TEST"/>
        </>
    )
}


export default LayoutEffect;