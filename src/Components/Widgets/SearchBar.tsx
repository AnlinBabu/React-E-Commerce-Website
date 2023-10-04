import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "../../assets/SearchIcon";
export default function SearchBar() {
  return (
    <div className={classes.SearchBar}>
      <input type="text" placeholder="What are you looking for?" />
      <SearchIcon />
    </div>
  );
}
