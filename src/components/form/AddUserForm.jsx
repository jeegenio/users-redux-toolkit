import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../userslice/usersSlice";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDepartmentChanged = (e) => setDepartment(e.target.value);
  const onStatusChanged = (e) => setStatus(e.target.value);

  const dispatch = useDispatch();

  const onSaveUserClicked = () => {
    if (name && title && department && status) {
      dispatch(addUser(name, title, department, status));
      setName("");
      setTitle("");
      setDepartment("");
      setStatus("");
    }
  };

  const canSave =
    Boolean(name) && Boolean(title) && Boolean(department) && Boolean(status);

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
          value={status}
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
