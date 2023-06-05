/*eslint-disable*/
import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

import prevButtonImage from "./imgs/button/chevron-left.svg";
import nextButtonImage from "./imgs/button/chevron-right.svg";

const data = [
  {
    id: 1,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    imgsTitle: "슬라이드이미지1",
  },
  {
    id: 2,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    imgsTitle: "슬라이드이미지2",
  },
  {
    id: 3,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    imgsTitle: "슬라이드이미지3",
  },
  {
    id: 4,
    imgs: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    imgsTitle: "슬라이드이미지4",
  },
];

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={{
        prevEl: `.swiper-button-prev`,
        nextEl: `.swiper-button-next`,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <div className="swiper-button-prev">
        <img src={prevButtonImage} alt="Previous" />
      </div>
      <div className="swiper-button-next">
        <img src={nextButtonImage} alt="Next" />
      </div>
      {data.map((user) => (
        <SwiperSlide key={user.id}>
          {/* <div>{user.testimonial}</div> */}
          <img src={user.imgs} alt={user.imgsTitle} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
