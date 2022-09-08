import React from "react";
import GroupIcon from "@material-ui/icons/Group";
import { Box } from "@material-ui/core";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <GroupIcon style={{ fontSize: 150 }} color="primary" />
      </Box>
    </div>
  );
};

export default Navbar;
