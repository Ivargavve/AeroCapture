import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import video1 from "./assets/background.mp4";

import './app.css';

function App() {
  return (
    
    <div>
      <video src={video1} autoPlay muted loop className="video-bg"/>
      <Navbar/>
    <div className="container">
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
