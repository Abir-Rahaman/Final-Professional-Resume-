import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../Assets/img/logo.png'

const Navbar = () => {
    let [open,setOpen]=useState(false);
    return (
        <div className='n-wrapper flex justify-around mt-14'>
        <div className="n-left">
            <div className="n-logo flex cursor-pointer">
                 <img src={logo} alt="" />
            </div>
        </div>
        <div className="flex">
            <div className="n-list ">
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-16 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primary lg:bg-white font-bold md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-0 ':'top-[-490px]'}`}>
                    <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 text-center lg:text-black text-white lg:pl-16'>Home</li>
                    <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 text-center lg:text-black text-white lg:pl-16'>About</li>
                    <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 text-center lg:text-black text-white lg:pl-16'>Skill</li>
                    <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 text-center lg:text-black text-white lg:pl-16'>Works</li>
                    <li className='text-xl mt-3 cursor-pointer hover:text-primary duration-700 text-center lg:text-black text-white lg:pl-16'>Contact</li>
                </ul>
            </div>
            <button className="btn btn-outline btn-primary font-bold rounded-full hidden lg:block  px-10 pt-1 lg:ml-9">Hire Me</button>
        </div>
        
    </div>


    );
};

export default Navbar;
