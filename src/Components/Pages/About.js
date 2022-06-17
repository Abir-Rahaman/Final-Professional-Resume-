import React from 'react';
import about from '../../Assets/img/about-pro.jpg'
import schhol from '../../Assets/img/backpack.png'
import man from '../../Assets/img/man.png'
import call from '../../Assets/img/call.png'
import hike from '../../Assets/img/hiking.png'
import holy from '../../Assets/img/hoidays.png'
import click from '../../Assets/img/photography.png'
import eat from '../../Assets/img/eating-disorder.png'
import web from '../../Assets/img/web-development.png'
import relax from '../../Assets/img/gamepad.png'
import meditation from '../../Assets/img/innovation.png'
import html from '../../Assets/img/html.png'
import css from '../../Assets/img/css.png'
import bs from '../../Assets/img/bootstrap.png'
import tailwind from '../../Assets/img/tailwind.png'
import js from '../../Assets/img/javascript.png'
import react from '../../Assets/img/react.png'
import firebase from '../../Assets/img/firebase.png'
import node from '../../Assets/img/node.png'
import express from '../../Assets/img/express.png'
import mongo from '../../Assets/img/mongo.png'
import bg from '../../Assets/img/about-bg.jpg'

const About = () => {
    return (
        <div style={{
            background:`url(${bg})`,
            backgroundSize:'cover'
        }} className='about-banner bg-cover mt-14'>
         <h1 className='text-5xl font-bold text-warning'><div class="avatar px-10 mt-10">
            <div class="w-24 ml-20  rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <img src={about} alt='' />
            </div>
         </div></h1>
         <div className="px-32">
            <p className='font-bold text-warning my-4'>HERE'S MY</p>
            <h1 className='text-4xl font-bold'>EDUCATION, WORK EXPERIENCE AND SOME SKILLS.</h1>
            <p className='font-bold my-4'>Expertise in front-end technologies, including Html5, CSS3, JavaScript(Intermidiate),Typescript and libraries such as  React Js, Bootstrap5, Tailwind, DaisyUI .<br />Knowledge   of server-side  programming languages  including MongoDB, Node Js, Express Js.I'm mostly interested in developing responsive full-stack web applications. <br /> Please see my resume for further information.</p>
            <div className="lg:flex ">
                <div className="">
                <div className="flex items-center">
                <img className='ring p-2 rounded-full ring-warning ring-offset-base-100 ring-offset-2' src={schhol} alt=""/>
                <h3 className=' font-bold text-2xl text-warning ml-6'>Educational Qualification</h3>
                </div>
                <div className="ml-20">
                <h3 className='font-bold'>2019-2022</h3>
                <p className=' font-bold'>B.Sc in CSE</p>
                <p className=' font-bold' >Daffodil International University</p>
                </div>
                <div className="flex items-center">
                <img className='ring p-2 rounded-full ring-warning ring-offset-base-100 ring-offset-2' src={man} alt=""/>
                <h3 className=' font-bold text-2xl text-warning ml-6'>Personal Information</h3>
                </div>
                <div className="ml-20">
                <p className=' font-bold'>Name : Md. Abir Rahaman</p>
                <p className=' font-bold' >Age : 22</p>
                <p className=' font-bold' >Height : 5'11</p>
                <p className=' font-bold' >Date Of Birth: 1 feb 1999</p>
                </div>
                <div className="flex items-center">
                <img className='ring p-2 rounded-full ring-warning ring-offset-base-100 ring-offset-2' src={call} alt=""/>
                <h3 className=' font-bold text-2xl text-warning ml-6'>Contact Information</h3>
                </div>
                <div className="ml-20">
                <p className=' font-bold'>Email : abirahaman.cse@gmail.com</p>
                <p className=' font-bold' >Phone : +8801864943403</p>
                <p className=' font-bold'> Present Location : Ashulia Savar,Dhaka </p>
                <p className=' font-bold'> Permanent Location : Delduar Tangail ,Dhaka </p>
               
                </div>
                <div className="flex items-center">
                <img className='ring p-2 rounded-full ring-warning ring-offset-base-100 ring-offset-2' src={hike} alt=""/>
                <h3 className=' font-bold text-2xl text-warning ml-6'>Interest</h3>
                </div>
                <div className="ml-20 gap-8 grid lg:grid-cols-3 sm:grid-cols-2">
                       <div className="">
                       <img className='mt-8' src={web} alt="" />
                        <h5 className='text-warning mt-3 text-2xl font-bold'>Technologies</h5>
                       </div>
                       <div className="">
                       <img className='mt-8' src={eat} alt="" />
                        <h5 className='text-warning mt-3 text-2xl font-bold'> Street Food</h5>
                       </div>
                       <div className="">
                       <img className='mt-8' src={holy} alt="" />
                        <h5 className='text-warning mt-3 text-2xl font-bold'> Traveling</h5>
                       </div>
                       <div className="">
                       <img className='mt-8' src={click} alt="" />
                        <h5 className='text-warning mt-3 text-2xl font-bold'> Photography</h5>
                       </div>
                       <div className="">
                       <img className='mt-8' src={relax} alt="" />
                        <h5 className='text-warning mt-3 text-2xl font-bold'> Explore Gadget</h5>
                       </div>
                       <div className="">
                       <img className='mt-8' src={meditation} alt="" />
                        <h5 className='text-warning mt-3 text-2xl font-bold'> Meditation</h5>
                       </div>      
                </div>
                </div>
              
                <div className="ml-28 lg:mt-24  ">
                    <h1 className='text-4xl text-warning font-bold text-left md:text-center lg:mt-0 mt-20 mb-10'>My Skills</h1>
                    <p className='text-2xl mb-12 text-center'> These Are Technologies I'he worked with</p>
                    <div className="grid lg:grid-cols-4 gap-10 grid-cols-2 ">
                    <div class="radial-progress text-orange-600 hover:scale-150 duration-500 cursor-pointer" style={{'--value':90, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={html} alt="" /> <span className='text-xs font-bold mt-2'>HTML 90%</span> </div> 
                    <div class="radial-progress text-sky-500 hover:scale-150 duration-500 cursor-pointer" style={{'--value':80, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={css} alt="" /> <span className='text-xs font-bold mt-2'>CSS 80%</span> </div> 
                    <div class="radial-progress text-indigo-500 hover:scale-150 duration-500 cursor-pointer" style={{'--value':90, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-16 ml-1' src={bs} alt="" /> <span className='text-xs font-bold mt-1'>Bootstrap 80%</span> </div> 
                    <div class="radial-progress text-sky-400 hover:scale-150 duration-500 cursor-pointer" style={{'--value':80, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={tailwind} alt="" /> <span className='text-xs font-bold mt-2'>Tailwind 80%</span> </div> 
                    <div class="radial-progress text-yellow-500 hover:scale-150 duration-500 cursor-pointer" style={{'--value':70, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={js} alt="" /> <span className='text-xs font-bold mt-2'>Javascript 70%</span> </div> 
                    <div class="radial-progress text-sky-500 hover:scale-150 duration-500 cursor-pointer" style={{'--value':80, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={react} alt="" /> <span className='text-xs font-bold mt-2'>React 80%</span> </div> 
                    <div class="radial-progress text-yellow-500 hover:scale-150 duration-500 cursor-pointer" style={{'--value':80, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={firebase} alt="" /> <span className='text-xs font-bold mt-2'>Firebase 80%</span> </div> 
                    <div class="radial-progress text-lime-500 hover:scale-150 duration-500 cursor-pointer" style={{'--value':60, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={node} alt="" /> <span className='text-xs font-bold mt-2'>Node 60%</span> </div> 
                    <div class="radial-progress text-neutral-800 hover:scale-150 duration-500 cursor-pointer" style={{'--value':80, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-16' src={express} alt="" /> <span className='text-xs font-bold mt-2'>Express 80%</span> </div> 
                    <div class="radial-progress text-green-500 hover:scale-150 duration-500 cursor-pointer" style={{'--value':70, '--size':'8rem' ,'--thickness': '10px'}}>  <img className='w-12' src={mongo} alt="" /> <span className='text-xs font-bold mt-2'>MongoDB 70%</span> </div> 

                    </div>
                </div>
                </div>
                
            </div>
               
               
               
                
            </div>
        
      
    );
};

export default About;