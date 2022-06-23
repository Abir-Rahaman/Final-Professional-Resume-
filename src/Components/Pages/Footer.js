import React from 'react';
import bg from '../../Assets/img/footer-bg.jpg'
import logo from '../../Assets/img/logo.png'
import fb from '../../Assets/img/face.png'
import link from '../../Assets/img/link.png'
import git from '../../Assets/img/git.png'
import insta from '../../Assets/img/insta.png'
import wp from '../../Assets/img/whatsapp.png'
import telegram from '../../Assets/img/telegram.png'


const Footer = () => {
    return (
        <footer style={{
            background:`url(${bg})`,
            backgroundSize:'cover'
        }} class="footer px-8 py-16  lg:p-20 bg-base-200 text-base-content lg:px-56 shadow-2xl  ">
        <div>
          <span data-aos="flip-left" data-aos-duration="5000" data-aos-delay="2000" class="footer-title "> <img src={logo} alt="" /> </span> 
            <p className='lg:w-96  text-justify'>Expertise in front-end technologies, including Html5, CSS3, JavaScript(Intermidiate),Typescript and libraries such as React Js,Bootstrap5, Tailwind, DaisyUI .
           Knowledge of server-side programming language .</p> 
           <div className=" flex gap-8 mt-5">
            <img src={fb} alt="" />
            <img src={link} alt="" />
            <img src={wp} alt="" />
            <img src={telegram} alt="" />
            <img src={insta} alt="" />
            <img src={git} alt="" />
           </div>
      
        </div> 
        
        <div>
          <span class="footer-title font-bold text-xl">Products</span> 
          <a class="link link-hover">Desing</a> 
          <a class="link link-hover">Develpoing</a> 
          <a class="link link-hover">User Authenticate</a>
          <a class="link link-hover">Authorization System</a>
          <a class="link link-hover">Full Responsiveness Application</a>
        </div> 
        <div>
          <span class="footer-title">Address</span> 
           <p>Tangail , Dhaka BANGLADESH</p>
        </div>
      </footer>
    );
};

export default Footer;