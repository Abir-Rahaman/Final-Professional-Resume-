import React from 'react';
import car from '../../Assets/img/car.png'
import bike from '../../Assets/img/bike.png'
import wed from '../../Assets/img/weding.png'
import gym from '../../Assets/img/gym.png'
import gear from '../../Assets/img/gear.png'
import com from '../../Assets/img/computer.png'
import pic1 from '../../Assets/img/baro.png'
import pic2 from '../../Assets/img/baroo.png'
import pic3 from '../../Assets/img/barrooo.png'
import pic4 from '../../Assets/img/egro.png'
import pic5 from '../../Assets/img/egroo.png'
import pic6 from '../../Assets/img/egrooo.png'
import pic7 from '../../Assets/img/dos.png'
import pic8 from '../../Assets/img/doos.png'
import pic9 from '../../Assets/img/doooos.png'
import pic10 from '../../Assets/img/wed.png'
import pic11 from '../../Assets/img/weeed.png'
import pic12 from '../../Assets/img/weeeeeeed.png'
import pic13 from '../../Assets/img/ccar.png'
import pic14 from '../../Assets/img/caar.png'
import pic15 from '../../Assets/img/caaar.png'
import pic16 from '../../Assets/img/glear.png'
import pic17 from '../../Assets/img/gearr.png'
import pic18 from '../../Assets/img/home.png'
import bg from '../../Assets/img/footer-bg.jpg'
import details from '../../Assets/img/search.png'
import project from '../../Assets/img/Project.png'
import des from '../../Assets/img/check-mark.png'
import check from '../../Assets/img/check.png'
import folder from '../../Assets/img/folder.png'
import git from '../../Assets/img/git-logo.png'
import live from '../../Assets/img/live.png'

