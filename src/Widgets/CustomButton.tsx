import React from "react";

type Props = { btnTxt: string; className?: string };

export default function CustomButton({ btnTxt, className }: Props) {
  return (
    <div
      className={`${
        className ? className : "w-40 h-14  bg-secondaryred"
      } flex rounded `}
    >
      <span className="m-auto text-white font-medium">{btnTxt}</span>{" "}
    </div>
  );
}
