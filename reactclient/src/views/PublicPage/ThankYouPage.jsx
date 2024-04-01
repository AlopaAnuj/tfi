import React from "react";
import { Link, Typography, Box } from "@mui/material";
// import logoutImage from "../assets/images/logout.svg";
import { useHistory } from "react-router-dom";

function ThankYouPage() {
  const history = useHistory();

  return (
    <Box
      sx={{
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {/* <img
        alt="logout icon"
        src={logoutImage}
        style={{
          height: "45px",
          width: "50px",
          marginBottom: "25px",
        }}
      /> */}
      <Typography
        sx={(theme) => ({
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "32px",
          letterSpacing: "1px",
          textAlign: "center",
          color: theme.textColour.headingColour,
        })}
      >
        You have successfully logged out.
      </Typography>
      <Typography
        sx={(theme) => ({
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: ".5px",
          textAlign: "center",
          color: theme.textColour.headingColour,
        })}
      >
        If you need to access TFI Portal again, Please click on login button,
        <br />
        And enter the username and password to login.
      </Typography>
      <Link
        sx={{
          fontSize: "14px",
          cursor: "pointer",
          textDecoration: "none",
          fontWeight: "600",
          marginTop: "10px",
        }}
        onClick={() => {
          history.push(`./login`);
        }}
      >
        Back To Login
      </Link>
    </Box>
  );
}
export default ThankYouPage;
