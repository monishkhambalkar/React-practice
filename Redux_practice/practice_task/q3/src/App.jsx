import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import FormComponent from "./FormComponent";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <FormComponent />
    </Provider>
  );
}

export default App;
