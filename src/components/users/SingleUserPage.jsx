import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserById, deleteUser } from "../userslice/usersSlice";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    rowGap: "8px",
    width: "full",
    justifyContent: "center",
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

const SingleUserPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));
  if (!user) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const handleBack = () => {
    navigate("/");
  };

  const handleDeleteUser = () => {
    const { name, title, department, status, id } = user || {};
    dispatch(deleteUser({ name, title, department, status, id }));
    navigate("/");
  };
  return (
    <Box className={classes.container}>
      <Box style={{ width: "25%", display: "flex" }}>
        <Box style={{ width: "50%" }}>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Name:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {user.name}
            </Typography>
          </Box>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Title:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {user.title}
            </Typography>
          </Box>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Department:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {user.department}
            </Typography>
          </Box>
          <Box className={classes.valueContainer}>
            <Typography className={classes.textValuesLabel} component="span">
              Status:
            </Typography>
            <Typography className={classes.textValuesValue} component="span">
              {user.status ? "Active" : "Inactive"}
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            rowGap: "8px",
          }}
        >
          <Button color="primary" variant="outlined">
            <Link
              style={{ textDecoration: "none" }}
              to={`/user/edit/${user.id}`}
            >
              Edit
            </Link>
          </Button>
          <Button color="primary" variant="outlined" onClick={handleDeleteUser}>
            Delete
          </Button>
          <Button color="primary" onClick={handleBack}>
            <ArrowBackIcon color="primary" />
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleUserPage;
