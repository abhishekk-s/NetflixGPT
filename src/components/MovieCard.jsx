import React from "react";
import { MOVIE_POSTERS } from "../utils/Constants";

const MovieCard = ({ poster }) => {
  if (!poster) return null;
  return (
    <div>
      <img
        className="w-36 md:w-44 pr-4 max-w-none"
        alt="movie-poster"
        src={MOVIE_POSTERS + poster}
      />
    </div>
  );
};

export default MovieCard;
