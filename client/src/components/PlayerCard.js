import React from 'react';
import axios from 'axios';
import PlayerData from './PlayerData';

class PlayerCard extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                console.log(response.data)
                this.setState({ players: response.data });
            }, [])
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.players.map((player, index) => (
                    <PlayerData player={player} key={index} />
                ))}
            </div>
        )
    }
}

export default PlayerCard;