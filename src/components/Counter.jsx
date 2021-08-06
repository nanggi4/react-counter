import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, ButtonGroup } from '@material-ui/core';

const Counter = (props) => {
  const classes = props.classes;
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" className={clsx(classes.mainContainer)}>
        <Typography variant="h6" gutterBottom className={clsx(classes.count)}>
          {count}
        </Typography>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button onClick={() => setCount(count + 1)} className={clsx(classes.btn)}>+</Button>
          <Button onClick={() => setCount(count - 1)} className={clsx(classes.btn)}>-</Button>
          <Button onClick={() => setCount(0)} className={clsx(classes.btn)}>Reset</Button>
        </ButtonGroup>
      </Container>
    </React.Fragment>
  );
}

const styles = {
  mainContainer: {
    display: 'flex',
    height: "100vh",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#6ecd56',
    backgroundImage: 'linear-gradient(142deg, #bdcd56, #96cd56 31%, #6ecd56 65%, #56cd66)'
  },
  count: {
    fontSize: '6rem',
    color: 'white'
  },
  btn: {
    color: 'white',
    fontSize: '1.5rem',
    width: 120,
    margin: '0 1rem',
  }
};

export default withStyles(styles)(Counter);