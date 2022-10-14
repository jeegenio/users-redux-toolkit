import React from "react";
import GroupIcon from "@material-ui/icons/Group";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        marginBottom: 16,
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <GroupIcon style={{ fontSize: 150, color: "blue" }} />
        </Box>
        <h1 style={{ color: "black" }}>REDUX TOOLKIT</h1>
      </Box>
      <Box style={{ display: "flex", color: "primary", columnGap: 14 }}>
        <Link
          style={{
            fontSize: 20,
            color: "black",
          }}
          to="/"
        >
          HOME
        </Link>
        <Link
          style={{
            fontSize: 20,
            color: "black",
          }}
          to="/user"
        >
          ADD USER
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
