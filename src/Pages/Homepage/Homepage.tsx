import Categories from "./categories/Categories";

import Slider from "./Slider/Slider";
import FlashSales from "./flashSales/FlashSales";
import BestSelling from "../BestSelling/BestSelling";
import MainAdvertisement from "./mainAdvertisement/MainAdvertisement";
import Explore from "./Explore/Explore";
import NewArrival from "./newArrival/NewArrival";
import Policies from "../../Widgets/policies/Policies";

export default function Homepage() {
  // const { isLoading, error, data } = useQuery<Category>("repoData", () =>
  //   fetch("http://localhost:3000/home").then((res) => res.json())
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error;
  return (
    <div>
      {/* <Promotion />
      <Header />
      <div className=" max-w-[1200px] mx-auto"> */}
      <Slider />
      <FlashSales />
      <Categories />
      <BestSelling />
      <MainAdvertisement />
      <Explore />
      <NewArrival />
      <Policies />
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}
