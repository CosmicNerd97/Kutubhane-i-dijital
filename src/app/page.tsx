/** @format */
"use client";
import { useRef, useEffect, Suspense } from "react";
import BookSlides from "@/components/BookSlides";
import store from "../store/store";
import { Provider } from "react-redux";

export default function Home() {
  const swiper = useRef<any>(null);
  const keyPressHandler = (e: KeyboardEvent) => {
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

  function SwiperRefCallback(swiperInstance: any) {
    swiper.current = swiperInstance;
  }

  return (
    <main
      className="flex flex-col justify-center"
      style={{
        height: "calc(100vh - 69px)",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Provider store={store}>
        <Suspense>
          <BookSlides Callback={SwiperRefCallback} />
        </Suspense>
      </Provider>
    </main>
  );
}
