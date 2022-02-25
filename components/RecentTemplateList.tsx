import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ListItemIcon } from '@mui/material';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

export default function RecentTemplateList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', p:'20px', mt:1}}>
      <ListItem alignItems="flex-start">
      <ListItemIcon>
          <FeedOutlinedIcon color='warning' fontSize='large' />
        </ListItemIcon>
        <ListItemText
          primary="가수 표준 방송출연 계약서"
          secondary={
            <React.Fragment>
              {"가수의 프로그램 출연과 가창에 대한 방송사 또는 제작사, 소속사, 가수 간의 권리와 의무에 관한 계약서"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      <ListItemIcon>
          <FeedOutlinedIcon color='warning' fontSize='large' />
        </ListItemIcon>
        <ListItemText
          primary="방송 업종 표준 하도급 계약서(표준계약서)"
          secondary={
            <React.Fragment>
              {" 가수의 프로그램 출연과 가창에 대한 방송사 또는 제작사, 소속사, 가수 간의 권리와 의무에 관한 계약서"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      <ListItemIcon>
          <FeedOutlinedIcon color='warning' fontSize='large' />
        </ListItemIcon>
        <ListItemText
          primary="가수 표준 방송출연 계약서(표준계약서)"
          secondary={
            <React.Fragment>
              {' — 가수의 프로그램 출연과 가창에 대한 방송사 또는 제작사, 소속사, 가수 간의 권리와 의무에 관한 계약서'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}