import React from "react";
import Navbar from "../components/nav/Navbar";
import UsersList from "../components/users/UsersList";
import AddUserForm from "../components/form/AddUserForm";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  console.log("test");
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default MainContent;
