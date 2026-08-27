import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Specialties from './components/Specialties'
import Contact from './components/Contact'
import Footer from './components/Footer';
import FancyCursor from './components/Fancycursor';
import { InteractiveBlob } from './components/InteractiveBlob';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
        <Home />
        <About />
        <Specialties />
        <Projects />
        <Contact />
        <Footer />
        <FancyCursor />
        <InteractiveBlob />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
