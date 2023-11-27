import React from "react";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Counter({ days, hours, minutes, seconds }: Props) {
  return (
    <div className="w-[300px] text-black">
      <div className="flex font-bold text-xs justify-between">
        <div>Days</div>
        <div>Hours</div>
        <div>Minutes</div>
        <div>Seconds</div>
      </div>
      <div className="flex font-bold text-4xl justify-between">
        <div>{days}</div>
        <span className="font-sans text-secondaryred">:</span>
        <div>{hours}</div>
        <span className="font-sans text-secondaryred">:</span>
        <div>{minutes}</div>
        <span className="font-sans text-secondaryred">:</span>
        <div>{seconds}</div>
      </div>
    </div>
  );
}
