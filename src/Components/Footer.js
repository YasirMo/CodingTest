import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme) => ({
    root:{
        flexDirection: 'column',
        textAlign: 'center',
    },
  }));
function Footer() {
    const classes = useStyles();    
    return (
            <div className={classes.root}>
                 {/* Footer*/}
            © Developed by Yasir Mohamed 
        </div>
    )
}

export default Footer
