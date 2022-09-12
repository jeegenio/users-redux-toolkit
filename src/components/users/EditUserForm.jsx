import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllUsers,
  selectUserById,
  updateUser,
} from "../userslice/usersSlice";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  InputInputLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { setSnackbar } from "../notificationSlice/snackbarSlice";

const EditUserForm = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => selectUserById(state, userId));
  const users = useSelector(selectAllUsers);

  const [name, setName] = useState(user?.name);
  const [title, setTitle] = useState(user?.title);
  const [department, setDepartment] = useState(user?.department);
  const [status, setStatus] = useState(user?.status);
  const [requestStatus, setRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDepartmentChanged = (e) => setDepartment(e.target.value);
  const onStatusChanged = (e) => setStatus(e.target.value);

  const dispatch = useDispatch();
  const canSave = [name, title, department].every(Boolean);

  const snackbarOpen = true;
  const snackbarType = "success";
  const snackbarMessage = "Successfully updated user";

  const onSaveUserClicked = () => {
    if (canSave) {
      const { id } = user || {};
      try {
        dispatch(updateUser({ name, title, department, status, id })).unwrap();
        dispatch(setSnackbar({ snackbarOpen, snackbarType, snackbarMessage }));
        navigate(`/user/${userId}`);
      } catch (e) {
        console.log("failed saving user");
      }
    }
  };

  const handleBack = () => {
    navigate(`/user/${userId}`);
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
          rowGap: 8,
          width: 400,
        }}
      >
        <InputLabel htmlFor="postUser">Name:</InputLabel>
        <TextField
          type="text"
          id="postName"
          name="postName"
          value={name}
          onChange={onNameChanged}
          fullWidth
        />
        <InputLabel htmlFor="postTitle">Title:</InputLabel>
        <TextField
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          fullWidth
        />
        <InputLabel htmlFor="postDepartment">Department:</InputLabel>
        <TextField
          type="text"
          id="postDepartment"
          name="postDepartment"
          value={department}
          onChange={onDepartmentChanged}
          fullWidth
        />
        <InputLabel htmlFor="postStatus">Status:</InputLabel>
        <Select
          type="text"
          id="postStatus"
          name="postStatus"
          value={status}
          onChange={onStatusChanged}
          fullWidth
        >
          <MenuItem value={true}>Active</MenuItem>
          <MenuItem value={false}>Inactive</MenuItem>
        </Select>
        <Box
          style={{
            marginTop: 16,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={onSaveUserClicked}
            disabled={!canSave}
          >
            Save User
          </Button>
          <Button color="primary" onClick={handleBack}>
            <ArrowBackIcon color="primary" />
            Back
          </Button>
        </Box>
      </form>
    </section>
  );
};

export default EditUserForm;
