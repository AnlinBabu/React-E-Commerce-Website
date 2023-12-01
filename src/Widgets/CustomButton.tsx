import { NavLink } from "react-router-dom";

type Props = { btnTxt: string; className?: string };

export default function CustomButton({ btnTxt, className }: Props) {
  return (
    <NavLink
      className={`${
        className ? className : "w-40 h-14  bg-secondaryred  text-white "
      } flex rounded z-30`}
      to={""}
    >
      <span className="m-auto font-medium">{btnTxt}</span>{" "}
    </NavLink>
  );
}
