import React ,{useState}from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/UserInput.css'
import { Link as Scroll } from 'react-scroll'
import { IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    LineChart,
     Line 
  } from "recharts";
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
        const data = [
            { name: "Value 1", Integers: Number1},
            { name: "Value 2", Integers: Number2},
            { name: "Value 3", Integers: Number3},
            { name: "Value 4", Integers: Number4},
          ];
          const dataLine = [
            {
              name: 'Value 1',  Integers: Number1, amt: 2400,
            },
            {
              name: 'Value 2', Integers: Number2, amt: 2210,
            },
            {
              name: 'Value 3', Integers: Number3, amt: 2290,
            },
            {
              name: 'Value 4',  Integers: Number4, amt: 2000,
            },
          ];
          const [show,setShow] = useState(true)
    return (
        <div >
        <section id="User" className="UserInput" >
        <Container>
            <h1 className="options-title" >
              <br />
              { "Enter Your Title 😃"}
              <br/>
              { "Please Enter Your List Of Integers"}
              <br/>
            
            </h1>
            <form  >
                <div className="Form-text"> 
                <labal>Title </labal>
                <input type ='text' 
                onChange={getTitle}/>
                </div>
                <br/>
                        {/* Value 1 */}
                <div className="Value-Text">
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
                <div className="Value-Text">
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
              { "Please Keep It within The Range 0-150"}
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
      <div className='ChartsBody'>
      <div className="Chart-btns"> 
      <Button onClick={()=>setShow(true)} color="secondary">Bar</Button>
      <Button onClick={()=>setShow(false)} color="secondary">Line</Button>
     </div>
      <div id="Charts" >
        <p className="BarTitle">{Title}</p> 
        {/* Toogle Bar and Line*/}
        {
        show? 
        
      <BarChart className="Charts"
          width={900}
          height={500}
          dataKey="name" 
          data={data}
          margin={{
            top: 0,
            right:100,
            left: 100,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 100, right: 100 }}
          />
          <YAxis domain={[0, 150]} />
          <Tooltip />
          <Legend />
          <Bar dataKey={'Integers'} fill=" rgba(8, 114, 244, 0.6)" background={{ fill: "#eee" }} />
        </BarChart>:
         <div>
            {/*Line chart */}
        <LineChart className="Charts"
		width={900}
		height={500}
		data={dataLine}
		margin={{
			top: 5, right: 30, left: 20, bottom: 5,
		}}
	>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="name" />
		<YAxis domain={[0, 150]} />
		<Tooltip />
		<Legend />
		<Line type="monotone" dataKey="Integers" stroke="#8884d8"  />
	</LineChart>
  </div>
      }
      </div>
      </div>
      </div>
    )
}

export default UserInput;
