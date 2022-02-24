import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Link from '../src/Link';
import { useRouter } from 'next/router'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Badge } from '@mui/material';

interface NavProps{
}


export default function SimpleBottomNavigation(props: NavProps) {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    console.log(router.pathname)
    if (router.pathname === '/') {
      setValue(0)
    } else if (router.pathname === '/collabo') {
      setValue(1)
    } else if (router.pathname === '/document-box') {
      setValue(2)
    } else if (router.pathname === '/templates') {
      setValue(3)
    }
  },);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
             
          }}
        >
          <BottomNavigationAction label="홈" icon={<HomeIcon />} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/"} /> 
           <BottomNavigationAction label="콜라보 작성" icon={ <Badge badgeContent={4} color="error"><GroupIcon /></Badge>} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/collabo"}>
           </BottomNavigationAction>
          <BottomNavigationAction label="계약서함" icon={<InventoryIcon />} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/document-box"} />
          <BottomNavigationAction label="계약서 양식" icon={<LibraryBooksIcon />} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/templates"}/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

