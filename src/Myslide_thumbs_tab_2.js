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

export default () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [TabTitle, setTabTitle] = useState([
    "관심종목",
    "주식",
    "지수",
    "외한",
    "선물",
    "ETF",
  ]);

  return (
    <div className="market_view">
      {/* slide_title_tab */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        spaceBetween={0}
        slidesPerView={4}
        className="mySwiper_thumbs"
      >
        {TabTitle.map((title, i) => (
          <SwiperSlide key={i}>
            <span>{title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* slide_content */}
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

        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};
