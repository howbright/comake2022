import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Layout from '../components/layout';
import ButtonAppBar from '../components/ButtonAppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon, Paper } from '@mui/material';
import { height } from '@mui/system';
import theme from '../src/theme';

const Home: NextPage = () => {
  return (
    <Layout>
    <ButtonAppBar></ButtonAppBar>
    <Box sx={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
    <Box sx={{ boxShadow: 2 ,
               width: '100%', 
               maxWidth: '500px', 
               justifySelf: 'center', 
               alignSelf:'center', 
               height: '500px', 
               borderRadius: 2, 
               backgroundColor: (theme) => theme.palette.background.paper,
               m:2
  }}>
     <Box
        sx={{
          m: 3,
          display: 'grid',
          gridTemplateColumns: '[col1] 80px [col2] auto [col3] 30px',
          gap: 1,
          gridTemplateRows: '[row1] 50px [row2] 30px [row3]',
          gridTemplateAreas: `"profile name setting"
        "profile email email"
        "footer footer footer"`,
        }}
      >
        <Box sx={{ gridArea: 'profile', justifySelf: 'center', alignSelf:'center' }}>
        <Avatar alt="최민태 변호사" src={process.env.NEXT_PUBLIC_BACKEND_URL + '/test.jpeg'} sx={{ width: 70, height: 70 }} />
        </Box>
        <Box sx={{ gridArea: 'name', bgcolor: 'secondary.main' }}>name</Box>
        <Box sx={{ gridArea: 'email', bgcolor: 'error.main' }}>email</Box>
        <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
        <Box sx={{ gridArea: 'setting', bgcolor: 'warning.dark' }}>Set</Box>
      </Box>


  </Box>
  </Box>
    {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemIcon ></ListItemIcon>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List> */}
    </Layout>
  );
};
export default Home;
