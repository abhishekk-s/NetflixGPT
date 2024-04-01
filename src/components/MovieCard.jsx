import React, { useState } from "react";
import { MOVIE_POSTERS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addClickedMovie, updateClicked } from "../utils/moviesSlice";


const MovieCard = ({ movie }) => {
  const [clickedMovie,setClickedMovie] = useState(movie);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addClickedMovie(clickedMovie));
    dispatch(updateClicked());
    setClickedMovie(movie);
    console.log(clickedMovie.original_title);
  }
  if (!movie.poster_path) return null;
  return (
    <div>
      <img
        className="w-36 md:w-44 pr-4 max-w-none cursor-pointer"
        alt="movie-poster"
        src={MOVIE_POSTERS + movie.poster_path}
        onClick={handleClick}
      />
    </div>
  );
};

export default MovieCard;
