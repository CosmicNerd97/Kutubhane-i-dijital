/** @format */

import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch(
    "https://openlibrary.org/search.json?q=Harry+Potter&lang=eng&sort=readinglog&limit=10&fields=title,cover_edition_key,author_name,number_of_pages_median"
  );
  const data = await res.json();
  const books = data.docs.filter((book: any) => book.title.includes("Harry"));
  return NextResponse.json(books);
  //get the cover edition id and its gonnna give the current cover of the book
};
