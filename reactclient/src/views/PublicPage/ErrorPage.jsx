import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../../components/customcomponents/CustomButton";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { useTheme, Box, Typography } from "@mui/material";

function ErrorPage(props) {
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    let { errorMessage } = queryString.parse(props.location.search);
    setErrorMessage(errorMessage);
  });
  const dismissDialog = () => {
    history.push(`../login`);
  };
  return (
    <>
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          marginTop: "10%",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "600" }} type="title">
          Error...{" "}
        </Typography>
        <br />
        <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
        <Box
          sx={{
            justifyContent: "flex-end",
            position: "relative",
            padding: "16px 0px",
            margin: "30px 0 20px",
          }}
          disabled={props.isSubmitting}
        >
          <br />
          <br />
          <Button primary dashboard onClick={dismissDialog}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ErrorPage;