const Works = () => {
    return (
        <div style={{
            background:`url(${bg})`,
            backgroundSize:'cover'
        }} name='project' className='' >
            <h3 className='text-4xl text-[#95bbd4] text-center font-bold mt-28' > Checkout Some Of My Recent Work... </h3>
           <div className="lg:px-32 px-8">
           <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
            <div class="card lg:w-96  bg-base-100 shadow-xl ">
                <div class="card-body">
                <label for="my-modal-1" className="btn btn-outline btn-primary rounded-full flex justify-evenly"> <img src={details} alt="" /> Click For Details</label>
                <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                <div class="modal bg-green-100  shadow-2xl ">
                <div class="modal-box lg:w-11/12 lg:max-w-5xl w-full">
                    
                   <div className="shadow-2xl text-center py-20 border-4 border-primary rounded-3xl">
                   <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center "> <img src={project} alt="" /> Project Name: Computer Parts Management</h3>

                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Description</p> 

                   <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented JWT Token for Authorization. User Dashboard (See products, Check,
                                    Purchase, Cancel, Payment) </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Admin Dashboard (Make Admin, Add Products, Remove, Manage Orders)  </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Authentication System (Log in, Register, Reset Password, Email Verification)</p>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Technology Used  </p> 
                    <p></p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React JS</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> DaisyUI</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Firebase</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React Bootstrap</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Firebase Hooks </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />  React Form Hook</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Node </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />Express js </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />Node</p>
                   </div>
                   <div className="w-full">
                    <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center mt-10 "> <img src={project} alt="" />  Project Review </h3>
                         <div className="lg:px-44">
                         <p className='text-center'><small className='text-primary font-bold '>Home Page</small></p>
                        <img className='border-4 border-primary rounded-3xl  mb-6' src={pic1} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Dashboard Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6' src={pic2} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Products Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6 ' src={pic3} alt="" />
                    </div> 
                   </div>
                  
              <div className="lg:px-56 px-32 flex-col  justify-center items-center ">
                    <a href="https://github.com/Abir-Rahaman/Manufacturer-And-Restore-Project-Using-Mongo-DB-Express-React-Node-Client-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full  mr-6"> <img src={git} alt="" />Client Side</button></a>  
                    <a href="https://github.com/Abir-Rahaman/Manufacturer-And-Restore-Project-Using-Mongo-DB-Express-React-Node-Server-side" target="_blank" rel="noopener noreferrer"><button class="btn lg:my-0 my-6 btn-outline btn-primary rounded-full  mr-6"> <img src={git} alt="" />Server Side Side</button></a>               
                    <a href="https://assignment-12-authentication.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full "> <img src={live} alt="" />Live Link</button></a>     
                </div>           

                    <div class="modal-action">
                    <label for="my-modal-1" class="btn text-white  btn-circle btn-primary absolute right-2 top-2">✕</label>
                    </div>
                
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 '  src={com} alt="Shoes"  />
                </figure>
                </div>
            </div>
            <div class="card lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-2" className="btn btn-outline btn-primary rounded-full flex justify-evenly"> <img src={details} alt="" /> Click For Details</label>
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div class="modal bg-green-100  shadow-2xl ">
                <div class="modal-box  lg:w-11/12 lg:max-w-5xl w-full">
                <div className="shadow-2xl text-center py-20 border-4 border-primary rounded-3xl">
                   <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center "> <img src={project} alt="" /> Project Name:Bike Warehouse Management</h3>

                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Description</p> 

                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> This is a full-stack project for a warehouse management system website, where an
                        authentic user can control product stock quantities and create, update, and delete. </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />  After Login User Access All Products, Add Update, Delete from Database. </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Authentication System (Log in, Register, Reset Password, Email Verification)</p>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Technology Used  </p> 
                    <p></p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React JS</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Firebase</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React Bootstrap</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Firebase Hooks </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />  React Form Hook</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Node </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />Expres js </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />Node</p>
                   </div>
                   <div className="w-full">
                    <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center mt-10 "> <img src={project} alt="" />  Project Review </h3>
                   
                         <div className="lg:px-44">
                         <p className='text-center'><small className='text-primary font-bold '>Home Page</small></p>
                        <img className='border-4 border-primary rounded-3xl  mb-6' src={pic4} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Main Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6' src={pic5} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Add Products Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6 ' src={pic6} alt="" />
                    </div> 
                   </div>
                  
              <div className=" lg:px-56 px-32 flex-col  justify-center items-center  ">
                    <a href="https://github.com/Abir-Rahaman/Bike-Stock-Warehouse-Website-Using-Mongo-DB-Express-React-Node-Clinet-Side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full  mr-6"> <img src={git} alt="" />Client Side</button></a>  
 <a href="https://github.com/Abir-Rahaman/Bike-Stock-Warehouse-Wesite-Using-Mongo-DB-Express-React-Node-Server-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full  my-6  mr-6"> <img src={git} alt="" />Server Side Side</button></a>               
                    <a href="https://assingment-11-auth.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full"> <img src={live} alt="" />Live Link</button></a>     
                </div>           

                    <div class="modal-action">
                    <label for="my-modal-2" class="btn text-white  btn-circle btn-primary absolute right-2 top-2">✕</label>
                    </div>
                
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={bike} alt="Shoes" /></figure>
                </div>
                
                </div>
            <div class="card lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-3" className="btn btn-outline btn-primary rounded-full flex justify-evenly"> <img src={details} alt="" /> Click For Details</label>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal bg-green-100  shadow-2xl ">
                <div class="modal-box  lg:w-11/12 lg:max-w-5xl w-full">
                <div className="shadow-2xl text-center  py-20 border-4 border-primary rounded-3xl">
                   <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center "> <img src={project} alt="" /> Project Name: Fitex & Gym Outfits</h3>

                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Description</p> 

                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> This Projects Basically a gym website where you can exercise and buy Gym equipment. </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Authentication System (Log in, Register, Reset Password, Email Verification)</p>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Technology Used  </p> 
                    <p></p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React JS</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Firebase</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React Bootstrap</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React Rechart</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />react-router-dom</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />react-Toast </p>
                   </div>
                   <div className="w-full">
                    <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center mt-10 "> <img src={project} alt="" />  Project Review </h3>
                   
                         <div className="lg:px-44">
                         <p className='text-center'><small className='text-primary font-bold '>Home Page</small></p>
                        <img className='border-4 border-primary rounded-3xl  mb-6' src={pic7} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Main Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6' src={pic8} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Login system</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6 ' src={pic9} alt="" />
                    </div> 
                   </div> 
                  
                   <div className="lg:px-80 px-32 flex-col  justify-center items-center ">
                    <a href="https://github.com/Abir-Rahaman/Gym-Trainer-Gym-Products-Website-Using-React" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full  mr-6"> <img src={git} alt="" /> Code Link</button></a>                
                    <a href="https://assignment-10--auth.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full my-6"> <img src={live} alt="" />Live Link</button></a>     
                </div>
                <div class="modal-action">
                    <label for="my-modal-3" class="btn text-white  btn-circle btn-primary absolute right-2 top-2">✕</label>
                    </div>
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6  ' src={gym} alt="Shoes"  /></figure>
                </div>
                
                </div>
            <div class="card lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-4" className="btn btn-outline btn-primary rounded-full flex justify-evenly"> <img src={details} alt="" /> Click For Details</label>
                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                <div class="modal bg-green-100   shadow-2xl ">
                <div class="modal-box  lg:w-11/12 lg:max-w-5xl w-full">
                <div className="shadow-2xl text-center  py-20 border-4 border-primary rounded-3xl">
                <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center "> <img src={project} alt="" /> Project Name: Lamborgini Car Service Center </h3>

                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Description </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented React Routes </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented Dashboard  </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented Nice Design With Responsiveness </p>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" />Technology Used </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React JS</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" />  React Rechart</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> react-router-dom</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> React Bootstrap</p>
                </div>
                <div className="w-full">
                    <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center mt-10 "> <img src={project} alt="" />  Project Review </h3>
                   
                         <div className="lg:px-44">
                         <p className='text-center'><small className='text-primary font-bold '>Home Page</small></p>
                        <img className='border-4 border-primary rounded-3xl  mb-6' src={pic13} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Main Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6' src={pic14} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Dashboard Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6 ' src={pic15} alt="" />
                    </div> 
                   </div>
                   <div className="lg:px-80 px-32 flex-col  justify-center items-center ">
                    <a href="https://github.com/Abir-Rahaman/Lamborgini-Car-Review-Web-Site-with-Dashboard-using-React" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full  mr-6"> <img src={git} alt="" /> Code Link</button></a>                
                    <a href="https://incomparable-alfajores-3fd46a.netlify.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary my-6 rounded-full"> <img src={live} alt="" />Live Link</button></a>     
                </div>                

                <div class="modal-action">
                    <label for="my-modal-4" class="btn text-white  btn-circle btn-primary absolute right-2 top-2">✕</label>
                    </div>
                    </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={car} alt="Shoes" /></figure>
                </div>
                
                
                </div>
            <div class="card lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-5" className="btn btn-outline btn-primary rounded-full flex justify-evenly"> <img src={details} alt="" /> Click For Details</label>
                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <div class="modal bg-green-100  shadow-2xl ">
                <div class="modal-box  lg:w-11/12 lg:max-w-5xl w-full">
                    <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center "><img src={project} alt="" /> <img src={des} alt=""/>  Project Name: WEEDING CORNER </h3>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl">Description </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented Bootstrap Caursol</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented Bootstrap Card </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented Bootstrap Accordion </p>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Technology Used </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> HTML 5 </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> CCSS 3</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Advanced Bootstrap.</p>
                    <div className="w-full">
                    <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center mt-10 "> <img src={project} alt="" />  Project Review </h3>
                   
                         <div className="lg:px-44">
                         <p className='text-center'><small className='text-primary font-bold '>Home Page</small></p>
                        <img className='border-4 border-primary rounded-3xl  mb-6' src={pic10} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Main Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6' src={pic11} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Client Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6 ' src={pic12} alt="" />
                    </div> 
                   </div>
                   <div className="lg:px-80 px-32 flex-col  justify-center items-center ">
                    <a href="https://github.com/Abir-Rahaman/Wedding-Website-using-Bootstrap" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full  mr-6"> <img src={git} alt="" /> Code Link</button></a>                
                    <a href="https://wedding-website-by-abir-rahaman.netlify.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary my-6 rounded-full"> <img src={live} alt="" />Live Link</button></a>     
                 </div>               

                 <div class="modal-action">
                    <label for="my-modal-5" class="btn text-white  btn-circle btn-primary absolute right-2 top-2">✕</label>
                    </div>
                </div>
                </div>
                   <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={wed} alt="Shoes" /></figure>
                </div>
                </div>
            <div class="card lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-6" className="btn btn-outline btn-primary rounded-full flex justify-evenly"> <img src={details} alt="" /> Click For Details</label>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal bg-green-100  shadow-2xl ">
                <div class="modal-box  lg:w-11/12 lg:max-w-5xl w-full">
                   <div className="shadow-2xl text-center py-20 border-4 border-primary rounded-3xl">
                   <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center "> <img src={project} alt="" /> Project Name: Influencer products </h3>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Description</p> 
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented Bootstrap Card </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Implemented Bootstrap Responsiveness</p>
                    <p class="py-4 font-bold flex gap-2 text-gray-600 justify-center items-center text-xl"> <img src={des} alt="" /> Technology Used  </p> 
                    <p></p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> HTML 5 </p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> CCSS 3</p>
                    <p className='flex gap-2 justify-center items-center'> <img src={check} alt="" /> Advanced Bootstrap.</p>
                   </div>
                   <div className="w-full">
                    <h3 class="font-bold text-2xl text-primary flex gap-2 justify-center items-center mt-10 "> <img src={project} alt="" />  Project Review </h3>
                   
                         <div className="lg:px-44">
                         <p className='text-center'><small className='text-primary font-bold '>Home Page</small></p>
                        <img className='border-4 border-primary rounded-3xl  mb-6' src={pic18} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Main Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6' src={pic16} alt="" />
                        <p className='text-center'><small className='text-primary font-bold '>Blog Page</small></p>
                        <img className='border-4 border-primary rounded-3xl mb-6 ' src={pic17} alt="" />
                    </div> 
                   </div>
                  
              <div className="lg:px-80 px-32 flex-col  justify-center items-center ">
                    <a href="https://github.com/Abir-Rahaman/influencer-gear-2nd-Assignment-" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary rounded-full  mr-6"> <img src={git} alt="" /> Code Link</button></a>                
                    <a href="https://abir-rahaman.github.io/influencer-gear-2nd-Assignment-/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-primary my-6 rounded-full"> <img src={live} alt="" />Live Link</button></a>     
                </div>           

                    <div class="modal-action">
                    <label for="my-modal-6" class="btn text-white  btn-circle btn-primary absolute right-2 top-2">✕</label>
                    </div>
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={gear} alt="Shoes" /></figure>
                </div>
                
                </div>
            </div>  
           </div>
           </div>
       
    );
};

export default Works;