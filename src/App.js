import React, { useState, useEffect } from "react";
const API_URL = "https://www.omdbapi.com?apikey=6df9f16d";

const App = () => {
  const [movieSearchInput, setMovieSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies("Naruto");
  }, []);

  const getMovies = async (movieName) => {
    const response = await fetch(`${API_URL}&s=${movieName}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    getMovies(movieSearchInput);
    setMovieSearchInput("");
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
              onChange={(e) => setMovieSearchInput(e.target.value)}
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
          movies.map((movie) => (
            <div
              key={Math.random()}
              className="h-[520px] bg-[#6e3530] rounded-md text-white w-[400px]">
              <div>
                <img
                  src={movie.Poster}
                  alt="/"
                  className="h-[400px] w-full top-0 left-0 rounded-md"
                />
              </div>
              <div className="flex flex-col justify-start items-start text-left pt-4 mb-1 px-2">
                <h3 className="text-sm font-bold">{movie.Title}</h3>
                <p className="text-center">
                  Type {""}
                  <span className="font-bold text-yellow-200">
                    {movie.Type}
                  </span>
                </p>
              </div>

              <p className="text-sm px-2 mt-1 absolute">
                Released year: {movie.Year}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
