import React, { useState, useEffect } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const handleClick = async () => {
    const res = await fetch("/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    handleClick();
  });

  return (
    <div style={{ marginTop: "200px" }}>
      <h1>admin</h1>

      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Admin;
