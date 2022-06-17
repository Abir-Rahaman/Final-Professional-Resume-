
import './App.css';
import Intro from './Components/Pages/Intro';
import Navbar from './Components/Shared/Navbar';
import About from './Components/Pages/About';
import Works from './Components/Pages/Works';





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Works></Works>
    </div>
  );
}

export default App;
