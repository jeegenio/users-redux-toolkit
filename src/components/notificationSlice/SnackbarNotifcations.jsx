import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { getSnackbarDetails, setSnackbar } from "./snackbarSlice";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SnackbarNotifcations = () => {
  const dispatch = useDispatch();
  const snackbarDetails = useSelector(getSnackbarDetails);
  const { snackbarOpen, snackbarType, snackbarMessage } = snackbarDetails;
  const classes = useStyles();

  const snackbarOpenReset = false;
  const snackbarTypeReset = "";
  const snackbarMessageReset = "";
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      setSnackbar({
        snackbarOpenReset,
        snackbarTypeReset,
        snackbarMessageReset,
      })
    );
  };
  return (
    <div className={classes.root}>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarType}
          variant="filled"
          color={snackbarType}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarNotifcations;
