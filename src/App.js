import React, { useState, useEffect } from "react";
import { BiMoviePlay } from "react-icons/bi";

const API_URL = "https://www.omdbapi.com?apikey=6df9f16d";

const App = () => {
  const [movieSearchInput, setMovieSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);
  const [WatchLaterDropDown, setWatchLaterDropDown] = useState(false);

  useEffect(() => {
    getMovies("I");
  }, []);

  const getMovies = async (movieName) => {
    const response = await fetch(`${API_URL}&s=${movieName}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  const handleWatchLaterDropDown = () => {
    setWatchLaterDropDown(!WatchLaterDropDown);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    getMovies(movieSearchInput);
    setMovieSearchInput("");
  };

  const handleAddToWatchLater = (moviesData) => {
    const newWatchLaterMovies = [...watchLaterMovies, moviesData];
    setWatchLaterMovies(newWatchLaterMovies);
  };

  console.log(watchLaterMovies);

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

      <div className="fixed top-2 right-2 flex flex-col items-center justify-end bg-white rounded-md">
        <BiMoviePlay
          className="h-10 w-10 cursor-pointer font-bold"
          onClick={handleWatchLaterDropDown}
        />
        <span className="text-md font-bold">{watchLaterMovies.length}</span>
      </div>

      <div
        className={
          WatchLaterDropDown
            ? "flex flex-col h-[250px] w-[320px] bg-white gap-2 justify-start items-center p-2 fixed top-20 right-2  overflow-x-hidden overflow-scroll rounded-md"
            : "hidden"
        }>
        {watchLaterMovies.length ? (
          watchLaterMovies.map((watchLaterMovie) => (
            <div className="flex items-center justify-start w-[300px] border-black border-b-2 bg-black py-2 px-2 rounded-lg text-white">
              <div className="mr-3">
                <img
                  src={watchLaterMovie.Poster}
                  alt=""
                  className="h-[60px] w-[60px] rounded-[50%] object-cover"
                />
              </div>

              <div>
                <h3 className="text-sm">{watchLaterMovie.Title}</h3>
                <p>
                  Type:{" "}
                  <span className="font-bold text-yellow-200">
                    {watchLaterMovie.Type}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-[100px]">
            <h1 className="text-center">No Movies found</h1>
          </div>
        )}
      </div>

      <h1 className="font-bold text-6xl sm:px-10 text-white text-center">
        Movies
      </h1>
      <div className="max-w-[1240px] mx-auto py-8 px-4 text-left grid place-items-center grid-rows-none md:grid-cols-3 gap-2 md:gap-4">
        {movies?.length > 0 ? (
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
              <div className="flex flex-col justify-start items-start text-left pt-4 px-2">
                <h3 className="text-sm mb-1 font-bold">{movie.Title}</h3>
                <p className="text-center">
                  Type: {""}
                  <span className="font-bold text-yellow-200">
                    {movie.Type}
                  </span>
                </p>
              </div>

              <div className="flex justify-between items-center pr-4">
                <p className="text-sm px-2 mt-1">Released year: {movie.Year}</p>

                <button
                  className="text-sm capitalize bg-[white] text-black px-4 py-2 rounded-md"
                  onClick={() => handleAddToWatchLater(movie)}>
                  watch later
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="h-screen text-center text-lg font-bold">
            No Movies found
          </h3>
        )}
      </div>
    </div>
  );
};

export default App;
