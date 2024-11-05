import React from "react";
import { useState } from "react";

function UseState(){

    const [counter, setCounter] = useState(0);
    const [inputName, setInputName] = useState("");

    const increment = (e) => {
        setCounter(counter + 1);
    }

    const decrement = (e) =>{
        setCounter(counter - 1);
    }
    
    const inputHandler = (e) =>{
        let name = e.target.value;
        setInputName(name);
    }

    return (
        <>
            <h1>chai and react</h1>
            <h2>counter value : {counter}</h2>

            <button onClick={increment}> Add Value </button>
            <br />
            <button onClick={decrement}> remove Value </button>
            <hr />  

            <h1>Hello {inputName}</h1>
            <input type="text" placeholder="type your name" onKeyUp={inputHandler}/>
        </>
    )
}

function UseStateSecond(){
    const [number, setNumber] = useState(1);
    const [text, setText] = useState(false);
    const showText = text ? "this is even number" : "this is odd number";
    return (
        <>
            <h1>{number}</h1>
            <button type="button" 
            onClick={()=>{
                setNumber(number + 1);
                setText(!text);
            }}   
            >click me</button>
            <h1>{showText}</h1>
        </>
    )
}

export {UseState as UseState, UseStateSecond as UseStateSecond };
