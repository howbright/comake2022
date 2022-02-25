import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../components/layout';

const DocumentBox: NextPage = () => {
  return (
   <Layout>
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
         여기는 내 계약서함 페이지입니다. 
        </Typography>
      </Box>
    </Container>
    </Layout>
  );
};

export default DocumentBox;