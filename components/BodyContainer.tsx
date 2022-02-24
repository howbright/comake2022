import React, { ReactChildren, ReactChild } from 'react';
import Box from '@mui/material/Box';
 
interface BodyContainerProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function BodyContainer({ children }: BodyContainerProps ) {
  return (
    <Box sx={{ m:0.5, boxShadow: 1, width: '100%', maxWidth: '500px',justifySelf: 'center',  alignSelf: 'center',
              display: 'flex', flexDirection: 'column' , justifyItems: 'center', alignItems: 'center', backgroundColor: 'white'}}>
    {children}
    </Box>
  );
}