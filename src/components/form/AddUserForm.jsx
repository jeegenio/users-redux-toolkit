import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../userslice/usersSlice";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [user_status, setStatus] = useState("");
  const navigate = useNavigate();
  const onNameChanged = (e) => setName(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDepartmentChanged = (e) => setDepartment(e.target.value);
  const onStatusChanged = (e) => setStatus(e.target.value);

  const dispatch = useDispatch();
  const canSave = [name, title, department, user_status].every(Boolean);

  const onSaveUserClicked = () => {
    if (canSave) {
      try {
        dispatch(addNewUser({ name, title, department, user_status })).unwrap();
        setName("");
        setTitle("");
        setDepartment("");
        setStatus("");
        navigate("/");
      } catch (e) {
        console.log("failed saving user");
      }
    }
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Add a New User</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="postUser">Name:</label>
        <input
          type="text"
          id="postName"
          name="postName"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postDepartment">Department:</label>
        <input
          type="text"
          id="postDepartment"
          name="postDepartment"
          value={department}
          onChange={onDepartmentChanged}
        />
        <label htmlFor="postStatus">Status:</label>
        <input
          type="text"
          id="postStatus"
          name="postStatus"
          value={user_status}
          onChange={onStatusChanged}
        />
        <button type="button" onClick={onSaveUserClicked} disabled={!canSave}>
          Save User
        </button>
      </form>
    </section>
  );
};

export default AddUserForm;
