import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export default function HeaderCenter() {
  return (
    <div className={classes.navbuttoncontainer}>
      <Link to="/" className={classes.navbutton}>
        Home
      </Link>
      <Link to="/contact" className={classes.navbutton}>
        Contact
      </Link>
      <Link to="/about" className={classes.navbutton}>
        About
      </Link>
      <Link to="/signup" className={classes.navbutton}>
        Sign Up
      </Link>
    </div>
  );
}
