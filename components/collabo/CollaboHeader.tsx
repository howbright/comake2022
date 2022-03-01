import Box from "@mui/material/Box";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";

export default function CollaboHeader() {
  return (
    <Box
      sx={{
        display: "grid",
        pl: 2,
        gridTemplateColumns: "40px 1fr",
        gridTemplateRows: "50px",
        gridTemplateAreas: `"backIcon title"`,
        backgroundColor: "white",
        boxShadow: 1
      }}
    >
      <Box
        sx={{
          gridArea: "backIcon",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ArrowBackIosIcon fontSize="small" color="primary" />
      </Box>
      <Box
        sx={{
          gridArea: "title",
          display: "grid",
          alignContent: "center",
        }}
      >
        <Typography variant="subtitle1" fontWeight="500" >콜라보 작성</Typography>
      </Box>
    </Box>
  );
}
