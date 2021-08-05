import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Counter = (props) => {
  const classes = props.classes;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={clsx(classes.mainContainer)}>
        <Typography variant="h3" gutterBottom>
          React Counter
        </Typography>        
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