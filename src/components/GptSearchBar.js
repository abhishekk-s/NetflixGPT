import React, { useRef } from "react";
import lang from "../utils/translation";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { addGptSearchMovies } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchTMDBMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json?.results;
  };
  const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current?.value +
    ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const openAiRequest = async () => {
    try {
      const searchResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      // if(!searchResults.choices) show error page
      const gptMovies = searchResults?.choices[0]?.message?.content.split(", ");
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const handleGptSearch = async () => {
    const gptMovieResults = await openAiRequest(); 
    const gptDummyMoviesData = [
      "Gadar",
      " Sholay",
      " Don",
      " Golmaal",
      " Koi Mil Gaya",
    ];

    const promiseArray = gptDummyMoviesData.map((movie) =>
      searchTMDBMovies(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptSearchMovies({
        movieNames: gptDummyMoviesData,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 md:w-3/5 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="m-4 p-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchBarPlaceholder}
        />
        <button
          className="bg-red-700 text-white m-4 p-4 rounded-lg col-span-3"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
