
import './App.css';
import Intro from './Components/Pages/Intro';
import Navbar from './Components/Shared/Navbar';
import About from './Components/Pages/About';
import Works from './Components/Pages/Works';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Pages/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className=''>
      <Navbar></Navbar>
      <Intro></Intro> 
       <About></About>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>

    </div>

  );
}

export default App;
