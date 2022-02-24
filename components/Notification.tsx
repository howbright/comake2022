import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import BodyContainer from './BodyContainer';
import { Alert, Badge } from '@mui/material';
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Notification() {
  return (
    <BodyContainer>
        <Box sx={{ p: '10px', width: '100%', display: 'grid', m:0,
      gridTemplateColumns: '1fr',
      gridTemplateRows: '40px 40px 40px',
      rowGap: 1,
      gridTemplateAreas: `"recieve"  "sent" "completed"`}}>
          <Box sx={{gridArea: "recieve", backgroundColor: '#FDEDED',
         display: 'grid',  gridTemplateColumns:'50px 1fr 50px',
         gridTemplateRows: '40px',
         gridTemplateAreas: `"icon msg go"`
        }}>
           <Box sx={{with:'100%', height:'100%', gridArea: "icon", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               <EmailIcon color='error'/>
           </Box>
           <Box sx={{with:'100%',height:'100%', gridArea: "msg", display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
               <Typography variant='body2' color="#5F2120"><strong>3건</strong>의 받은 서명요청이 있습니다. <strong>어서 확인하세요!! </strong> </Typography>
           </Box>

        </Box>
          <Box sx={{gridArea: "sent", backgroundColor: '#E5F6FD',
         display: 'grid',  gridTemplateColumns:'50px 1fr 50px',
         gridTemplateRows: '40px',
         gridTemplateAreas: `"icon msg go"`
        }}>
          <Box sx={{with:'100%', height:'100%', gridArea: "icon", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               <SendIcon color='info' />
           </Box>
           <Box sx={{with:'100%',height:'100%', gridArea: "msg", display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
               <Typography variant='body2' color="#014361"><strong>5건</strong>의 보낸 서명요청이 있습니다. <strong>서명 현황을 확인하세요!! </strong> </Typography>
           </Box>
          </Box>
          <Box sx={{gridArea: "completed", backgroundColor: '#EDF7ED',
           display: 'grid',  gridTemplateColumns:'50px 1fr 50px',
           gridTemplateRows: '40px',
           gridTemplateAreas: `"icon msg go"`
        }}>
          <Box sx={{with:'100%', height:'100%', gridArea: "icon", display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
               <CheckCircleIcon color="success" />
           </Box>
           <Box sx={{with:'100%',height:'100%', gridArea: "msg", display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
               <Typography variant='body2' color="#1E4620"><strong>비밀유지계약(with 이나현)</strong> 이 체결되었습니다.  </Typography>
           </Box>
          </Box>
        </Box>
        {/* <Alert severity="info" sx={{backgroundColor: '#ffebee'}}>3건의 서명 요청이 있습니다. — 어서 확인하세요!</Alert>*/}
    </BodyContainer> 
  );
}