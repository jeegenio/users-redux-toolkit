import React from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import { selectAllUsers } from "../userslice/usersSlice";

const UsersList = () => {
  const userList = useSelector(selectAllUsers);
  const renderUsers = userList.map((user) => {
    return <UserItem user={user} key={user.id} />;
  });

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Users</h2>
      {renderUsers}
    </section>
  );
};

export default UsersList;
