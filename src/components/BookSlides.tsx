/** @format */

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { setBooksOfTheWeek } from "@/store/booksSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const BookSlides = ({ Callback }: any) => {
  const books = useSelector((state: any) => state.books.booksOfTheWeek);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await (await fetch("./api/fetchBooks")).json();
      dispatch(setBooksOfTheWeek(data));
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return books === undefined ? (
    <SwiperSlide></SwiperSlide>
  ) : (
    <Swiper
      style={{
        maxWidth: "1400px",
        maxHeight: "600px",
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
      onSwiper={(swiperInstance) => Callback(swiperInstance)}
    >
      {books.map(({ cover_edition_key }: { cover_edition_key: string }) => (
        <SwiperSlide
          key={cover_edition_key}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "30px",
          }}
        >
          <Image
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}-L.jpg`}
            alt="Book Cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookSlides;
