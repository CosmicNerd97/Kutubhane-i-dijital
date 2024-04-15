/** @format */

import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch(
    "https://openlibrary.org/search.json?q=Harry+Potter&lang=eng&sort=readinglog&limit=5&fields=title,cover_edition_key,author_name"
  );
  const data = await res.json();
  return NextResponse.json(data.docs);
  //get the cover edition id and its gonnna give the current cover of the book
};
