import React, { useEffect, useState } from "react";
import axios from "axios";

function MatchHistory({ platform, playerName }) {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/matchHistory/${platform}/${playerName}`
        );
        setMatches(response.data.data.items);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [platform, playerName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-4">
      {matches.map((match, index) => (
        <div key={index} className="bg-gray-700 shadow rounded p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Match {index + 1}
            </h3>
            {match.stats.level && (
              <p className="text-gray-400">
                Level {match.stats.level.displayValue}
              </p>
            )}
          </div>
          <div className="grid items-center justify-end gap-4 grid-cols-5">
            {match.stats.kills && (
              <div className="border border-gray-600 rounded p-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  Kills
                </p>
                <p className="text-3xl font-semibold text-white">
                  {match.stats.kills.displayValue}
                </p>
              </div>
            )}
            {match.stats.damage && (
              <div className="border border-gray-600 rounded p-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  Damage
                </p>
                <p className="text-3xl font-semibold text-white">
                  {match.stats.damage.displayValue}
                </p>
              </div>
            )}
            {match.stats.headshots && (
              <div className="border border-gray-600 rounded p-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  Headshots
                </p>
                <p className="text-3xl font-semibold text-white">
                  {match.stats.headshots.displayValue}
                </p>
              </div>
            )}
          </div>
          {/* Render additional match details here */}
        </div>
      ))}
    </div>
  );
}

export default MatchHistory;
