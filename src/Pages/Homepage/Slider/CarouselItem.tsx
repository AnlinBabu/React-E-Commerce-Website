import ArrowNext from "../../../assets/ArrowNext";
import heroImg from "../../../assets/hero_endframe1.png";
import { NavLink } from "react-router-dom";
export default function CarouselItem() {
  return (
    <div className="  bg-black max-h-[345px]">
      <img src={heroImg} className="ml-16 mt-4 relative "></img>
      <NavLink
        to={""}
        className={({ isActive, isPending }) =>
          `${
            isPending ? "pending" : isActive ? "active" : ""
          } text-white ml-16 relative bottom-[80px] underline 
          underline-offset-8 font-semibold flex align-middle gap-2`
        }
      >
        <p className="">Shop Now</p>
        <ArrowNext color="#FAFAFA" />
      </NavLink>
    </div>
  );
}
