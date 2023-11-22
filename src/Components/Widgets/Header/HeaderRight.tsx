import SearchBar from "../SearchBar";
import classes from "./Header.module.css";
import WishlistIcon from "../../../assets/WishlistIcon";
import CartIcon from "../../../assets/CartIcon";
import UserIcon from "../../../assets/UserIcon";

export default function HeaderRight() {
  return (
    <div className={classes.HeaderRight}>
      <SearchBar />
      <div className={classes.HeaderRightIcons}>
        <WishlistIcon />
        <CartIcon />
        <UserIcon />
      </div>
    </div>
  );
}
