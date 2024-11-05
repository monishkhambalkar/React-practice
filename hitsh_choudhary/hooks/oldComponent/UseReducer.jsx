import React, { useReducer } from "react";


const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT" : 
            return {count : state.count + 1, showText :state.showText}
        case "toggleShowText" :
            return {count : state.count, showText : !state.showText}
        default :
            return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {
        count:0, 
        showText : true
    });
    return (
        <>
            <h1>{state.count}</h1>
            <button type="button" 
            onClick={()=>{
                dispatch({type : "INCREMENT"});
                dispatch({type : "toggleShowText"});
            }}   
            >click me</button>
            {state.showText && <p>This is text</p>}
        </>
    )
}
export default UseReducer;