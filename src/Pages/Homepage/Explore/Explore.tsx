import React from "react";
import ProductView from "../../../Widgets/ProductView";
import { useGetExploreQuery } from "../../../services/homepage";
import Error from "../../../Widgets/Error";
import Loading from "../../../Widgets/Loading";
import { Product } from "../../../services/types";
import CustomButton from "../../../Widgets/CustomButton";

export default function Explore() {
  const { data, error, isLoading } = useGetExploreQuery("");

  if (error) return <Error errorTxt={error} />;
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col mb-[140px]">
      <ProductView
        products={data?.content as Product[]}
        headingTxt={"Explore Our Products"}
        subheadingTxt={"Our Products"}
        numRows={2}
        showArrows={true}
      />
      <div className="mx-auto">
        <CustomButton btnTxt={"View All Products"} />
      </div>
    </div>
  );
}
