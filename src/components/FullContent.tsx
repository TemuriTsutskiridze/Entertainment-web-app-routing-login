import React from "react";
import Header from "./Header";
import Movies from "./Movies";

import { useParams } from "react-router-dom";

export default function FullContent({
  children,
  movies,
}: {
  children: React.ReactNode;
  movies: TMovie[];
}) {
  const { filmNav } = useParams();

  const filteredMovies =
    filmNav === "home"
      ? movies
      : filmNav === "movies"
      ? movies.filter((movie: TMovie) => movie.category === "Movie")
      : filmNav === "tv-series"
      ? movies.filter((movie: TMovie) => movie.category === "TV Series")
      : filmNav === "bookmarks"
      ? movies.filter((movie: TMovie) => movie.isBookmarked)
      : null;

  return (
    <div>
      <Header />
      {filmNav === "home" ? children : null}
      <Movies filteredMovies={filteredMovies} />
    </div>
  );
}
