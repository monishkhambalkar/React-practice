import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
console.log(todoReducer);
const store = configureStore({
  reducer: { todos: todoReducer },
});

export default store;
