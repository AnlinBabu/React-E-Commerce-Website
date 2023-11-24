import SubHeading from "../../Widgets/SubHeading";
import MainHeading from "../../Widgets/MainHeading";
import Product from "../../Widgets/Product";
import CustomButton from "../../Widgets/CustomButton";
import { useState } from "react";

const products = [
  {
    url: "src/assets/products/9.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
  {
    url: "src/assets/products/1.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
  {
    url: "src/assets/products/2.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
  {
    url: "src/assets/products/3.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
  {
    url: "src/assets/products/4.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
  {
    url: "src/assets/products/6.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
  {
    url: "src/assets/products/5.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
  {
    url: "src/assets/products/7.png",
    discount: 2,
    productName: "testItem",
    price: 100,
    rating: 3.5,
    rateCount: 95,
    viewType: "normal",
  },
];

export default function Todays() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const showNextProducts = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const showPreviousProducts = () => {
    setVisibleIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };
  return (
    <div className="flex flex-col border-b-[1px] border-solid border-bordercolor">
      <div className="mb-[60px]">
        <div className="mb-5">
          <SubHeading text="Today's" />
        </div>
        <div className="mb-10">
          <MainHeading
            headingTxt={"Flash Sales"}
            showArrows={true}
            targetHours="2023-11-26 16:30"
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
            {products.map((product, index) => (
              <Product
                url={product.url}
                productName={product.productName}
                price={product.price}
                rating={product.rating}
                rateCount={product.rateCount}
                viewType={"normal"}
              />
              // <Product />
              // <Product />
              // <Product />
            ))}
          </div>
        </div>
      </div>
      <div className="my-[60px] mx-auto">
        <CustomButton btnTxt={"View All Products"} />
      </div>
    </div>
  );
}
