import SubHeading from "./SubHeading";
import MainHeading from "./MainHeading";
import Product from "./Product";
import { useState } from "react";
import { Product as ProductType } from "../services/types";

type Props = {
  products: ProductType[];
  targetHours?: string;
  headingTxt: string;
  showArrows?: boolean;
  headingbuttonTxt?: string;
  headingshadow?: boolean;
  subheadingTxt?: string;
  bottombuttonTxt?: string;
  numRows: number;
  mainHeadingLeftRectangle?: boolean;
};

export default function ProductView({
  products,
  targetHours,
  headingTxt,
  showArrows,
  headingbuttonTxt,
  headingshadow,
  subheadingTxt,
  mainHeadingLeftRectangle,
  numRows = 1,
  bottombuttonTxt,
}: Props) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const productsPerPage = 4 * numRows;
  const numPages = Math.ceil(products.length / productsPerPage);

  // console.log("products", products);
  const showNextProducts = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 1 * numRows) % products.length);
  };

  const showPreviousProducts = () => {
    setVisibleIndex(
      (prevIndex) =>
        (prevIndex - 1 * numRows + products.length) % products.length
    );
  };
  console.log(products);
  return (
    <div className="grid grid-cols-1 gap-4 mb-[60px]">
      <div className="mb-5">
        {subheadingTxt && <SubHeading text={subheadingTxt} />}
      </div>
      <div className="mb-10">
        <MainHeading
          leftRectagle={mainHeadingLeftRectangle}
          headingTxt={headingTxt}
          showArrows={showArrows}
          buttonTxt={headingbuttonTxt}
          headingshadow={headingshadow}
          targetHours={targetHours}
          showPrevious={showPreviousProducts}
          showNext={showNextProducts}
        />
      </div>

      <div className="overflow-hidden">
        <div
          className="grid grid-flow-col gap-8 relative transition-transform ease-in-out duration-300 transform"
          style={{
            //302 is the product  size in pixel
            transform: `translateX(-${(visibleIndex * 302) / numRows}px)`,
          }}
        >
          {products.map((_item, index) => {
            const row = Math.floor(index / numRows);
            const col = index % numRows;
            console.log(_item);
            return (
              <div key={index} className="grid-row">
                {products
                  .slice(row * numRows, (row + 1) * numRows)
                  .map((product, productIndex) => (
                    <Product
                      key={productIndex}
                      url={product.icon}
                      productName={product.productName}
                      price={product.price}
                      rating={product.rating}
                      discount={product.discount}
                      rateCount={product.rateCount}
                      viewType="normal"
                    />
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
