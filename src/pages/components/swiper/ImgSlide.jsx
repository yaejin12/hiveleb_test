import React, { useRef } from "react";
import "swiper/css";
import styles from "./ImgSlide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import prevIcon from "../../../assets/img/chevron-left-solid.svg";
import nextIcon from "../../../assets/img/chevron-right-solid.svg";
import { Navigation } from "swiper/modules";

/**
 *
 * @param slideImages : 이미지 url
 * @returns swiper 이미지 슬라이드
 */
function ImgSlide({ slideImages }) {
  const swiperRef = useRef(null);

  // 버튼 클릭 이벤트
  const prevClickHandler = () => {
    swiperRef.current?.slidePrev();
  };
  const nextClickHandler = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <Swiper
        className={styles.main_banner_swiper}
        loop={true}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slideImages?.map((image, index) => (
          <SwiperSlide key={image}>
            <img src={image} alt={`슬라이드 이미지 ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 버튼 커스텀 */}
      <nav className={styles.slide_button_Wrapper}>
        <button className={styles.prevButton} onClick={prevClickHandler}>
          <img src={prevIcon} alt="슬라이드 전 버튼" />
        </button>
        <button className={styles.nextButton} onClick={nextClickHandler}>
          <img src={nextIcon} alt="슬라이드 다음 버튼" />
        </button>
      </nav>
    </>
  );
}

export default ImgSlide;
