import React from "react";
import SingleUserPage from "./components/users/SingleUserPage";
import EditUserForm from "./components/users/EditUserForm";
import MainContent from "./maincontent/MainContent";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UsersList from "./components/users/UsersList";
import AddUserForm from "./components/form/AddUserForm";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route index element={<UsersList />} />
        <Route path="user">
          <Route index element={<AddUserForm />} />
          <Route path=":userId" element={<SingleUserPage />} />
          <Route path="edit/:userId" element={<EditUserForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
