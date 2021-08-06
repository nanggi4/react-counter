import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

const Counter = (props) => {
  const classes = props.classes;
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={clsx(classes.mainContainer)}>
        <h1>{count}</h1>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          +
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          -
        </Button>                
      </Container>
    </React.Fragment>
  );
}

const styles = {
  mainContainer: {
    color: 'red',
  },
};

export default withStyles(styles)(Counter);