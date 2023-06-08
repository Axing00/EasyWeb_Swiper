/*eslint-disable*/
import React, { Component, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

// import prevButtonImage from "./imgs/button/chevron-left.svg";
// import nextButtonImage from "./imgs/button/chevron-right.svg";
import plus from "./imgs/button/plus.svg";

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
      {/* slide_title_tab S*/}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        spaceBetween={16}
        slidesPerView={3}
        className="mySwiper_thumbs"
      >
        {TabTitle.map((title, i) => (
          <SwiperSlide key={i}>
            <span>{title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* slide_title_tab E*/}
      {/* slide_content S*/}
      <Swiper
        modules={[Thumbs]}
        spaceBetween={0}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper_cont"
      >
        <SwiperSlide>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            nested={true} // 중첩된 슬라이더를 지원하기 위해 nested prop 추가
            key="nested-swiper" // 각각의 중첩된 슬라이더에 고유한 key prop 추가
          >
            <SwiperSlide>
              <a href="#none" title="">
                <p className="btn_condition btn_red">
                  적극 매수
                  <span className="plus_icon">
                    <img src={plus} alt="plus_icon" />
                  </span>
                </p>
              </a>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            nested={true} // 중첩된 슬라이더를 지원하기 위해 nested prop 추가
            key="nested-swiper" // 각각의 중첩된 슬라이더에 고유한 key prop 추가
          >
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
      {/* slide_content E*/}
    </div>
  );
};
