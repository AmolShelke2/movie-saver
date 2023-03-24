import React from "react";

const App = () => {
  return (
    <div className="flex text-center justify-center h-screen py-4 bg-gradient-to-tr from-[#2193b0] to-[#ffc3a0]">
      <div>
        <h1 className="text-4xl text-white font-bold shadow-sm">
          Movie Schedule
        </h1>
        <form className="p-4">
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="bg-white text-black font-bold rounded-md py-4 px-8 shadow-sm w-[300px] focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default App;
