import React from 'react'
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    Bar,
  } from "recharts";

  import { makeStyles } from '@material-ui/core/styles';
  const useStyles = makeStyles((theme) => ({
    root:{
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: '400px',
    },
  }));

  const BarCharts = (props) => {
    const data = [
      
        { name: "Value 1", Integers: props.Number1},
        { name: "Value 2", Integers: props.Number2},
        { name: "Value 3", Integers: props.Number3},
        { name: "Value 4", Integers: props.Number4},
        
      ]; 
    // Getting userinput using props
      const classes = useStyles();    
    return (
        <div>
             <BarChart className={classes.root}
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
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey={'Integers'} fill=" rgba(8, 114, 244, 0.6)" background={{ fill: "#eee" }} />
        </BarChart>
        </div>

    )
}

export default BarCharts
