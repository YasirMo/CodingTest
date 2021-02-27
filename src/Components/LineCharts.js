import React from 'react'
import {
    Tooltip,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    LineChart,
     Line 
  } from "recharts";

  import { makeStyles } from '@material-ui/core/styles';
  const useStyles = makeStyles((theme) => ({
    root:{
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: '400px',
    },
  }));
  const LineCharts = (props) => {
    const dataLine = [
        {
          name: 'Value 1',  Integers: props.Number1, amt: 2400,
        },
        {
          name: 'Value 2', Integers: props.Number2, amt: 2210,
        },
        {
          name: 'Value 3', Integers: props.Number3, amt: 2290,
        },
        {
          name: 'Value 4',  Integers: props.Number4, amt: 2000,
        },
      ];
          // Getting userinput using props
      const classes = useStyles();
    return (
        <div>
             <LineChart className={classes.root}
		width={900}
		height={500}
		data={dataLine}
		margin={{
			top: 5, right: 30, left: 20, bottom: 5,
		}}
	>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="name" />
		<YAxis domain={[0, 100]} />
		<Tooltip />
		<Legend />
		<Line type="monotone" dataKey="Integers" stroke="#8884d8"  />
	</LineChart>
        </div>
    )
}

export default LineCharts
