import * as React from 'react';
import ButtonAppBar from './ButtonAppBar';
import SimpleBottomNavigation from './SimpleBottomNavigation'



export default function Layout({ children }) {

    return (
      <>
      <div>{children}</div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      </>
    )
    
  }