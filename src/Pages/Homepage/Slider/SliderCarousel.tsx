import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselItem from "./CarouselItem";

export default function SliderCarousel() {
  // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
  return (
    <>
      <div className="mt-[40px] mx-[44px] max-h-[340px]">
        <Carousel
          showArrows={false}
          interval={3500}
          dynamicHeight={false}
          stopOnHover={false}
          showStatus={false}
          transitionTime={500}
          showThumbs={false}
          showIndicators={true}
          swipeable={true}
          emulateTouch={true}
          autoPlay={true}
          infiniteLoop={true}
        >
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </div>
    </>
  );
}
