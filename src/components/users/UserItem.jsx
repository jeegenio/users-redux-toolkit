import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: "8px",
    alignItems: "start",
    minWidth: "500px",
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
  const { name, title, department, status } = user || {};
  const classes = useStyles();

  return (
    <Box className={classes.container}>
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
          {status}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserItem;
