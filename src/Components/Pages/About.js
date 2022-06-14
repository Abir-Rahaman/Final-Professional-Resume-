import React from 'react';
import about from '../../Assets/img/about-pro.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about-banner bg-cover mt-14'>
         <h1 className='text-5xl font-bold text-warning text-center flex justify-center items-center  ml-64'><div class="avatar px-10">
            <div class="w-24  rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <img src={about} />
            </div>
          
         </div> About Me  </h1>
         <div className=" flex justify-center ml-80 mt-10">
         <div class="card w-96 bg-base-300 shadow-2xl">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
         </div>
         
        </div>
    );
};

export default About;