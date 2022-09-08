import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Navbar from "../nav/Navbar";
import UsersList from "../users/UsersList";
import AddUserForm from "../form/AddUserForm";

const useStyles = makeStyles({
  root: {
    backgroundColor: "",
  },
});

const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Navbar />
      <AddUserForm />
      <UsersList />
    </Box>
  );
};

export default MainContent;
