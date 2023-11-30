import classes from "./Header.module.css";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import LogoIcon from "../../assets/LogoIcon";
export default function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.headerlogo}>
          <LogoIcon />
        </div>
        <HeaderCenter />
        <HeaderRight />
      </div>
    </div>
  );
}
