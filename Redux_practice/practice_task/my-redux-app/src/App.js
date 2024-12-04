import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Login />
    </Provider>
  );
}

export default App;
