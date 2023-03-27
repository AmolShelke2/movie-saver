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
      <h1 className="font-bold text-4xl sm:px-10 text-white text-center">
        Movies
      </h1>
      <div className="max-w-[1240px] mx-auto py-8 px-4 text-left grid place-items-center grid-rows-none md:grid-cols-3 gap-2 md:gap-4">
        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              ullam.
            </p>
            <p>Release Date: 15 February 2007</p>
          </div>
        </div>

        <div className="h-[500px] bg-[#C3A9FF] rounded-md text-white w-[400px]">
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c36b1dbf-4dbb-46d1-8ac7-79313cfceb24/dd622pk-9b83f2b9-45f6-4ea7-812a-831f16e08d1a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNmIxZGJmLTRkYmItNDZkMS04YWM3LTc5MzEzY2ZjZWIyNFwvZGQ2MjJway05YjgzZjJiOS00NWY2LTRlYTctODEyYS04MzFmMTZlMDhkMWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cscPeAsHtDjd7_hJXe1vSI42SmyqVnA7F9dbg0W4IxM"
              alt="/"
              className="h-[350px] w-full top-0 left-0 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-2 mb-1">
            <h3 className="text-md font-bold">Naruto Shippuedin</h3>
            <p className="text-center">
              Rating <span className="font-bold text-yellow-200">6.9</span>
            </p>
          </div>
          <div className="flex flex-col text-left px-6 py-2 items-start">
            <p className="text-md mb-2 space-x-1">
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
