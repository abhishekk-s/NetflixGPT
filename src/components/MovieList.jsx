import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className=" text-white py-2 px-10">
      <h1 className="text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scroll no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
