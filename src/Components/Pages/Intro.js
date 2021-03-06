import React from 'react';
import git from '../../Assets/img/github.png'
import linkedin from '../../Assets/img/linkedin.png'
import insta from '../../Assets/img/instagram.png'
import profile from '../../Assets/img/profile.png'
import crown from '../../Assets/img/crown.png'

const Intro = () => {
    return (
        <div  class="hero lg:mt-16  mt-36 ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
     <div className="">

     <h1  data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className='lg:w-56 h-16 lg:ml-24 rounded-3xl flex items-center bg-primary justify-center px-5 py-3 '><img className='w-10' src={crown} alt="" /><span className='text-white ml-7 font-bold'>MERN developer </span> </h1>
          <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" src={profile}  style={{width:'1100px'}} alt='' />
          </div>
          <div className=''>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" class="text-3xl lg:text-5xl font-bold"> Hy! I am <p className='text-primary mt-7'>Md. Abir Rahaman</p> </h1>
            
            <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500" class="py-6 font-extrabold">& I'm a MERN stack developer. I'm a dedicated web developer who focuses in React.</p>
            <button data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500"  className="btn btn-outline btn-primary rounded-full px-10 pt-1 font-extrabold">Get Resume</button>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"  className="icons flex w-6 mt-10">
                <img className='cursor-pointer' src={git} alt="" />
                <img className='ml-10 cursor-pointer' src={linkedin} alt="" />
                <img className='ml-10 cursor-pointer' src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Intro;