import SectionList from "./SectionList";
import SliderCarousel from "./SliderCarousel";

export interface Subcategory {
  [key: string]: (string | Subcategory)[];
}

export type listTypes = (string | Subcategory)[];

const list: listTypes = [
  { "Woman’s Fashion": ["item1", "item2", "item3"] },
  {
    "Men's Fashion": [
      "item1",
      "item2",
      { "Woman’s Fashion": ["item1", "item2", "item3"] },
    ],
  },
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function Slider() {
  return (
    <div className="mb-[140px] flex">
      <div className="border-r-[1px] border-solid border-bordercolor">
        <ul className="w-[215px] mt-[40px] mr-4 flex flex-col gap-4">
          <SectionList list={list} />
        </ul>
      </div>
      <SliderCarousel />
    </div>
  );
}
