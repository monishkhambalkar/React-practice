import React , {useEffect, useState} from "react";
import axios from "axios";

function UseEffect(){

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        // axios
        // .get("https://jsonplaceholder.typicode.com/comments")
        // .then(result=>{
        //     setData(result.data[0].email);
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        fetchItems();
    },[]);

    const fetchItems = async () => {
        const response = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
        
        // setItems(data); // Update state with fetched items
    };

    return (
        <>
            <div>
                <h1>List of Comments</h1>
                <ul  style={{ listStyleType: 'none' }}>
                    <li>
                        <p>{data}</p>
                    </li> 
                </ul>
            </div>

            <button onClick={setCount(count + 1)}>Next</button>
        </>
    )
}


export default UseEffect;