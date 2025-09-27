import React from 'react';
import navImg from '../../assets/logo.png'
import dollar from '../../assets/dollar.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-7xl mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img className='w-[60px] h-[60px]' src={navImg} alt="" />
                    </a>
                </div>
                <div className="flex items-center">
                    <span className='mr-2'>6000000000</span>
                    <span className='mr-2'>coin</span>
                    <img src={dollar} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;