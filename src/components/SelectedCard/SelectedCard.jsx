import React from 'react';
import deleteIcon from '../../assets/delete.png'

const SelectedCard = ({ player, removePlayer }) => {
    const handleRemove = () =>{
        removePlayer(player)
    }
    return (
        <div className='border-2 border-gray-300 p-3 flex justify-between items-center rounded-xl'>
            <div className='flex justify-between items-center'>
                <img className='h-[50px] w-[50px] rounded-xl' src={player.player_image} alt="" />
                <div className='ml-2'>
                    <h1>{player.player_name}</h1>
                    <p className='text-xs'>{player.playing_role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img src={deleteIcon} alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;