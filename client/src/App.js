import React, { useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import PlayerStats from "./components/PlayerStats";
import PlayerLegends from "./components/PlayerLegends";

function App() {
  const [platform, setPlatform] = useState("origin");
  const [playerName, setPlayerName] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [activeLegendName, setActiveLegendName] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/search/${platform}/${encodeURIComponent(
          playerName
        )}`
      );
      setPlayerData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlatformChange = (selectedPlatform) => {
    setPlatform(selectedPlatform);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">
          Apex Legends Player Search
        </h1>

        <SearchBar
          platform={platform}
          handlePlatformChange={handlePlatformChange}
          playerName={playerName}
          setPlayerName={setPlayerName}
          handleSearch={handleSearch}
        />

        {playerData && <PlayerStats playerData={playerData} />}

        {playerData && (
          <PlayerLegends
            playerData={playerData}
            activeLegendName={activeLegendName}
          />
        )}
      </div>
    </div>
  );
}

export default App;
