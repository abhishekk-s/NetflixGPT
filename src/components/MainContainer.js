import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const clicked = useSelector((store) => store.movies?.clicked);
  const clickedMovie = useSelector((store) => store.movies?.clickedMovie);
  if (movies === null) return;
  let topMovie = movies[0];
  if (clicked) {
    topMovie = clickedMovie;
  }

  return (
    <div className="md:pt-0 bg-black pt-[30%]">
      <VideoTitle movie={topMovie} />
      <VideoBackground movie={topMovie} />
    </div>
  );
};

export default MainContainer;
