import React from 'react';
import bg from '../../Assets/img/contact-bg.jpg'
import mail from '../../Assets/img/mail.png'
import location from '../../Assets/img/location.png'
import phone from '../../Assets/img/iphone.png'
import email from '../../Assets/img/email.png'


const Contact = () => {
    return (
        <div class="hero pb-24 mt-24">
            <div style={{
            background:`url(${bg})`,
        }}  class="hero-content flex-col lg:flex-row-reverse py-20 shadow-2xl ">
                <div class="card lg:w-screen rounded-2xl">
                        <div class="card-body md:w-full">
                           <form method='POST' action="https://getform.io/f/7067b325-0165-4120-8a11-ee011c81044d">
                           <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' required class="input input-bordered bg-inherit" />
                            </div>
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email ' class="input input-bordered bg-inherit" />
                            </div>
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Message</span>
                            </label>
                            <textarea type="text" rows='6' placeholder="How Can I help You.." name='box' class="textarea textarea-bordered bg-inherit" />
                            </div>
                            <div class="form-control mt-6">
                            <button class="btn btn-primary rounded-full">Submit</button>
                            </div>
                           </form>
                        </div>
                        </div>
               <div className="">
                <img src={email} alt="" />
                <p className='text-primary font-bold'>Get In Touch</p>
                <p className=' text-black font-bold '>I'm here to help you with any web application needs you may have.  Just give me a call and feel free to share your ideas with me.Simply  send me an email.
                Please call me if you have an issue. </p>
           
                
              <p className='flex gap-12 my-6'> <img className='inline ' src={mail} alt="" /><span>abirahman.cse@gmail.com </span></p>
              <p className='flex gap-12 my-6'> <img className='inline ' src={phone} alt="" /><span>+88 01701750168 </span> </p>
              <p className='flex gap-12'><img className='inline ' src={location} alt="" /><span> Tangail Dhaka </span></p> 
               
      

               </div>
            </div>
            </div>
    );
};

export default Contact;