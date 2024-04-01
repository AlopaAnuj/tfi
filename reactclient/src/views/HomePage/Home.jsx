import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import trace from "../../assets/trace.png";
import homephoto from "../../assets/6.jpg";

const TypingAnimation = (sx) => {
  const delayBetweenStrings = 2000;
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          overflow: "visible",
          top: "0",
          left: { xs: "-15px", md: "-15px" },
          width: {
            xs: "110%",
            sm: "410px",
            md: "430px",
            lg: "530px",
            xl: "650px",
          },
          height: "100%",
          objectFit: "fill",
          objectPosition: "center",
          zIndex: "-1",
          transform: { xs: "scale(1)", sm: "scale(1.1)" },
        }}
      >
        <img
          src={trace}
          alt=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
      <TypeAnimation
        preRenderFirstString={true}
        speed={70}
        deletionSpeed={80}
        sequence={[
          "Commitment to Excellence, Endless Possibilities",
          delayBetweenStrings,
          "Taekwondo, an Olympic Sport",
          delayBetweenStrings,
          "First introduced in the 1988 Seoul Olympics.",
          delayBetweenStrings,
          "Speed, agility, strategic maneuvers.",
          delayBetweenStrings,
        ]}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          fontWeight:600,
        }}
      />
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Typography style={{ color: "#312A4E", letterSpacing: "1px", fontWeight: "500", fontSize: "40px", lineHeight: "40px" }}>Official govt. recognized federation for Taekwondo in INDIA</Typography>
            <br ></br>
            <TypingAnimation />
            <br ></br>
            <Typography style={{ color: "black", letterSpacing: "1px", fontWeight: "400", fontSize: "20px", textAlign: "justify" }}>Taekwondo, introduced in the 1988 Seoul Olympics, appeared on the Olympic program officially for the first time at the Games of the XXVII Olympiad in Sydney in 2000, after twice being included as a demonstration sport (Seoul 1988 and Barcelona 1992). Women's and men's events were added simultaneously, marking a significant milestone in the sport's Olympic journey.</Typography>
          </Grid>
          <Grid item xl={6} lg={6} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
            <img
              alt="not found"
              src={homephoto}
              style={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
