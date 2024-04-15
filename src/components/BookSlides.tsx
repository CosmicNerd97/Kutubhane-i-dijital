/** @format */

import { setBooksOfTheWeek } from "@/store/booksSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

const BookSlides = () => {
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

  return books === undefined
    ? null
    : books.map(({ cover_edition_key }: { cover_edition_key: string }) => (
        <SwiperSlide key={cover_edition_key}>hi</SwiperSlide>
      ));
};

export default BookSlides;
