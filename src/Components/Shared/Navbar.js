import React from 'react';
import logo from '../../Assets/img/logo.png'

const Navbar = () => {
    return (
        <div className='n-wrapper flex justify-around mt-14'>
            <div className="n-left">
                <div className="n-logo flex cursor-pointer">
                     <img src={logo} alt="" />F
                </div>
            </div>
            <div className="n-right flex">
                <div className="n-list">
                    <ul className='flex font-bold mr-16'>
                        <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 pl-16'>Home</li>
                        <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 pl-16'>About</li>
                        <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 pl-16'>Skill</li>
                        <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 pl-16'>Works</li>
                        <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 pl-16'>Contact</li>
                    </ul>
                </div>
                <button class="btn btn-outline btn-primary font-bold rounded-full px-10 pt-1">Contact Me</button>
            </div>
            
        </div>
    );
};

export default Navbar;