import CircleIcon from "@mui/icons-material/Circle";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

interface CollaboTitleItemProps {
  title: string;
  member: string;
}
// backgroundColor: '#e8eaf9'
export default function CollaboTitleItem(props: CollaboTitleItemProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "30px 30px 1fr 30px",
        gridTemplateRows: "auto 20px",
        gridTemplateAreas: `"icon title title more" ". see-icon member ."`,
        backgroundColor: '#e8f5e9',
        p: "10px",
      }}
    >
      <Box
        sx={{
          gridArea: "icon",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CircleIcon sx={{ color: "#00e676", fontSize: "15px" }} />
      </Box>
      <Box
        sx={{
          gridArea: "title",
          display: "grid",
          alignContent: "center",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Box>
      <Box
        sx={{
          gridArea: "more",
          display: "grid",
          alignContent: "center",
        }}
      >
        <IconButton aria-label="delete" >
          <MoreVertIcon  />
        </IconButton>
      </Box>
      <Box
        sx={{
          gridArea: "member",
          display: "grid",
          alignContent: "center",
        }}
      >
        <Typography variant="caption">{props.member}</Typography>
      </Box>
      <Box
        sx={{
          gridArea: "see-icon",
          display: "grid",
        }}
      >
        <VisibilityIcon sx={{ fontSize: "19px", color: "#808e95" }} />
      </Box>
    </Box>
  );
}
