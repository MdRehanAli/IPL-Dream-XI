import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({ purchasePlayers, removePlayer }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col gap-4'>
                {
                    purchasePlayers.map(player => <SelectedCard key={player.id} player={player} removePlayer={removePlayer}></SelectedCard>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;