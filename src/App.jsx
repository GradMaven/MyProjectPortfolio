import { Route, Routes, } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer';
import FancyCursor from './components/Fancycursor';
import { InteractiveBlob } from './components/InteractiveBlob';
import AnimatedBackground from './components/AnimatedBackground';
import LiquidGlassBackground from './components/LiquidGlassBackground';


function App() {

  return (
    <> 

       <AnimatedBackground /> 
      <div className="relative z-10">
  
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <FancyCursor />
        <InteractiveBlob /> 
        
   </div>
   </>
  );
}

export default App;
