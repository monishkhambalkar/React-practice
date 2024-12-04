import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

function Navbar() {
  const { isLoggedIn, userName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      <h1>My App</h1>
      {isLoggedIn ? (
        <>
          <span>Welcome, {userName}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
}

export default Navbar;
