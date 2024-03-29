import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movie.id);
  return (
    <div className="md:w-screen">
      <iframe
        className="w-full md:w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?autoplay=1&mute=1"} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
