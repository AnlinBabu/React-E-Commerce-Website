import SubHeading from "../../Widgets/SubHeading";
import MainHeading from "../../Widgets/MainHeading";
import Product from "../../Widgets/Product";
import CustomButton from "../../Widgets/CustomButton";

export default function Todays() {
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
          />
        </div>
        <div className="flex gap-8">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="my-[60px] mx-auto">
        <CustomButton btnTxt={"View All Products"} />
      </div>
    </div>
  );
}
