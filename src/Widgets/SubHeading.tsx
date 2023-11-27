import React from "react";

type Props = {
  text: string;
};

export default function SubHeading({ text }: Props) {
  return (
    <div className="flex align-middle gap-4">
      <div className="bg-secondaryred rounded w-5 h-10"></div>
      <h1 className="text-secondaryred text-base font-semibold my-auto">
        {text}
      </h1>
    </div>
  );
}
