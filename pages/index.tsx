import * as React from "react";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import ButtonAppBar from "../components/ButtonAppBar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import {
  Alert,
  Button,
  Chip,
  Icon,
  IconButton,
  ListItemIcon,
  Paper,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TemplateIntro from "../components/TemplateIntro";
import Layout from "../components/layout";
import Notification from "../components/Notification";

const Home: NextPage = () => {
  return (
    <Layout>
      <ButtonAppBar></ButtonAppBar>
      <Box
        sx={{
          width: "100%",
          height: "100%",
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
            height: "155px",
            borderRadius: 1,
            backgroundColor: (theme) => theme.palette.background.paper,
            mt: 9,
            mb: 0.5,
          }}
        >
          <Box
            sx={{
              my: 2,
              mx: 3,
              display: "grid",
              gridTemplateColumns: "[col1] auto [col2] 1fr[col3] 30px",
              justifyContent: "start",
              gap: 1,
              gridTemplateRows: "20px",
              gridTemplateAreas: `"logo name setting"`,
            }}
          >
            <Box
              component="img"
              sx={{
                gridArea: "logo",
                justifySelf: "center",
                height: 20,
              }}
              alt="logo"
              src={process.env.NEXT_PUBLIC_BACKEND_URL + "/logo.jpeg"}
            ></Box>
            <Box
              component={"span"}
              sx={{
                gridArea: "name",
                mt: -0.1,
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              (주)JYP엔터테인먼트
            </Box>
            <Box
              sx={{
                gridArea: "setting",
                alignSelf: "center",
                display: "grid",
                justifyContent: "stretch",
                alignContent: "stretch",
                borderLeft: 1,
                borderColor: "grey.300",
              }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider sx={{ m: 1 }}></Divider>
          <Box
            sx={{
              mx: 1,
              display: "grid",
              gridTemplateColumns:
                "[col1] 90px [col2] auto [col3] 1fr [col4] 45px",
              gap: 1,
              gridTemplateRows: "30px 30px",
              gridTemplateAreas: `"profile name email setting"
        "profile title title setting"`,
            }}
          >
            <Box
              sx={{
                gridArea: "profile",
                justifySelf: "center",
                alignSelf: "center",
              }}
            >
              <Avatar
                alt="최민태 변호사"
                src={process.env.NEXT_PUBLIC_BACKEND_URL + "/test.jpeg"}
                sx={{ width: 70, height: 70 }}
              />
            </Box>
            <Box
              component={"span"}
              sx={{
                gridArea: "name",
                fontWeight: "bold",
                justifySelf: "start",
                alignSelf: "end",
              }}
            >
              최민태
            </Box>
            <Box
              component={"span"}
              whiteSpace="pre"
              sx={{
                height: "13px",
                gridArea: "title",
                display: "inline-flex",
                flexDirection: "column",
                alignContent: "end",
                justifySelf: "start",
                fontSize: "13px",
                color: (theme) => theme.palette.secondary.dark,
              }}
            >
              변호사 / 변리사
              <Box
                component={"span"}
                whiteSpace="pre"
                sx={{
                  height: "13px",
                  gridArea: "title",
                  display: "inline-grid",
                  justifyItems: "start",
                  fontSize: "13px",
                  cfmnedolor: "blue",
                }}
              >
                법무팀
              </Box>
            </Box>
            <Box sx={{ gridArea: "email" }}>
              {/* <MailIcon fontSize='small' sx={{ mr:1, alignSelf: 'center'}} /> */}
              <Chip
                sx={{ backgroundColer: "red" }}
                label="choitmin@jyp.com"
              ></Chip>
            </Box>
            <Box
              sx={{
                gridArea: "setting",
                alignSelf: "center",
                display: "grid",
                justifyContent: "stretch",
                alignContent: "stretch",
                borderLeft: 1,
                borderColor: "grey.300",
              }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Notification></Notification>
        <TemplateIntro />
      </Box>
    </Layout>
  );
};
export default Home;
