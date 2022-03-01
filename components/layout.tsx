import Box from '@mui/material/Box';
import React, { ReactChildren, ReactChild } from 'react';
import SimpleBottomNavigation from './SimpleBottomNavigation'


interface LayoutProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function Layout({ children }: LayoutProps) {

    return (
      <>
      <Box>{children}</Box>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      </>
    )
    
  }