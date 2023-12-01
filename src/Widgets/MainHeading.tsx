import CustomButton from "./CustomButton";
import Counter from "./Counter";
import useCounter from "../hooks/useCounter";
import ArrowBack from "../assets/ArrowBack";
import ArrowNext from "../assets/ArrowNext";

type Props = {
  headingTxt: string;
  targetHours?: string; // Updated prop name
  showArrows?: boolean;
  buttonTxt?: string | null;
  headingshadow?: boolean;
  showPrevious?: () => void;
  showNext?: () => void;
  leftRectagle?: boolean;
};

export default function MainHeading({
  headingTxt,
  targetHours, // Default to empty string give date as input
  showArrows = false,
  buttonTxt = "",
  headingshadow = true,
  showPrevious,
  showNext,
  leftRectagle,
}: Props) {
  //custom hook implementation
  const { days, hours, minutes, seconds } = useCounter(targetHours as string);

  return (
    <div className="flex justify-between ">
      <div className="flex gap-x-16">
        <div
          className={` text-4xl text-black   font-semibold  mt-auto ${
            headingshadow ? "headingDropSHadow" : ""
          } flex`}
        >
          {leftRectagle && (
            <div className="bg-secondaryred rounded w-5 h-10 mr-4"></div>
          )}

          {headingTxt}
        </div>
        {targetHours && (
          <Counter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          ></Counter>
        )}
      </div>
      {/* <div> */}
      {buttonTxt && <CustomButton btnTxt={buttonTxt}></CustomButton>}

      {showArrows && (
        <div className="flex gap-2 mt-auto">
          <button
            className="bg-secondarylight rounded-full w-12 h-12 flex justify-center items-center"
            onClick={showPrevious}
          >
            <ArrowBack />
          </button>
          <button
            className="bg-secondarylight rounded-full w-12 h-12 flex justify-center items-center"
            onClick={showNext}
          >
            <ArrowNext />
          </button>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}
