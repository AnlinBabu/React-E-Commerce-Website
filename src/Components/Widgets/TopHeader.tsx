import React from "react";
import classes from "./TopHeader.module.css";
import DropDownIcon from "../../assets/DropDownIcon";
export default function TopHeader() {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.saletxt}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span> ShopNow</span>
          {/* todo:make English into a hyperlink and select language */}
          <div className={classes.language}>
            <span> English </span>
            <DropDownIcon />
          </div>
        </p>
      </div>
    </div>
  );
}
