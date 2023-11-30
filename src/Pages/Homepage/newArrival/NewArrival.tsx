import React from "react";
import SubHeading from "../../../Widgets/SubHeading";
import MainHeading from "../../../Widgets/MainHeading";
import Loading from "../../../Widgets/Loading";
import Error from "../../../Widgets/Error";
import { useGetNewArrivalQuery } from "../../../services/homepage";
import NewItem from "./NewItem";
import { Product } from "../../../services/types";
// import NewArrivalItem from "./NewArrivalItem";
export default function NewArrival() {
  const { data, error, isLoading } = useGetNewArrivalQuery("");

  console.log(data);
  if (error) return <Error errorTxt={error} />;
  if (isLoading) return <Loading />;
  if (data?.content) {
    const product = data.content as Product[];
    return (
      <div className="grid grid-cols-1 gap-4 mb-[123px]">
        <div className="mb-5">
          <SubHeading text={"Featured"} />
        </div>
        <div className="mb-10">
          <MainHeading headingTxt={"New Arrival"} headingshadow={false} />
        </div>
        {product && (
          <div className="grid grid-cols-4 grid-rows-2 h-[570px]  gap-[30px]">
            <div className="bg-black col-span-2 row-span-2">
              {product[0] && (
                <NewItem
                  imgsrc={product[0].icon}
                  headingTxt={product[0].productName}
                  descriptionTxt={product[0].shortdescription}
                  url={product[0].producturl}
                />
              )}
            </div>
            <div className="bg-black col-span-2 row-span-1">
              {product[1] && (
                <NewItem
                  imgsrc={product[1].icon}
                  headingTxt={product[1].productName}
                  descriptionTxt={product[1].shortdescription}
                  url={product[1].producturl}
                />
              )}
            </div>
            <div className="bg-black col-span-1">
              {product[2] && (
                <NewItem
                  imgsrc={product[2].icon}
                  headingTxt={product[2].productName}
                  descriptionTxt={product[2].shortdescription}
                  url={product[2].producturl}
                />
              )}
            </div>
            <div className="bg-black col-span-1">
              {product[3] && (
                <NewItem
                  imgsrc={product[3].icon}
                  headingTxt={product[3].productName}
                  descriptionTxt={product[3].shortdescription}
                  url={product[3].producturl}
                />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
