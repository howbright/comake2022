import React, { ReactChildren, ReactChild } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface ContainerProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function BasicContainer({ children }: ContainerProps) {
  return (
    <Box
        sx={{
          width: "100%",
          height: '100%',
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
       <Box
          sx={{
            boxShadow: 1,
            width: "100%",
            maxWidth: "600px",
            justifySelf: "center",
            alignSelf: "center",
            height: '100vh',
            backgroundColor: (theme) => theme.palette.background.paper
          }}
        >
       {children}
       </Box>

      </Box>
  //   <Container maxWidth="sm">
  //     <Box
  //       sx={{
  //         bgcolor: (theme) => theme.palette.background.default,
  //         height: "100vh",
  //       }}
  //     >
  //       {children}
  //     </Box>
  //   </Container>
  );
}
