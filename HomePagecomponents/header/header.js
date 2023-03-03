import React, { useEffect } from "react";
import NavBar from "./navbar";
import Intro from "./intro";
import classes from "./header.module.css";
const Header = (props) => {

  return (
    <div className={`container-fluid ${classes.top}`}>
      <Intro></Intro>
    </div>
  );
};

export default Header;
