import HeartSmall from "../../assets/HeartSmall";
import Eye from "../../assets/Eye";
import StartRating from "./StartRating";

type Props = {
  url: string;
  discount?: number;
  productName: string;
  price: number;
  rating: number;
  rateCount: number;
  viewType: "quick" | "normal";
  colorOption?: string;
};

export default function Product({
  url = "src/assets/products/9.png",
  discount = 2,
  productName = "testItem",
  price = 100,
  rating = 3.5,
  rateCount = 95,
  viewType = "normal",
  colorOption,
}: Props) {
  const finalPrice = price - (price * discount) / 100;
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[270px] h-[250px] flex flex-col relative group">
        <div className="w-full h-auto relative bg-secondarylight rounded flex-1  flex">
          {discount > 0 && (
            <div className="bg-secondaryred text-white  w-[55px] h-[26px] ml-4 mt-4 rounded absolute flex left-0">
              <span className="m-auto">-{discount}%</span>
            </div>
          )}
          <img src={url} alt="" className="m-auto" />
          <div className="flex gap-2 flex-col mr-4 mt-4 right-0 absolute">
            <div className="bg-white rounded-full px-1 py-1">
              <HeartSmall />
            </div>
            <div className="bg-white rounded-full px-1 py-1">
              <Eye />
            </div>
          </div>
        </div>
        <button className="bg-black h-10  group-hover:block hidden text-white rounded-b-[4px] absolute w-full bottom-0 ">
          <span className="m-auto font-semibold">Add To Cart</span>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold">{productName}</h4>
        {viewType == "normal" && (
          <div className="flex gap-3 font-medium">
            <div className="text-secondaryred">${finalPrice}</div>
            {discount > 0 && (
              <div className="text-text2 line-through">${price}</div>
            )}
          </div>
        )}
        <div className="flex gap-2">
          {viewType == "quick" && (
            // <div className="flex">
            <div className="text-secondaryred my-auto text-base font-medium ">
              ${finalPrice}
            </div>
            // </div>
          )}

          <StartRating rating={rating} />
          <div className="my-auto">
            <div className="text-text2 mt-auto">({rateCount})</div>
          </div>
        </div>
        {/* Todo: add the color option */}
        <div className=""></div>
      </div>
    </div>
  );
}

// flex - 1;
