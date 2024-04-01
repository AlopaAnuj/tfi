import React from "react";
import { Helmet } from "react-helmet";
import { Card, Typography, Stack, Box } from "@mui/material";

function LoginLayout(props) {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Card
          raised={true}
          sx={{
            padding: "40px",
            borderRadius: "10px",
            marginTop: "11%",
            width: { xs: "100%", sm: "600px" },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={(theme) => ({
                margin: "30px",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "1px",
                letterSpacing: "0.5px",
                color: theme.textColour.primaryColor,
              })}
            >
              Login
            </Typography>
            {props.children}
          </Box>
        </Card>
      </Stack>
    </>
  );
}

export default LoginLayout;
