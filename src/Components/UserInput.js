import React ,{useState}from 'react';
import { Container } from 'react-bootstrap';
import { Link as Scroll } from 'react-scroll'
import { IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import BarCharts from './BarCharts'
import LineCharts from './LineCharts'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    marginTop: '700px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
      
  optionsTitle:{
    fontSize: '40px',
},
FromText:{
  fontSize: '30px',
},
ValueText:{
  fontSize: '20px',
},
ChartBtns:{
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
},
BarTitle:{
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}
}));
 function UserInput() {
    
  const [Title,setTitle] = useState(null);
  const [Number1,setNumber1] = useState(null);
  const [Number2,setNumber2] = useState(null);
  const [Number3,setNumber3] = useState(null);
  const [Number4,setNumber4] = useState(null);

        function getTitle(val){
            setTitle(val.target.value)
        }
        function getNumber1(val){
            setNumber1(val.target.value)
        }
        function getNumber2(val){
            setNumber2(val.target.value)
        }
        function getNumber3(val){
            setNumber3(val.target.value)
        }
        function getNumber4(val){
            setNumber4(val.target.value)
        }
     
          const [show,setShow] = useState(true)
          const classes = useStyles();
    return (
        <div >
        <section id="User" className={classes.root} >
        <Container>
             {/* UserInput Title*/}
            <h1 className={classes.optionsTitle} >
              <br />
              { "Enter Your Title 😃"}
              <br/>
              { "Please Enter Your List Of Integers"}
              <br/>
            
            </h1>
            <form  >
                <div className={classes.FromText}> 
                <labal>Title </labal>
                <input type ='text' 
                onChange={getTitle}/>
                </div>
                <br/>
                        {/* Value 1 */}
                <div className={classes.ValueText}>
                <labal>Value 1 </labal>
                <input type ='text' 
                onChange={getNumber1}
               />
               <br/>
                        {/* Value 2 */}
                <labal>Value 2 </labal>
                <input type ='text' 
                    onChange={getNumber2}
               />
               <br/>
                </div  >
                        {/* Value 3 */}
                <div className={classes.ValueText}>
                <labal>Value 3 </labal>
                <input type ='text' 
                 onChange={getNumber3}
              />
              <br/>
                        {/* Value 4 */}
                <labal>Value 4 </labal>
                <input type ='text' 
                 onChange={getNumber4}
               />
                </div>
                <br/>
                <br/>
              <br/>
                <br/>
                <Scroll to='Charts' smooth={true}>
                <IconButton >
                    <ExpandMoreIcon color='secondary' style={{ fontSize:'2rem'}}/>
                </IconButton>
                </Scroll>
            </form>
        </Container>
      </section>
      <div >
      <div className={classes.ChartBtns}> 
      <Button onClick={()=>setShow(true)} color="secondary">Bar</Button>
      <Button onClick={()=>setShow(false)} color="secondary">Line</Button>
     </div>
      <div id="Charts" >
        <p className={classes.BarTitle}>{Title}</p> 
        {/* Toogle Bar and Line*/}
        {
        show? 
        
      <BarCharts Number1={Number1} Title={Title} Number2={Number2} Number3={Number3} Number4={Number4}/>:
      <LineCharts Number1={Number1} Title={Title} Number2={Number2} Number3={Number3} Number4={Number4}/>
      // calling the values to be used
      }
      </div>
      </div>
      </div>
    )
}

export default UserInput;
