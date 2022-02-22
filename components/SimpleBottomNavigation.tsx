import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import Link from '../src/Link';
import { PinDropSharp, SettingsInputAntennaTwoTone } from '@mui/icons-material';
import { useRouter } from 'next/router'

// 
// const onLink = (href: string) => {
//   router.push(href);
// };


// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box sx={{ width: 500 }}>
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction label="Recents" icon={<RestoreIcon />} LinkComponent={Link} href='/about'/>
//         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//       </BottomNavigation>
//     </Box>
//   );
// }


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
      console.log(0)
      setValue(0)
    }
    else if (router.pathname === '/alarm') {
      setValue(1)
    } else if (router.pathname === '/collabo') {
      setValue(2)
    } else if (router.pathname === '/document-box') {
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
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/"} />
          <BottomNavigationAction label="새소식" icon={<FavoriteIcon />} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/alarm"}/>
          <BottomNavigationAction label="콜라보 작성" icon={<ArchiveIcon />} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/collabo"} />
          <BottomNavigationAction label="계약서함" icon={<FavoriteIcon />} LinkComponent={Link} href={process.env.NEXT_PUBLIC_BACKEND_URL + "/document-box"}/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

