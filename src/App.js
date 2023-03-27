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
    <div className="h-screen py-4 bg-gradient-to-tr from-[#2193b0] to-[#ffc3a0] overflow-hidden">
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
      <h1 className="font-bold text-4xl sm:px-10 text-white">Movies</h1>
      <div className="max-w-[1240px] py-8 px-4 text-left grid place-items-center grid-rows-none md:grid-cols-2 gap-2 md:gap-4">
        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div>
            <h3>Naruto Shippuedin</h3>
            <p>Rating 6.9</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
