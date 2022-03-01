import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicContainer from "../components/common/BasicContainer";
import Layout from "../components/layout";
import CollaboHeader from "../components/collabo/CollaboHeader";
import CollaboTitleItem from "../components/collabo/CollaboTitleItem";
import CollaboGeneralItem from "../components/collabo/CollaboGeneralItem";
import CollaboPinItem from "../components/collabo/CollaboPinItem";
import { Button, Divider } from "@mui/material";

const pins = [
  {
    id: "1",
    count: 4,
    date: "1시간",
    text: `제 2 조 【 계약기간 】
	계약기간은 기본 3개월까지 하기로 하며, 상호 계약해지 의사가 없을 경우 자동으로 1개월씩 연장...
`,
  },
  {
    id: "2",
    count: 0,
    date: "2월25일",
    text: `제 3 조【 보  수】
	1. “을”의 보수는 월정액으로 지급하며 일금               원정  (\        ...
`,
  },
];

const Collabo: NextPage = () => {
  return (
    <Layout>
      <BasicContainer>
        <CollaboHeader />
        <CollaboTitleItem
          title="프리랜서 용역 계약서(2022년 1월 5일 with 김하)"
          member="최지인, 이나현, 김하, 조원희 "
        />
        <Box sx={{ pl: 5, backgroundColor: "white" }}>
          <CollaboGeneralItem />
          {pins.map((pin) => {
            return (
              <CollaboPinItem
                id={pin.id}
                text={pin.text}
                date={pin.date}
                count={pin.count}
              ></CollaboPinItem>
            );
          })}
        </Box>
        <Box sx={{ height: "40px", display: "grid", justifyContent: "end" }}>
          <Button variant="text" size="small">
            핀 추가
          </Button>
        </Box>
        <Divider />
        <CollaboTitleItem
          title="임대차 계약서(2022년 1월 3일 with 최수호)"
          member="최수호"
        />
        <Box sx={{ pl: 5, backgroundColor: "white" }}>
          <CollaboGeneralItem />
          {pins.map((pin) => {
            return (
              <>
              <CollaboPinItem
                id={pin.id}
                text={pin.text}
                date={pin.date}
                count={pin.count}
              ></CollaboPinItem>
              </>
            );
          })}
        </Box>
        <Box sx={{ height: "40px", display: "grid", justifyContent: "end" }}>
          <Button variant="text" size="small">
            핀 추가
          </Button>
        </Box>
        <Divider />
      </BasicContainer>
    </Layout>
  );
};

export default Collabo;
