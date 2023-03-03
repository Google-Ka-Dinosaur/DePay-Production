import React from "react";
import ReactDOM from "react-dom";
import classes from "./NavModal.module.css";
const NavBackdrop = (props) => {
  return <div onClick={props.dontShow}className={classes.Backdrop}></div>;
};
const NavOverlay = (props) => {
  return (
    <div className={classes.Modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const NavModal = (props) => {
  return (
    <>
        <NavBackdrop dontShow={props.dontShow}></NavBackdrop>
        <>{props.children}</>
    </>
  );
};
export default NavModal;
