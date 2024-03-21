import React from "react";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import trace from "../../assets/trace.png";
import homephoto from "../../assets/home.jpg";

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
          "Taekwondo is Olympic Games.",
          delayBetweenStrings,
          "Most popular martial arts",
          delayBetweenStrings,
          "39 affiliated members",
          delayBetweenStrings,
          "State Associations.",
          delayBetweenStrings,
          "Central Organizations.",
          delayBetweenStrings,
          "All National level Academic.",
          delayBetweenStrings,
          "Navodaya Vidyalaya.",
          delayBetweenStrings,
          "Universities",
          delayBetweenStrings,
          "Saraswati Vidya Mandir.",
          delayBetweenStrings,
          "Army, Navy & Air Force.",
          delayBetweenStrings,
          "CRPF, CISF, RPF, Police Control Board.",
          delayBetweenStrings,
          "District Taekwondo Championship",
          delayBetweenStrings,
          "Zonal Championships",
          delayBetweenStrings,
        ]}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
        }}
      />
    </Box>
  );
};

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: {
          xs: "rgba(106, 72, 185, 0.07)",
          sm: "rgba(211, 201, 249, 0.10)",
        },
        width: "100vw",
        overflowX: { xs: "auto", sm: "hidden" },
      }}
    >
      <Box
        sx={{
          gap: "10px",
          display: "flex",
        }}
      >
    <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "normal",
            width: { xs: "100%", md: "50%" },
            padding: {
              xs: "10px 10px 0px 16px",
              sm: "10px 10px 16px 20px",
              lg: "10px 10px 55px 30px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "0", sm: "20px" },
            }}
          >
            <Box
              sx={{
                color: "#312A4E",
                fontFamily: "Open Sans, sans-serif ",
                letterSpacing: "-1px",
                fontWeight: "500",
                gap: "40px",
                fontSize: { xs: "35px", sm: "34px", lg: "40px", xl: "54px" },
                lineHeight: {
                  xs: "42px",
                  sm: "44px",
                  lg: "50px",
                  xl: "76px",
                },
                maxWidth: { xs: "auto", sm: "350px", lg: "600px" },
              }}
            >
             TAEKWONDO IS THE MOST POPULAR MARTIAL ARTS
              <br />
              <TypingAnimation
                sx={{
                  color: "#312A4E",
                  fontFamily: "Open Sans, sans-serif ",
                  letterSpacing: "-1px",
                  fontWeight: "600",
                  gap: "40px",
                  fontSize: { xs: "31px", sm: "34px", lg: "40px", xl: "54px" },
                  lineHeight: {
                    xs: "42px",
                    sm: "44px",
                    lg: "50px",
                    xl: "76px",
                  },
                  maxWidth: { xs: "auto", sm: "350px", md: "600px" },
                }}
              />
            </Box>
            <Box
              sx={{
                fontFamily: "Open Sans, sans-serif ",
                fontSize: { xs: "16px", xl: "20px" },
                lineHeight: { xs: "28px", md: "24px", lg: "28px", xl: "32px" },
                fontWeight: "400",
                paddingRight: { xs: "0px", lg: "40px", xl: "80px" },
                paddingTop: "20px",
                textAlign:"justify"
              }}
            >
             Taekwondo is the most popular martial arts of our country and is a regular event of Olympic Games, Asian Games & National Games. We have 39 affiliated members i.e. State Associations and Central Organizations like SSCB (Army, Navy & Air Force), CRPF, CISF, RPF, Police Control Board, etc. Our sports has been recognized by almost all National level Academic Organizations like Kendriya Vidyalaya Sangathan, CBSE, Navodaya Vidyalaya, Universities, Saraswati Vidya Mandir Sanshthan, etc.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: { xs: "start", lg: "center" },
            paddingTop: { xs: "30px", lg: "0px" },
            width: { sm: "40%", md: "45%", lg: "50%" },
            transform: "translateY(-10px)",
          }}
        >
          <img
            loading="lazy"
            alt="Elevmi app on smartphone screens"
            src={homephoto}
            style={{
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
