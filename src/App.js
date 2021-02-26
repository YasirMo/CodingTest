
import React, {  useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link as Scroll } from 'react-scroll'
import Userinput from './Components/UserInput'
import Button from '@material-ui/core/Button';
import Footer from './/Components/Footer'
import './App.css';
function App() {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div>
    <section id="hero" className="jumbotron" >
    <Container>
      <LightSpeed left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h1 className="hero-title" >
          <span className="textmain"> {'Welcome'}</span>
          <br />
          { "Start Visualising your data"}
        </h1>
      </LightSpeed>
      <LightSpeed left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
        <p className="herobtn">
          <span className="btn--hero">
          <Scroll to='User' smooth={true}>
          <Button variant="outlined" color='secondary'>New Graph</Button>
                </Scroll>
          </span>
        </p>
      </LightSpeed>
    </Container>
  </section>
  <Userinput/>
  <Footer/>
  </div>
  );
}

export default App;

