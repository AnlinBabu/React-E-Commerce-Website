import React from "react";
import classes from "./Header.module.css";

export default function HeaderCenter() {
  return (
    <div className={classes.navbuttoncontainer}>
      <a className={classes.navbutton}>Home</a>
      <a className={classes.navbutton}>Contact</a>
      <a className={classes.navbutton}>About</a>
      <a className={classes.navbutton}>Sign Up</a>
    </div>
  );
}
