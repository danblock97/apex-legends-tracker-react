import React from 'react';
import { RiXboxFill, RiPlaystationFill, RiWindowsFill } from 'react-icons/ri';

const SearchBar = ({ platform, handlePlatformChange, playerName, setPlayerName, handleSearch }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="flex">
        <RiWindowsFill
          className={`text-4xl cursor-pointer ${platform === "origin" ? "text-[#0078d4]" : "text-gray-500"}`}
          onClick={() => handlePlatformChange("origin")}
        />
        <RiPlaystationFill
          className={`text-4xl cursor-pointer ${platform === "psn" ? "text-[#003791]" : "text-gray-500"}`}
          onClick={() => handlePlatformChange("psn")}
        />
        <RiXboxFill
          className={`text-4xl cursor-pointer ${platform === "xbl" ? "text-[#9bc848]" : "text-gray-500"}`}
          onClick={() => handlePlatformChange("xbl")}
        />
      </div>
      <input
        type="text"
        id="playerName"
        className="border p-2 rounded ml-4"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
