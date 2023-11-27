import { useQuery } from "react-query";
import Header from "../../Widgets/Header/Header";
import Promotion from "../../Widgets/Promotion";
import Categories from "./Categories/Categories";
import ProductView from "../../Widgets/ProductView";
import Slider from "./Slider/Slider";
import FlashSales from "./flashSales/FlashSales";
import BestSelling from "../BestSelling/BestSelling";

export default function Homepage() {
  // const { isLoading, error, data } = useQuery<Category>("repoData", () =>
  //   fetch("http://localhost:3000/home").then((res) => res.json())
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error;
  return (
    <div>
      hello
      <Promotion />
      <Header />
      <div className=" max-w-[1200px] mx-auto">
        <Slider />
        <FlashSales />
        <Categories />
        <BestSelling />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
