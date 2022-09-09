import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllUsers,
  selectUserById,
  updateUser,
} from "../userslice/usersSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditUserForm = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => selectUserById(state, userId));
  const users = useSelector(selectAllUsers);

  const [name, setName] = useState(user?.name);
  const [title, setTitle] = useState(user?.title);
  const [department, setDepartment] = useState(user?.department);
  const [user_status, setStatus] = useState(user?.user_status);
  const [requestStatus, setRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDepartmentChanged = (e) => setDepartment(e.target.value);
  const onStatusChanged = (e) => setStatus(e.target.value);

  const dispatch = useDispatch();
  const canSave = [name, title, department, user_status].every(Boolean);

  const onSaveUserClicked = () => {
    if (canSave) {
      const { id } = user || {};
      try {
        dispatch(
          updateUser({ name, title, department, user_status, id })
        ).unwrap();
        setName("");
        setTitle("");
        setDepartment("");
        setStatus("");
        navigate(`/user/${userId}`);
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
      <h2>Edit User</h2>
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

export default EditUserForm;
