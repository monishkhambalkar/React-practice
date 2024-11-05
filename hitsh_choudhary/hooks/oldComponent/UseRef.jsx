import React , {useRef} from "react";

function UseRef() {

    const inputRef = useRef(null);

    const onClick = () =>{
        console.log(inputRef.current.value);
    }
    
    return (
        <>
        <h1>use Ref</h1>
        <input type="text" name="" id="" ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
        </>
    )

}

export default UseRef;