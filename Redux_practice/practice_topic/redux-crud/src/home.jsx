import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "./redux/userSlice";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();

  const HandleAddNewUser = () => {
    navigate("/addUser");
  };

  useEffect(() => {
    const storageUsers = localStorage.getItem("users");
    if (storageUsers) {
      setUsers(JSON.parse(storageUsers));
    }
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteUser(id));
      const storageUsers = localStorage.getItem("users");
      if (storageUsers) {
        setRefresh(JSON.parse(storageUsers));
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = (id) => {
    navigate("/updateUser", { state: { userId: id } });
  };

  return (
    <>
      <h1>Hello Welcome to the Redux Crud</h1>
      <div>
        <button onClick={HandleAddNewUser}>Add new User</button>
      </div>
      <table align="center">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleUpdate(user.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
