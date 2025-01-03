import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedUsers = localStorage.getItem("users");
  return savedUsers ? JSON.parse(savedUsers) : [];
};

const saveToLocalStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const initialState = {
  user: loadFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
      saveToLocalStorage(state.user);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.user.find((u) => u.id == id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        saveToLocalStorage(state.user);
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      const existingUser = state.user.filter((user) => user.id !== id);
      saveToLocalStorage(existingUser);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
