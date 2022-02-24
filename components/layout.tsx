import React, { ReactChildren, ReactChild } from 'react';
import SimpleBottomNavigation from './SimpleBottomNavigation'


interface LayoutProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function Layout({ children }: LayoutProps) {

    return (
      <>
      <div>{children}</div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      </>
    )
    
  }