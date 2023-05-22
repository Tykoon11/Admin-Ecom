import React, { useState } from "react";
import UsersList from "./UsersList";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      username: "Tykoon",
      password: "password",
      role: "admin",
    },
    {
      id: 2,
      firstname: "Brian",
      lastname: "Henderson",
      username: "BigB",
      password: "password",
      role: "client",
    },
  ]);

  return (
    <div>
      <div className="grid grid-cols-6 gap-20 p-3 rounded-t-lg text-sm bg-[#F09D7A] font-semibold text-[#232323]">
        <h1>S/N</h1>
        <h1>Firstname</h1>
        <h1>Lastname</h1>
        <h1>Username</h1>
        <h1>Password</h1>
        <h1>Role</h1>
      </div>
      <UsersList users={users} />
    </div>
  );
};

export default Users;
