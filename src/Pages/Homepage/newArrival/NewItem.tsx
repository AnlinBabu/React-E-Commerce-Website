import React from "react";
import { NavLink } from "react-router-dom";
type Props = {
  imgsrc: string;
  headingTxt: string;
  descriptionTxt: string;
  url: string;
};
export default function NewItem({
  imgsrc,
  headingTxt,
  descriptionTxt,
  url = "",
}: Props) {
  return (
    <div className="bg-black flex flex-col justify-end relative h-full">
      <img
        src={imgsrc}
        alt="New Arrival 1"
        className="absolute top-0 h-full w-full"
      />
      <div className="   text-text1 z-30 ml-8 mb-8 max-w-[260px]">
        <h2 className="mb-4 font-semibold text-2xl">{headingTxt}</h2>
        <p className="mb-4 text-base ">{descriptionTxt}</p>
        <NavLink
          to={url}
          className="font-semibold underline  decoration-gray-500 underline-offset-4 "
        >
          shop now
        </NavLink>
      </div>
    </div>
  );
}
