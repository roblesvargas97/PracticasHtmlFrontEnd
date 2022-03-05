import React from 'react';
import {HomeIcon} from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='w-full h-[15vh] px-14 bg-primary rounded-b-2xl shadow-2xl font-Mulish flex items-center justify-between '>
            <img className='w-36' src='https://i.imgur.com/WhXvNmR.png' alt='logo Pizza Ready'/>
            <button
                onClick={()=> navigate('./')} 
                className='w-14 bg-secondary rounded-full flex items-center justify-center shadow-lg cursor-pointer'>
                <HomeIcon className='w-10 text-white' /> 
            </button>
        </header>
    );
}

export default Header;