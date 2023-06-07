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

const data = [
  {
    id: 1,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    alt: "슬라이드이미지1",
  },
  {
    id: 2,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    alt: "슬라이드이미지2",
  },
  {
    id: 3,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    alt: "슬라이드이미지3",
  },
  {
    id: 4,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    alt: "슬라이드이미지4",
  },
  {
    id: 5,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    alt: "슬라이드이미지4",
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
        spaceBetween={20}
        slidesPerView={4}
        className="mySwiper_thumbs"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.imgs} alt={slide.alt} />
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
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.imgs} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
