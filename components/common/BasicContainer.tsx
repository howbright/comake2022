import React, { ReactChildren, ReactChild } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface ContainerProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function BasicContainer({ children }: ContainerProps) {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.background.default,
          height: "100vh",
          border: 1,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
