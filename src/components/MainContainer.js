import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return;
    const topMovie = movies[0];
  return (
    <div>
      <VideoTitle movie={topMovie}/>
      <VideoBackground movie={topMovie}/>
    </div>
  );
};

export default MainContainer;
