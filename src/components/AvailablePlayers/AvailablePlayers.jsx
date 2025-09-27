import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise, setAvailableBalance, availableBalance, purchasePlayers, setPurchasePlayers}) => {

    const playerData = use(playerPromise)
    // console.log(playerData)
    return (
        <div className='max-w-7xl mx-auto'>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    playerData.map(player => <PlayerCard key={player.id} purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
                }
            </div>



        </div>
    );
};

export default AvailablePlayers;