import CustomButton from "../../Widgets/CustomButton";
import PersonilizedProducts from "./PersonilizedProducts";
import WishListView from "./WishListView";

export default function WishList() {
  return (
    <div className="mt-20 mb-[140px]">
      <div className="flex justify-between">
        <div className="text-xl">WishList(4)</div>
        <CustomButton
          className="w-56 h-14 border-solid border-black border-[1px] text-black bg-white"
          btnTxt={"Move All To Bag"}
        />
      </div>
      <div className="mb-20">
        <WishListView />
      </div>
      <PersonilizedProducts />
    </div>
  );
}
