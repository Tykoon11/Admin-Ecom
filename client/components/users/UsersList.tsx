import React from "react";
import User from "@/types/users";
import UsersCard from "./UsersCard";

const UsersList = (props: { users: User[] }) => {
  return (
    <div>
      {props.users.map((user, key) => (
        <UsersCard user={user} key={key} />
      ))}
    </div>
  );
};

export default UsersList;
