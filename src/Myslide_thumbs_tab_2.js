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

// import img
import plus from "./imgs/button/plus.svg";
import x_icon from "./imgs/button/x.svg";
import EU_flag from "./imgs/flag/EU.svg";
import US_flag from "./imgs/flag/US.svg";

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
            <span className="tab_tit">{title}</span>
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
            spaceBetween={0}
            slidesPerView={1.5}
            nested={true} // 중첩된 슬라이더를 지원하기 위해 nested prop 추가
            key="nested-swiper" // 각각의 중첩된 슬라이더에 고유한 key prop 추가
          >
            <SwiperSlide>
              <a href="#none" title="">
                <div className="sd_top mg_0408">
                  <p className="btn_condition btn_red mg_08">
                    적극 매수
                    <span className="plus_icon">
                      <img src={plus} alt="plus_icon" />
                    </span>
                  </p>
                  <button className="delete_btn">
                    <figure>
                      <img src={x_icon} alt="x_icon" />
                    </figure>
                  </button>
                </div>
                <div className="sd_middle">
                  <div className="event_name">
                    <div className="flag_box">
                      <figure>
                        <img src={EU_flag} alt="유럽연합" />
                      </figure>
                      <figure>
                        <img src={US_flag} alt="미국" />
                      </figure>
                    </div>
                    <div className="title_box">
                      <p className="_nation">
                        EUR
                        <span className="__bar">/</span>
                        USD
                      </p>
                      <p className="_unit">
                        유로
                        <span className="__bar">/</span>
                        달러
                      </p>
                    </div>
                  </div>
                  <div className="rates_area mg_t08">
                    <p className="bid">1.072</p>
                    <div className="rates_change">
                      <p>
                        <i className="up xi-caret-up"></i>
                        <i className="down xi-caret-down icon_hide"></i>
                        <span>0.0038</span>
                      </p>
                      <p>
                        <i className="pluse xi-plus-min"></i>
                        <i className="minus xi-minus-min icon_hide"></i>
                        <span>0.36%</span>
                      </p>
                    </div>
                  </div>
                  <div className="graph_area mg_t08"></div>
                  <div className="news_area">
                    <p>Amet minim mollit non deserunt ullamco est sit</p>
                  </div>
                </div>
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
            nested={true}
            key="nested-swiper"
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
