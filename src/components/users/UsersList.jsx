import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserItem from "./UserItem";
import {
  selectAllUsers,
  fetchUsers,
  getUserError,
  getUserStatus,
} from "../userslice/usersSlice";
import { getSnackbarDetails } from "../notificationSlice/snackbarSlice";

const UsersList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(selectAllUsers);
  const userStatus = useSelector(getUserStatus);
  const error = useSelector(getUserError);
  const snackbarDetails = useSelector(getSnackbarDetails);

  console.log(snackbarDetails);
  console.log(userStatus);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const renderUsers = userList.map((user) => {
    return (
      <React.Fragment key={user.id}>
        <UserItem user={user} />
      </React.Fragment>
    );
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
      <h2>USERS</h2>
      {renderUsers}
    </section>
  );
};

export default UsersList;
