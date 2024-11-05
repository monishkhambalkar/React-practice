import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
    API_REQUEST : "api-request",
    FETCH_DATA : "fetch-data",
    ERROR : "error",
};

function reducer(state, {type, payload}){}

function useFetch(){
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        dispatch({type : ACTIONS.API_REQUEST});
        axios.get(url).then((res)=>{
            dispatch({type:ACTIONS.FETCH_DATA, payload: Response.data})
        })
    },[url])
    return state;
};

const initialState = {
    data : [],
    loading : false,
    error :  null
};

export default useFetch;