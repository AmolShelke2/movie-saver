import React, { useState, useEffect } from "react";
import { api_key } from "./utils/ApiKey";

const App = () => {
  const [movieSearchInput, setMovieSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  const imagePath = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    getMovies("Bollywood");
  }, []);

  const getMovies = async (url) => {
    const res = await fetch(url);

    const data = await res.json();
    setMovies(data.results);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (movieSearchInput && movieSearchInput !== "") {
      getMovies(SEARCH_API + movieSearchInput);

      setMovieSearchInput("");
    } else {
      window.location.reload();
    }
  };

  const movieSearchInputHandler = (e) => {
    setMovieSearchInput(e.target.value);
  };

  return (
    <div className="h-full py-4 bg-gradient-to-tr from-[#2193b0] to-[#ffc3a0]">
      <div className="flex justify-center flex-col text-center">
        <h1 className="text-4xl text-white font-bold">Movie Schedule</h1>
        <div className="mb-8">
          <form className="p-4" onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="bg-white text-black font-bold rounded-md py-4 px-8 shadow-sm w-[300px] focus:outline-none"
              value={movieSearchInput}
              onChange={movieSearchInputHandler}
            />

            <button
              type="submit"
              onSubmit={formSubmitHandler}
              className="ml-2 bg-[#2193b0] shadow-md text-white px-6 py-2 rounded-md">
              Search
            </button>
          </form>
        </div>
      </div>
      <h1 className="font-bold text-6xl sm:px-10 text-white text-center">
        Movies
      </h1>
      <div className="max-w-[1240px] mx-auto py-8 px-4 text-left grid place-items-center grid-rows-none md:grid-cols-3 gap-2 md:gap-4">
        {movies.length &&
          movies.results.map((movie) => (
            <div
              key={Math.random()}
              className="h-[520px] bg-[#6e3530] rounded-md text-white w-[400px]">
              <div>
                <img
                  src={
                    movie.backdrop_path
                      ? imagePath + movie.backdrop_path
                      : "https://staticc.sportskeeda.com/editor/2023/02/d7a96-16775298337085-1920.jpg"
                  }
                  alt="/"
                  className="h-[300px] w-full top-0 left-0 rounded-md"
                />
              </div>
              <div className="flex justify-between items-center text-center h-[50px] px-6 py-2 mb-1">
                <h3 className="text-sm font-bold">{movie.original_title}</h3>
                <p className="text-center">
                  Rating{" "}
                  <span className="font-bold text-yellow-200">
                    {movie.vote_average}
                  </span>
                </p>
              </div>
              <div className="flex flex-col text-left px-6 py-2 items-start">
                <p className="text-sm overflow-hidden h-[80px] mb-2">
                  {movie.overview}
                </p>
                <p className="text-md">Release Date: {movie.release_date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
