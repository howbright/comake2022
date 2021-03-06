import Box from "@mui/material/Box";
import React, { ReactChild, ReactChildren } from "react";

interface BodyContainerProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function BodyContainer({ children }: BodyContainerProps) {
  return (
    <Box
      sx={{
        m: 0.5,
        boxShadow: 1,
        width: "100%",
        maxWidth: "600px",
        justifySelf: "center",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {children}
    </Box>
  );
}
