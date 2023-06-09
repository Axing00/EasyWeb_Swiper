/*eslint-disable*/
import React, { Component, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import "./Myslide_thumbs_tab2.scss";
// import img
import plus from "./imgs/button/plus.svg";
import x_icon from "./imgs/button/x.svg";
import EU_flag from "./imgs/flag/EU.svg";
import US_flag from "./imgs/flag/US.svg";
import sd_pluse_icon from "./imgs/button/slide_plus.svg";

const MyslideThumbsTab = ({ allowTouchMove, ...restProps }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [MarketTrends, setMarketTrends] = useState([
    "관심종목",
    "주식",
    "지수",
    "외한",
    "선물",
    "ETF",
  ]);
  const swiperOptions = {
    effect: "none",
    allowTouchMove: allowTouchMove,
  };

  return (
    <div className="market_view">
      {/* slide_title_tab S*/}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        spaceBetween={16}
        slidesPerView={6}
        className="mySwiper_thumbs"
      >
        {MarketTrends.map((title, i) => (
          <SwiperSlide key={i}>
            <span className="tab_tit">{title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* slide_title_tab E*/}
      {/* slide_content S*/}
      <Swiper
        {...swiperOptions}
        {...restProps}
        modules={[Thumbs]}
        // effect={"fade"}
        spaceBetween={0}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper_cont"
      >
        {MarketTrends.map((content, i) => (
          <SwiperSlide key={i}>
            <Swiper
              spaceBetween={16}
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
                    <div className="graph_area mg_t08">차트영역</div>
                    <div className="news_area mg_t08">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. At, corporis enim pariatur architecto porro optio
                        assumenda aliquid. Vel laudantium incidunt in quod animi
                        impedit minima, asperiores consectetur, laborum sit
                        unde?
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#none" title="">
                  <div className="sd_top mg_0408">
                    <p className="btn_condition btn_green mg_08">
                      적극 매도
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
                        <p className="_nation">Stock Item</p>
                        <p className="_unit">005930</p>
                      </div>
                    </div>
                    <div className="rates_area mg_t08">
                      <p className="bid">6,693</p>
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
                    <div className="graph_area mg_t08">차트영역</div>
                    <div className="news_area mg_t08">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. At, corporis enim pariatur architecto porro optio
                        assumenda aliquid. Vel laudantium incidunt in quod animi
                        impedit minima, asperiores consectetur, laborum sit
                        unde?
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#none" title="">
                  <div className="sd_top mg_0408">
                    <p className="btn_condition btn_green mg_08">
                      적극 매도
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
                        <p className="_nation">Stock Item</p>
                        <p className="_unit">005930</p>
                      </div>
                    </div>
                    <div className="rates_area mg_t08">
                      <p className="bid">6,693</p>
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
                    <div className="graph_area mg_t08">차트영역</div>
                    <div className="news_area mg_t08">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. At, corporis enim pariatur architecto porro optio
                        assumenda aliquid. Vel laudantium incidunt in quod animi
                        impedit minima, asperiores consectetur, laborum sit
                        unde?
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#none" title="" className="emty_slide">
                  <figure className="add_icon">
                    <img src={sd_pluse_icon} alt="" />
                  </figure>
                </a>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* slide_content E*/}
    </div>
  );
};

export default MyslideThumbsTab;
