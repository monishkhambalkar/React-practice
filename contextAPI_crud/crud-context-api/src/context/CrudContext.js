import React, { createContext, useReducer } from "react";
import axios from "axios";

const CrudContext = createContext();

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const crudReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_ITEMS_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "FETCH_ITEMS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const CrudProvider = ({ children }) => {
  const [state, dispatch] = useReducer(crudReducer, initialState);

  const fetchItems = async () => {
    dispatch({ type: "FETCH_ITEMS_REQUEST" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ITEMS_FAILURE", payload: error.message });
    }
  };

  const addItem = async (item) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      item
    );
    dispatch({ type: "ADD_ITEM", payload: response.data });
  };

  const updateItem = async (id, item) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      item
    );
    dispatch({ type: "UPDATE_ITEM", payload: response.data });
  };

  const deleteItem = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <CrudContext.Provider
      value={{ ...state, fetchItems, addItem, updateItem, deleteItem }}
    >
      {children}
    </CrudContext.Provider>
  );
};

export { CrudContext, CrudProvider };
