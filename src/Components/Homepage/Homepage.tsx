import Header from "../Widgets/Header/Header";
import Promotion from "../Widgets/Promotion";
import Slider from "./Slider/Slider";
export default function Homepage() {
  return (
    <div>
      <Promotion />
      <Header />
      <Slider />
    </div>
  );
}
