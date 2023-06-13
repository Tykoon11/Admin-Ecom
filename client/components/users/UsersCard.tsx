import React from "react";
import User from "@/types/users";

const UsersCard = (props: { user: User }) => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-20 p-3 rounded-b-lg text-sm text-[#696767]">
        <h1>{props.user.id}</h1>
        <h1>{props.user.firstname}</h1>
        <h1>{props.user.lastname}</h1>
        <h1>{props.user.username}</h1>
        <h1>******</h1>
        <h1>{props.user.role}</h1>
      </div>
    </div>
  );
};

export default UsersCard;
