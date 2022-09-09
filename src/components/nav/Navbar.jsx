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
        backgroundColor: "grey",
        marginBottom: 16,
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
        }}
      >
        <Box>
          <GroupIcon style={{ fontSize: 150, color: "primary" }} />
        </Box>
        <h1 style={{ color: "white" }}>REDUX TOOLKIT</h1>
      </Box>
      <Box style={{ display: "flex", color: "white", columnGap: 14 }}>
        <Link
          style={{
            textDecoration: "none",
            fontSize: 20,
            color: "white",
          }}
          to="/"
        >
          HOME
        </Link>
        <Link
          style={{
            textDecoration: "none",
            fontSize: 20,
            color: "white",
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
