import React from "react";
import { useAuth } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default ProfilePage;
