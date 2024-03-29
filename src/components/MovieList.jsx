import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" text-white py-2 md:px-10 px-6">
      <h1 className="text-xl md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scroll no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
