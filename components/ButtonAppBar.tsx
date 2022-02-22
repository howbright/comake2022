import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <img src="/COMAKE_LOGO_W.png" alt="a picture" height="200" width="100" />
            {/* <img src={process.env.NEXT_PUBLIC'/COMAKE_LOGO_W.png'} alt="logo" height={20} width={75}/> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box flex={1}></Box>
          <Button color="inherit">Login3</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}