// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { createConnection } from './useFetch';
import { useMemo } from 'react';
import useFetch from './useFetch';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';





function App(){
    const BASE_URL = "https://jsonplaceholder.typicode.com/users";
    const {data, loading, error}  = useFetch(BASE_URL)

    return (
        <div className='App'>
            <h1>Custom React Hook (Data Fetching)</h1>
            {loading && <h1>loading...</h1>}
            {error && <h3>Error :  Something went wrong </h3>}
            {data.length}
        </div>
    )
}

export default App;

