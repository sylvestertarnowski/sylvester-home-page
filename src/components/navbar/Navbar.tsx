import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Home />
        <Typography variant="h6">Sylvester</Typography>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
