import { useEffect, useState } from "react";
import MainHeading from "../../../Widgets/MainHeading";
import SubHeading from "../../../Widgets/SubHeading";
import CategoryItem from "./CategoryItem";
import { useQuery } from "react-query";
type content = {
  icon: string;
  categoryName: string;
};

type Category = {
  id: string;
  content: content[];
};

const products = [
  { url: "src/assets/Category/Category-Camera.png", categoryText: "Camera" },
  {
    url: "src/assets/Category/Category-CellPhone.png",
    categoryText: "CellPhone",
  },
  {
    url: "src/assets/Category/Category-Computer.png",
    categoryText: "Computer",
  },
  { url: "src/assets/Category/Category-Gamepad.png", categoryText: "Gamepad" },
  {
    url: "src/assets/Category/Category-Headphone.png",
    categoryText: "Headphone",
  },
  {
    url: "src/assets/Category/Category-SmartWatch.png",
    categoryText: "SmartWatch",
  },
  { url: "src/assets/Category/Category-Camera.png", categoryText: "Camera" },
  {
    url: "src/assets/Category/Category-CellPhone.png",
    categoryText: "CellPhone",
  },
  {
    url: "src/assets/Category/Category-Computer.png",
    categoryText: "Computer",
  },
  { url: "src/assets/Category/Category-Gamepad.png", categoryText: "Gamepad" },
  {
    url: "src/assets/Category/Category-Headphone.png",
    categoryText: "Headphone",
  },
  {
    url: "src/assets/Category/Category-SmartWatch.png",
    categoryText: "SmartWatch",
  },
  { url: "src/assets/Category/Category-Camera.png", categoryText: "Camera" },
  {
    url: "src/assets/Category/Category-CellPhone.png",
    categoryText: "CellPhone",
  },
  {
    url: "src/assets/Category/Category-Computer.png",
    categoryText: "Computer",
  },
  { url: "src/assets/Category/Category-Gamepad.png", categoryText: "Gamepad" },
  {
    url: "src/assets/Category/Category-Headphone.png",
    categoryText: "Headphone",
  },
  {
    url: "src/assets/Category/Category-SmartWatch.png",
    categoryText: "SmartWatch",
  },
];
export default function Categories() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [selected, setSelected] = useState(-1);
  const showNextProducts = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const showPreviousProducts = () => {
    setVisibleIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const { isLoading, error, data } = useQuery<Category>("repoData", () =>
    fetch("http://localhost:3000/home/Category").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;
  return (
    <div className="flex flex-col border-b-[1px] border-solid border-bordercolor mt-20 ">
      <div className="mb-[60px]">
        <div className="mb-5">
          <SubHeading text="Categories" />
        </div>
        <MainHeading
          headingTxt={"Browse By Category"}
          showArrows={true}
          headingshadow={false}
          showPrevious={showPreviousProducts}
          showNext={showNextProducts}
        />
      </div>

      <div className="flex gap-8 overflow-hidden relative">
        <div
          className="flex gap-[30px] transition-transform ease-in-out duration-300 transform"
          style={{
            transform: `translateX(-${
              visibleIndex * (100 / products.length)
            }%)`,
          }}
        >
          {data?.content?.map((category, index) => (
            <CategoryItem
              key={index}
              url={category.icon}
              categoryTxt={category.categoryName}
              isSelected={index === selected}
              selectCurrent={() => setSelected(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
