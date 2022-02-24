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
          primary="가수 표준 방송출연 계약서(표준계약서)"
          secondary={
            <React.Fragment>
                 <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="secondary.dark"
              >
                초안 작성중
              </Typography>
              {" - 2020/02/08"}
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
                 <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="green"
              >
                콜라보 작성중
              </Typography>
              {" - 2020/02/08"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}