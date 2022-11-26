import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Skillset from './Components/Skillset/Skillset';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Bubbles from './Assets/Bubbles.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      {/* <img src={Bubbles} alt='bubbles' id='bubbles' /> */}
      <Education />
      <Experience />
      <Projects />
      <Skillset />
      <Contact />
    </div>
  );
}

export default App;
