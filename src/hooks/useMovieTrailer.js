import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const movieUpdate = useSelector((store) => store.movies.clickedMovie);
  useEffect(() => {
    getMovieVidoes();
  }, [movieUpdate]);
  const getMovieVidoes = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?",
      API_OPTIONS
    );
    const json = await data.json();
    const trailerList = json.results.filter(
      (video) => video.type === "Trailer"
    );
    let trailer =
      trailerList.length !== 0
        ? trailerList.length >= 2
          ? trailerList[1]
          : trailerList[0]
        : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};
export default useMovieTrailer;
