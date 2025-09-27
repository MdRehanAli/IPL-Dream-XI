import React, { useState } from 'react';
import userIcon from '../../assets/user.png'
import flagIcon from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasePlayers, setPurchasePlayers }) => {

    const [isSelected, seIsSelected] = useState(false)

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price)
        if (availableBalance < playerPrice) {
            toast("Not enough Coin.")
            return
        }
        if (purchasePlayers.length ===6) {
            toast("6 players already added.")
            return
        }
        seIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice);

        setPurchasePlayers([...purchasePlayers, playerData])
    }

    return (
        <div className="card bg-base-100 shadow-sm p-4">
            <figure>
                <img
                    className="max-w-full h-[300px] object-top rounded-2xl"
                    src={player.player_image}
                    alt="Shoes" />
            </figure>
            <div className="mt-4">
                <div className="flex">
                    <img src={userIcon} alt="" />
                    <h2 className="card-title ml-2">{player.player_name}</h2>
                </div>

                <div className="flex justify-between mt-4 border-b-1 pb-2 border-gray-400">
                    <div className="flex items-center">
                        <img className="w-[20px] h-[20px]" src={flagIcon} alt="" />
                        <h2 className="ml-2">{player.player_country}</h2>
                    </div>
                    <button className="btn">{player.playing_role}</button>

                </div>

                <div className="flex justify-between font-bold my-4">
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className="flex justify-between">
                    <span className='font-bold'>{player.batting_style}</span>
                    <span>{player.bowling_style}</span>
                </div>


                <div className="card-actions flex justify-between items-center my-4">
                    <p className="font-bold">Base Price: {player.price}</p>
                    <button disabled={isSelected} onClick={() => {
                        handleSelected(player)
                    }} className="btn">{isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;