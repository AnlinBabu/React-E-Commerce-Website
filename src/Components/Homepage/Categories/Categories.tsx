import { useState } from "react";
import MainHeading from "../../Widgets/MainHeading";
import SubHeading from "../../Widgets/SubHeading";
import CategoryItem from "./CategoryItem";

type Props = {};

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
export default function Categories({}: Props) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const productsToShow = products.slice(visibleIndex, visibleIndex + 6);

  const showPreviousProducts = () => {
    if (visibleIndex > 0) {
      setVisibleIndex(visibleIndex - 1);
    }
  };
  const showNextProducts = () => {
    if (visibleIndex < products.length - 6) {
      setVisibleIndex(visibleIndex + 1);
    }
  };

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
      <div className="flex gap-8 mb-[70px] ">
        {productsToShow.map((product, index) => (
          <CategoryItem
            key={index}
            url={product.url}
            categoryTxt={product.categoryText}
            isSelected={false}
          />
        ))}
      </div>
    </div>
  );
}
