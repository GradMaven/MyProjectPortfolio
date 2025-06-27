import { Route, Routes, } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer';
import FancyCursor from './components/Fancycursor';



function App() {
  

  return (
    <>
      
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <FancyCursor />
   
    </>
  )
}

export default App
