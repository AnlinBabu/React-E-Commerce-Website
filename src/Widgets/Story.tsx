import React from "react";
import storyImage from "../../src/assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
export default function Story() {
  return (
    <div className="flex">
      <div className="max-w-[525px] mt-[137px] mb-[136px] mr-[75px]">
        <div className="mb-[40px] font-semibold leading-[54px] text-[56px] font-inter text-black tracking-[4px]">
          Our Story
        </div>
        <div className="mb-[24px] font-normal leading-[26px] text-black ">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </div>
        <div className="mb-[24px] font-normal leading-[26px] text-black font-poppins">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </div>
      </div>
      <img src={storyImage} alt="story-image" className="rounded-[4px]" />
    </div>
  );
}
