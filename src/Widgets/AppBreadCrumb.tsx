import React from "react";
import { Link, useLocation } from "react-router-dom";

const AppBreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="flex mt-[80px]">
      {location.pathname === "/" ? null : (
        <Link to="/">
          <span className="text-text2 font-poppins">Home</span>
        </Link>
      )}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        value = `${value[0].toUpperCase()}${value.slice(1, value.length)}`;
        return (
          <div key={index}>
            {last ? (
              <span className="font-bold font-poppins" key={to}>
                &nbsp;&nbsp;<span className="text-text2">/</span>&nbsp;&nbsp;{" "}
                {value}
              </span>
            ) : (
              <span
                className="font-normal font-poppins text-sm leading-[21px] "
                key={to}
              >
                &nbsp;&nbsp;/ <Link to={to}>{value}</Link>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AppBreadCrumb;
