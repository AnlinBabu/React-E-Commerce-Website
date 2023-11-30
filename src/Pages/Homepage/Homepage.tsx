import { useQuery } from "react-query";
import Header from "../../Widgets/Header/Header";
import Promotion from "../../Widgets/Promotion";
import Categories from "./categories/Categories";
import ProductView from "../../Widgets/ProductView";
import Slider from "./Slider/Slider";
import FlashSales from "./flashSales/FlashSales";
import BestSelling from "../BestSelling/BestSelling";
import MainAdvertisement from "./mainAdvertisement/MainAdvertisement";
import Explore from "./Explore/Explore";
import NewArrival from "./newArrival/NewArrival";
import Policies from "./policies/Policies";
import SearchBar from "../../Widgets/SearchBar";
import SearchArrow from "../../assets/SearchArrow";

export default function Homepage() {
  // const { isLoading, error, data } = useQuery<Category>("repoData", () =>
  //   fetch("http://localhost:3000/home").then((res) => res.json())
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error;
  return (
    <div>
      <Promotion />
      <Header />
      <div className=" max-w-[1200px] mx-auto">
        <Slider />
        <FlashSales />
        <Categories />
        <BestSelling />
        <MainAdvertisement />
        <Explore />
        <NewArrival />
        <Policies />
      </div>
      <div className=" bg-black text-text1 flex   h-auto">
        <div className="max-w-[1200px] mx-auto  mt-20 mb-16 flex gap-[87px] ">
          <div>
            <div className="flex flex-col gap-6 mb-4">
              <div className="font-bold text-2xl">Exclusive</div>
              <div className="font-semibold text-xl">Subscribe</div>
              <div className="font-medium">Get 10% off your first order</div>
            </div>
            <div className="flex px-4 py-3 text-gray-700  max-w-[217px] rounded border-white border-solid border-[1px]">
              <input
                type="text"
                placeholder={"Enter your email"}
                className="bg-transparent outline-none"
              />
              <SearchArrow />
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl mb-6">Support</div>
            <div className="flex gap-4 flex-col text-base">
              <div>
                <p>111 Bijoy sarani, Dhaka,</p> <p>DH 1515, Bangladesh.</p>
              </div>
              <div>exclusive@gmail.com</div>
              <div>+88015-88888-9999</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl mb-6">Account</div>
            <div className="flex gap-4 flex-col text-base">
              <div>My Account</div>
              <div>Login / Register</div>
              <div>Cart</div>
              <div>Wishlist</div>
              <div>Shop</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl mb-6">Quick Link</div>
            <div className="flex gap-4 flex-col text-base">
              <div>Privacy Policy</div>
              <div>Terms Of Use</div>
              <div>FAQ</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl mb-6">Download App</div>
            <div className="flex gap-6 flex-col text-base">
              <div className="text-xs text-gray-400">
                Save $3 with App New User Only
              </div>
              <div className="flex">
                <img src="src/assets/Qrcode.png" alt="" />
                <div>
                  <img src="src/assets/GooglePlay.png" alt="" />
                  <img src="src/assets/AppStore.png" alt="" />
                </div>
              </div>
              <div className="flex justify-between">
                <img src="src/assets/Icon-Facebook.png" alt="" />
                <img src="src/assets/Icon-Instagram.png" alt="" />
                <img src="src/assets/Icon-Linkedin.png" alt="" />
                <img src="src/assets/Icon-Twitter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
