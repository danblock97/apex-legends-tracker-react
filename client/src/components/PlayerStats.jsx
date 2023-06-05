import React from 'react';

const PlayerStats = ({ playerData }) => {
  return (
    playerData && (
      <div className="mt-8 p-6 bg-gray-700 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white">Lifetime Overview</h2>
        <div className="flex items-center mb-4">
          {playerData.data.segments[0].stats.rankScore?.metadata.rankName && (
            <img
              src={playerData.data.segments[0].stats.rankScore.metadata.iconUrl}
              alt={playerData.data.segments[0].stats.rankScore.metadata.rankName}
              className="w-12 h-12 mr-4"
            />
          )}
          <div>
            <p className="text-xl font-semibold text-white">
              {playerData.data.segments[0].stats.rankScore?.metadata.rankName} 
              {playerData.data.segments[0].stats.rankScore?.displayValue} LP
            </p>
            <p className="text-gray-300">
              Level: {playerData.data.segments[0].stats.level?.displayValue}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
              {playerData.data.segments[0].stats.kills && (
                <div className="border border-gray-600 rounded p-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    Kills
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    {playerData.data.segments[0].stats.kills.displayValue}
                  </p>
                </div>
              )}
              {playerData.data.segments[0].stats.damage && (
                <div className="border border-gray-600 rounded p-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    Damage
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    {playerData.data.segments[0].stats.damage.displayValue}
                  </p>
                </div>
              )}
              {playerData.data.segments[0].stats.headshots && (
                <div className="border border-gray-600 rounded p-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    Headshots
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    {playerData.data.segments[0].stats.headshots.displayValue}
                  </p>
                </div>
              )}
              {playerData.data.segments[0].stats.carePackageKills && (
                <div className="border border-gray-600 rounded p-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    Care Package Kills
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    {
                      playerData.data.segments[0].stats.carePackageKills
                        .displayValue
                    }
                  </p>
                </div>
              )}
              {playerData.data.segments[0].stats.arenaWinStreak && (
                <div className="border border-gray-600 rounded p-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    Arena Win Streak
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    {
                      playerData.data.segments[0].stats.arenaWinStreak
                        .displayValue
                    }
                  </p>
                </div>
              )}
              {/* Add more data points as needed */}
            </div>
      </div>
    )
  );
};

export default PlayerStats;
