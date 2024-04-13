/** @format */
"use client";

import { Box } from "@radix-ui/themes";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Controller,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useEffect } from "react";

export default function Home() {
  const swiper = useRef<any>(null);

  const keyPressHandler = (e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "ArrowRight" || e.key === "d") {
      if (swiper.current) {
        swiper.current.slideNext();
      }
    }
    if (e.key === "ArrowLeft" || e.key === "a") {
      if (swiper.current) {
        swiper.current.slidePrev();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => window.removeEventListener("keydown", keyPressHandler);
  }, []);

  return (
    <main
      className="flex flex-col justify-center"
      style={{
        height: "calc(100vh - 69px)",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Swiper
        style={{
          maxWidth: "1400px",
          minHeight: "300px",
          cursor: "grab",
        }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          A11y,
          Controller,
        ]}
        spaceBetween={0}
        autoplay
        slidesPerView={3}
        navigation
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiperInstance) => (swiper.current = swiperInstance)}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            width: "460",
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex", justifyContent: "center", width: "460" }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex", justifyContent: "center", width: "460" }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex", justifyContent: "center", width: "460" }}
        >
          Slide 4
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
