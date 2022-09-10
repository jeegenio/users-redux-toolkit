import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../userslice/usersSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "full",
    justifyContent: "center",
    flexDirection: "column",
  },
  valueContainer: {
    display: "flex",
    padding: theme.spacing(0),
  },
  textValuesValue: {
    paddingLeft: theme.spacing(1),
  },
  textValues: {
    color: theme.palette.grey[600],
  },
}));
const UserItem = ({ user }) => {
  const { name, title, department, status, id } = user || {};
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    const { name, title, department, status, id } = user || {};
    dispatch(deleteUser({ name, title, department, status, id }));
    navigate("/");
  };
  return (
    <Box className={classes.container} borderBottom={0}>
      <Box
        style={{
          width: 500,
          display: "flex",
          marginBottom: 12,
          border: 1,
          borderColor: "blue",
        }}
        borderBottom={0}
      >
        <Box style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Name:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {name}
            </Typography>
          </Box>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Title:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {title}
            </Typography>
          </Box>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Department:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {department}
            </Typography>
          </Box>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Status:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {status ? "Active" : "Inactive"}
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            width: "50%",
            rowGap: 8,
          }}
        >
          <Button variant="outlined" color="primary">
            <Link style={{ textDecoration: "none" }} to={`user/${id}`}>
              VIEW USER
            </Link>
          </Button>

          <Button variant="outlined" color="primary" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserItem;
