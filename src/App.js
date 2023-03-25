import React, { useState, useEffect } from "react";
import { api_key } from "./utils/ApiKey";

const App = () => {
  const [movieSearchInput, setMovieSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setMovieSearchInput("");
  };

  const movieSearchInputHandler = (e) => {
    setMovieSearchInput(e.target.value);
  };

  const getMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getMovies();
  }, [api_key]);

  return (
    <div className="flex text-center justify-center h-screen py-4 bg-gradient-to-tr from-[#2193b0] to-[#ffc3a0]">
      <div>
        <h1 className="text-4xl text-white font-bold shadow-sm">
          Movie Schedule
        </h1>
        <div>
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
        <div className="container"></div>
      </div>
    </div>
  );
};

export default App;
