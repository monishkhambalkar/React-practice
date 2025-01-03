import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/userSlice";

const UpdateUserData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      const storageUsers = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = storageUsers.find((user) => user.id === userId);
      if (foundUser) {
        setName(foundUser.name);
        setEmail(foundUser.email);
      }
    }
  }, [userId]);

  const handleSubmit = (e) => {
    console.log(name);
    console.log(email);

    e.preventDefault();
    dispatch(updateUser({ id: userId, name, email }));
    setEmail("");
    setName("");
    navigate("/");
  };

  return (
    <div>
      <h1>Update User</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>
          Back
        </button>
      </form>
    </div>
  );
};

export default UpdateUserData;
