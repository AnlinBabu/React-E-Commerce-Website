import SectionList from "./SectionList";
import SliderCarousel from "./SliderCarousel";

export default function Slider() {
  return (
    <div className="flex max-w-[1200px] mx-auto">
      <SectionList />
      <SliderCarousel />
    </div>
  );
}
