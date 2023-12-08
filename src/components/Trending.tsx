import React from "react";

export default function Trending({ movies }: { movies: TMovie[] }) {
  const trendingMovies = movies.filter((movie: TMovie) => movie.isTrending);

  return (
    <div>
      {trendingMovies.map((movie: TMovie, index: number) => {
        return <h2 key={index}>trending: {movie.title}</h2>;
      })}
    </div>
  );
}
