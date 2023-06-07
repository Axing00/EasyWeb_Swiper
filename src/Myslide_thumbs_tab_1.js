/*eslint-disable*/
import React, { Component, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

import prevButtonImage from "./imgs/button/chevron-left.svg";
import nextButtonImage from "./imgs/button/chevron-right.svg";

const TabData = [
  {
    id: 1,
    tabTitle: "관심종목",
  },
  {
    id: 2,
    tabTitle: "주식",
  },
  {
    id: 3,
    tabTitle: "지수",
  },
  {
    id: 4,
    tabTitle: "외한",
  },
  {
    id: 5,
    tabTitle: "선물",
  },
  {
    id: 6,
    tabTitle: "ETF",
  },
];

export default () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="market_view">
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        spaceBetween={0}
        slidesPerView={4}
        className="mySwiper_thumbs"
      >
        {TabData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <span>{slide.tabTitle}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: `.swiper-button-prev`,
          nextEl: `.swiper-button-next`,
        }}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper_cont"
      >
        <div className="swiper-button-prev">
          <img src={prevButtonImage} alt="Previous" />
        </div>
        <div className="swiper-button-next">
          <img src={nextButtonImage} alt="Next" />
        </div>

        <SwiperSlide>sss</SwiperSlide>
      </Swiper>
    </div>
  );
};
