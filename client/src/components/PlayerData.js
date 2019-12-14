import React from 'react';

function PlayerData({ player }) {
    return (
        <div className='player-container'>
            <div className='player-name'>
                <h2>{player.name}</h2>
            </div>
            <div className='player-info'>
                <h3>{player.country}</h3>
                <p>Appeared in {player.searches} queries</p>
            </div>
        </div>
    )
}

export default PlayerData;