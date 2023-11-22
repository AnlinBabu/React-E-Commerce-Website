import React, { useState } from "react";
import ArrowRight from "../../../assets/ArrowRight";

interface Subcategory {
  [key: string]: string[];
}

type listTypes = (string | Subcategory)[];

const list: listTypes = [
  { "Woman’s Fashion": ["item1", "item2", "item3"] },
  { "Men's Fashion": ["item1", "item2", "item3"] },
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
type Props = {
  list: listTypes;
};

export default function SectionList(props: props) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <>
      <div className="border-r-[1px] border-solid border-bordercolor">
        <ul className="w-[215px] mt-[40px] mr-4 flex flex-col gap-6">
          {list.map((item, index) => {
            if (typeof item === "string") {
              return (
                <li
                  key={index}
                  className="text-black whitespace-nowrap h-6"
                  onMouseEnter={() => setActiveSubmenu(null)}
                >
                  {item}
                </li>
              );
            }

            if (typeof item === "object") {
              const subitem = Object.keys(item)[0];

              return (
                <li
                  key={index}
                  className="w-full relative  whitespace-nowrap text-black h-6 flex justify-between"
                  onMouseEnter={() => setActiveSubmenu(subitem)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {subitem}
                  <div className="w-2 h-3">
                    <ArrowRight />
                  </div>
                  {activeSubmenu === subitem && (
                    <SectionList />

                    // <ul
                    //   className="absolute left-full top-0 pl-4 w-[215px]  pr-4 flex flex-col gap-6 bg-white "
                    //   onMouseEnter={() => setActiveSubmenu(subitem)}
                    // >
                    //   {item[subitem].map(
                    //     (subCategoryItem, subCategoryIndex) => (
                    //       <li key={subCategoryIndex}>{subCategoryItem}</li>
                    //     )
                    //   )}
                    // </ul>
                  )}
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </>
  );
}
