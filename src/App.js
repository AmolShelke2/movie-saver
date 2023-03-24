import React, { useState } from "react";

const App = () => {
  const [movieSearchInput, setMovieSearchInput] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setMovieSearchInput("");
  };

  const movieSearchInputHandler = (e) => {
    setMovieSearchInput(e.target.value);
  };

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
      </div>
    </div>
  );
};

export default App;
