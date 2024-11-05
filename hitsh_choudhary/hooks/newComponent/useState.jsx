import React, { useState } from "react";

function UseState(){

    // const [name, setName] = useState("Dipesh");
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);

    function changeName() {
        setName("Monish")
    }

    function addNames(e) {
        e.preventDefault();
        setNames([...names, {id:name.length, name}])
        setName("");
    }

    console.log()

    return (
        <>
        <h1>useState</h1>
        <div>Hello, {name}</div>
        <button onClick={changeName}>click me</button>
        <hr />

        <form action="" onSubmit={addNames}>
            <input type="text" value={name} placeholder="add name" onChange={(e)=>setName(e.target.value)}/>
            <button>Submit</button>
        </form>
        <hr />
        <ul>
            {names.map((item)=>{
                <li key={item.id}>{item.name}</li>
            })}
            
        </ul>
        </>
    )
}


export default UseState
