import Box from "@mui/material/Box";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Badge, Divider } from "@mui/material";

interface CollaboPinItemProps {
  id: string;
  text: string;
  date: string;
  count?: number;
}

export default function CollaboPinItemprops(props: CollaboPinItemProps) {
  const sData = `'esreaer
asdfasdf'`;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 60px",
        gridTemplateRows: "auto",
        gap: 1,
        gridTemplateAreas: "icon text icon2",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "grey.200",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box
        sx={{
          gridAreas: "icon",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Badge badgeContent={props.count} color='error'>
        <PushPinOutlinedIcon />
        </Badge>
      </Box>
      <Box
        sx={{
          gridAreas: "text",
          display: "grid",
          alignContent: "center",
          fontSize:'9px',
          p:'5px'
        }}
      >
        {props.text}
      </Box>
      <Box
        sx={{
          gridAreas: "icon2",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          fontSize:'9px'
        }}
      >
        {props.date}
      </Box>
    </Box>
  );
}
