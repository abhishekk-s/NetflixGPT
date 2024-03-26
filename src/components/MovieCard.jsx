import React from "react";
import { MOVIE_POSTERS } from "../utils/Constants";

const MovieCard = ({ poster }) => {
  return (
    <div>
      <img
        className="w-40 pr-4 max-w-none"
        alt="movie-poster"
        src={MOVIE_POSTERS + poster}
      />
    </div>
  );
};

export default MovieCard;
