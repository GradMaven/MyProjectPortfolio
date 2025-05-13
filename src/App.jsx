import { Route, Routes, } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import FancyCursor from './components/Fancycursor';



function App() {
  

  return (
    <>
      
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <FancyCursor />
   
    </>
  )
}

export default App
