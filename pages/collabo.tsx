import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicContainer from '../components/common/BasicContainer';
import Layout from '../components/layout';

const Collabo: NextPage = () => {
  return (
   <Layout>
    <BasicContainer>
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
         여기는 콜라보 페이지입니다. 
        </Typography>
      </Box>
    </BasicContainer>
    </Layout>
  );
};

export default Collabo;