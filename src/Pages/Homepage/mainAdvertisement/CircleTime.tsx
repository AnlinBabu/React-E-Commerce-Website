import React from "react";

type Props = { mainTxt: number | string; subTxt: string };
export default function CircleTime({ mainTxt, subTxt }: Props) {
  return (
    <div className="w-16 h-16 bg-white rounded-full  flex justify-center text-black">
      <div className="my-auto flex flex-col text-center">
        <div className="font-semibold">{mainTxt}</div>
        <div className="text-xs font-semibold">{subTxt}</div>
      </div>
    </div>
  );
}
