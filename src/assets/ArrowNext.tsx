import React from "react";

type Props = {
  color?: string;
};
export default function ArrowNext({ color }: Props) {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 8H18M18 8L11 1M18 8L11 15"
        stroke={color ? color : "black"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
