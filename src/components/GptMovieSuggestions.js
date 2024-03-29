import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { gptMovies, gptMovieNames } = useSelector((store) => store.gptSearch);
  if (!gptMovieNames) return null;
  return (
    <div className="m-4 pb-6 text-white text-xl font-bold shadow-lg bg-black bg-opacity-90">
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
