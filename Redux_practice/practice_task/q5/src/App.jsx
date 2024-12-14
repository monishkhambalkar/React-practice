import { useState } from "react";
import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/actions/dataActions";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Data fetching with redux</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error : {error}</p>}
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
