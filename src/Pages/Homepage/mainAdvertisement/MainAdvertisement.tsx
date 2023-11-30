import React, { useEffect } from "react";
import { useGetMainAdvertisementQuery } from "../../../services/homepage";
import Error from "../../../Widgets/Error";
import Loading from "../../../Widgets/Loading";
import CircleTime from "./CircleTime";
import CustomButton from "../../../Widgets/CustomButton";
import useCounter from "../../../hooks/useCounter";

export default function MainAdvertisement({}: Props) {
  const { data, error, isLoading } = useGetMainAdvertisementQuery("");
  const { days, hours, minutes, seconds, updateRemainingTime } = useCounter("");
  useEffect(() => {
    updateRemainingTime(data?.time as string);
  }, [data?.time, updateRemainingTime]);
  if (error) return <Error errorTxt={error} />;
  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-[500px] mb-[72px] bg-black flex flex-col justify-end relative ">
      <div className="ml-14">
        <img className="absolute top-0 " src={data?.icon} alt="" />
        <div className=" mb-[70px]">
          <div className="flex gap-6 mb-10">
            <CircleTime mainTxt={days} subTxt={"Days"} />
            <CircleTime mainTxt={hours} subTxt={"Hours"} />

            <CircleTime mainTxt={minutes} subTxt={"Minutes"} />

            <CircleTime mainTxt={seconds} subTxt={"Seconds"} />
          </div>
          <CustomButton
            btnTxt={"Buy Now"}
            className="w-44 h-14 bg-button1 text-white"
          />
        </div>
      </div>
    </div>
  );
}
