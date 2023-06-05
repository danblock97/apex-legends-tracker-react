import React from 'react';

const PlayerLegends = ({ playerData, activeLegendName }) => {
  return (
    playerData && (
      <div className="mt-8 p-6 bg-gray-700 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white">Legends</h2>
        {playerData.data.segments.slice(1).map((segment, index) => (
          <div key={index} className="mt-8 p-6 bg-gray-700 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {segment.metadata.name}
              {segment.metadata.name === activeLegendName && " (Current)"}
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <img
                src={segment.metadata.portraitImageUrl}
                alt={segment.metadata.name}
                className="w-24 h-24 mr-4 self-center"
              />
              {segment.stats.kills && (
                    <div className="border border-gray-600 rounded p-4">
                      <p className="text-sm text-gray-300 uppercase tracking-wide">
                        Kills
                      </p>
                      <p className="text-3xl font-semibold text-white">
                        {segment.stats.kills.displayValue}
                      </p>
                    </div>
                  )}
                  {segment.stats.damage && (
                    <div className="border border-gray-600 rounded p-4">
                      <p className="text-sm text-gray-300 uppercase tracking-wide">
                        Damage
                      </p>
                      <p className="text-3xl font-semibold text-white">
                        {segment.stats.damage.displayValue}
                      </p>
                    </div>
                  )}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default PlayerLegends;