import React from 'react';
import './Header.css';
import profile from '../../../public/images/profile.jpg'

const Header = () => {
    return (
        <div className='flex justify-between items-center pb-s mx-10 mt-6 border-b'>
            <h1 className='font-bold text-4xl'>Programmer's Paradise</h1>
            <figure className='w-16 h-16 '>
            <img className='rounded-full' src={profile} alt="" />
            </figure>
        </div>
    );
};

export default Header;