import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import BodyContainer from './BodyContainer';
import { Box } from '@mui/system';
import { Chip, Divider } from '@mui/material';
import TemplateList from './TemplateList';
import DocsList from './DocsList';

export default function TemplateIntro() {
  return (
    <BodyContainer>
         <Box sx={{width: '100%', mt: 1}}>
          <Divider sx={{fontSize: '16px', fontWeight: 'bold', color: (theme)=> theme.palette.secondary.dark}} textAlign='left'>작성중 계약서</Divider>
        </Box>
        <DocsList/>
        <Box sx={{p:"20px", justifySelf: 'center',  alignSelf: 'center', height: '100%', overflowy: 'auto',
              display: 'flex', flexDirection: 'column' , justifyItems: 'center', alignItems: 'center',}}>
        <Typography variant='h6'>계약서 양식</Typography>
        <Typography variant='body1'> 계약서 작성이 어려우신가요? </Typography>
        <Typography variant='body1'> 현직 변호사가 작성한 믿을 수 있는 다양한 계약서 양식을 제공합니다. </Typography>
      <SearchBar />
      </Box>
        <Box sx={{width: '100%', m: 0}}>
          <Divider sx={{fontSize: '16px', fontWeight: 'bold', color: (theme)=> theme.palette.secondary.dark}} textAlign='left'>최근 사용한 계약서 양식</Divider>
        </Box>
       <TemplateList />
        <Box sx={{p:"20px", justifySelf: 'center',  alignSelf: 'center', height: '100%', overflowy: 'auto',
              display: 'flex', flexDirection: 'column' , justifyItems: 'center', alignItems: 'center',}}>
      <Box sx={{width: '100%', m: 3}}>
          <Divider sx={{fontSize: '16px', fontWeight: 'bold', color: (theme)=> theme.palette.secondary.dark}} textAlign='left'>내 업종 및 관심분야 계약서 양식</Divider>
        </Box>
       <Box sx={{height: '25px', alignSelf: 'start'}}><Chip label="엔터테인먼트"></Chip> <Chip label="방송/예술"></Chip> <Chip label="고용/노무"></Chip> <Chip label="재산권"></Chip></Box>
       <TemplateList />
      </Box>
     
      
    </BodyContainer>
  );
}