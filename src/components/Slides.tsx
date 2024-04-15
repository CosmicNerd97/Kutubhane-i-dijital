/** @format */

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";
import BookSlides from "./BookSlides";
import {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Suspense } from "react";
const Slides = async ({ Clallback }: { Clallback: Function }) => {
  return (
    <Swiper
      style={{
        maxWidth: "1400px",
        minHeight: "300px",
        cursor: "grab",
      }}
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y, Controller]}
      spaceBetween={0}
      autoplay
      slidesPerView={3}
      navigation
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiperInstance) => Clallback(swiperInstance)}
    >
      <Suspense>
        <BookSlides />
      </Suspense>
    </Swiper>
  );
};

export default Slides;
