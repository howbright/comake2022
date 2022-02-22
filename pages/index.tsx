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

const Home: NextPage = () => {
  return (
    <Layout>
    <ButtonAppBar></ButtonAppBar>
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href='/about' as={process.env.NEXT_PUBLIC_BACKEND_URL + '/about'} color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Layout>
  );
};
export default Home;
