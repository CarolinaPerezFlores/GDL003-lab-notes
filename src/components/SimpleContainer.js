import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Note from './Note';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        Hola
        <Typography   component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}  >
       <Note />
        h1. Heading
      </Typography>       
       
      </Container>
    </React.Fragment>
  );
}