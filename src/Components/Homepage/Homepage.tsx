import Header from "../Widgets/Header/Header";
import Promotion from "../Widgets/Promotion";
import Categories from "./Categories/Categories";
import Slider from "./Slider/Slider";
import Todays from "./Todays/Todays";
export default function Homepage() {
  return (
    <div>
      <Promotion />
      <Header />
      <div className=" max-w-[1200px] mx-auto">
        <Slider />
        <Todays />
        <Categories />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
