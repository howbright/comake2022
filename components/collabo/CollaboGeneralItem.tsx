import Box from "@mui/material/Box";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Typography } from "@mui/material";

export default function CollaboGeneralItem() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 60px",
        gridTemplateRows: "40px",
        gridTemplateAreas: `"icon title date"`,
        gap: 1,
        backgroundColor: 'white',
        "&:hover": {
            backgroundColor: "grey.200",
            opacity: [0.9, 0.8, 0.7]}
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
        <ChatOutlinedIcon />
      </Box>
      <Box
        sx={{
          gridArea: "title",
          display: "grid",
          alignContent: "center",
        }}
      >
        <Typography sx={{fontSize:'15px'}}>Pin없는 대화 및 전체 메세지</Typography>
      </Box>
      <Box
        sx={{
          gridArea: "date",
          display: "grid",
          alignContent: "center",
        }}
      >
        <Typography variant="caption">2월 25일</Typography>
      </Box>
    </Box>
  );
}
