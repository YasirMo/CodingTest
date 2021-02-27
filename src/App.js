
import React, {  useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link as Scroll } from 'react-scroll'
import Button from '@material-ui/core/Button';
import Footer from './/Components/Footer'
import UserInput from './Components/UserInput'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    color: '$white-color',
    fontSize: '3rem',
    margin: '0 auto',
   width: '100vh',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign:'center',
      
  },
}));
function App() {

  const [Motion, setMotion] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setMotion(true);
    } 
  }, []);
  const classes = useStyles();
  return (
    <div>
    <section className={classes.root} >
    <Container>
      <LightSpeed left={Motion}  duration={1000} delay={500} distance="30px">
        <h1 >
          <span className="textmain"> {'Welcome'}</span>
          <br />
          { "Start Visualising your data"}
        </h1>
      </LightSpeed>
      <LightSpeed left={Motion}  duration={1000} delay={1000} distance="30px">
        <p >
          <span className="btn--hero">
          <Scroll to='User' smooth={true}>
          <Button variant="outlined" color='secondary'>New Graph</Button>
                </Scroll>
          </span>
        </p>
      </LightSpeed>
    </Container>
  </section>
  <UserInput/>
  <Footer/>
  </div>
  );
}

export default App;

