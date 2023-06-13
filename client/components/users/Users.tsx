import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";
import axios from "axios";
import User from "@/types/users";
import { store, setToken, setUser } from "../../redux/authStore";

const Users = () => {
  const [users, setUsers] = useState([] as User[]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.getState().token}`,
        };
        const response = await axios.get(
          "http://localhost:3000/admin/users/allUsers",
          { headers }
        );
        setUsers(response.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchUsers();
  }, []);

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
