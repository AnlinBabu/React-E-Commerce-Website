import classes from "./Header/Header.module.css";
import SearchIcon from "../assets/SearchIcon";
type Props = {
  placeholder?: string;
  icon?: JSX.Element;
};
export default function SearchBar({ placeholder, icon }: Props) {
  return (
    <div className={classes.SearchBar}>
      <input
        type="text"
        placeholder={` ${
          placeholder ? placeholder : "What are you looking for?"
        }`}
      />
      {icon ? icon : <SearchIcon />}
    </div>
  );
}
