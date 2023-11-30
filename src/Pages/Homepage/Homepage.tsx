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
import Policies from "../../Widgets/policies/Policies";
import SearchBar from "../../Widgets/SearchBar";
import SearchArrow from "../../assets/SearchArrow";
import Footer from "../../Widgets/Footer";

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
      <Footer />
    </div>
  );
}
