import React from "react";
import { useNavigate } from "react-router-dom";

export default function Movies({
  filteredMovies,
}: {
  filteredMovies: TMovie[] | null;
}) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Movies</h1>
      {filteredMovies?.map((movie: TMovie, index: number) => {
        return <h2 key={index}>{movie.title}</h2>;
      })}

      <button
        onClick={() => {
          localStorage.setItem("logined", JSON.stringify(false));
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
