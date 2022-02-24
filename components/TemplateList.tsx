import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function TemplateList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', mt:1}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
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
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
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
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
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