import React, { useEffect, useState } from "react";
import { Subcategory } from "./SectionList";
import ArrowRight from "../../../assets/ArrowRight";

type Props = {
  subitem: string;
  item: Subcategory;
};

export default function SubItem(props: Props) {
  const [submenu, setSubmenu] = useState(false);
  const [isModal, setModal] = useState(false);

  return (
    <li
      className="w-full relative  whitespace-nowrap text-black h-6 flex justify-between"
      onMouseEnter={() => {
        setSubmenu(true);
      }}
      onMouseLeave={() => setSubmenu(false)}
    >
      {props.subitem}
      <div className="w-2 h-3">
        <ArrowRight />
      </div>
      {(isModal || submenu) && (
        <ul
          className="absolute left-full top-0 pl-4 w-[215px]  pr-4 flex flex-col gap-6 bg-white "
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          {props.item[props.subitem].map(
            (subCategoryItem, subCategoryIndex) => (
              <li key={subCategoryIndex}>{subCategoryItem}</li>
            )
          )}
        </ul>
      )}
    </li>
  );
}
