import React from 'react';

function PlayerData({ player }) {
    return (
        <div className='player-data'>
            <h2>{player.name}</h2>
            <p>{player.country}</p>
            <p>Appeared in {player.searches} queries</p>
        </div>
    )
}

export default PlayerData;