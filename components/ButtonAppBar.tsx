import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Box
            component="img"
            sx={{
            width: 90,
            }}
            alt="logo"
            src={process.env.NEXT_PUBLIC_BACKEND_URL + '/COMAKE_LOGO_W.png'}
        />
          <Box flex={1}></Box>
          <Button variant="contained" startIcon={<AddIcon />} color="secondary">
            새 계약서
           </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}