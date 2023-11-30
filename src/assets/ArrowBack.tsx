import React from "react";
type Props = {
  color?: string;
};
export default function ArrowBack({ color }: Props) {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1L1 8L8 15M1 8H17"
        stroke={color ? color : "black"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
