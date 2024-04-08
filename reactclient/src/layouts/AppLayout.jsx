import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import LoginPage from "../views/PublicPage/LoginPage";
import ThankYouPage from "../views/PublicPage/ThankYouPage";
import TimeOutBackground from "../components/TimeOutBackground";
import ErrorPage from "../views/PublicPage/ErrorPage";
import SuperAdmin from "../views/SuperAdmin/SuperAdminHome";
import StateAdmin from "../views/StateAdmin/StateAdminHome";
import RootComponent from "../views/HomePage/RootComponent";

function AppLayout(props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "300px",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "100%",
      }}
    >
      <Box
        sx={{
          overflowX: "auto",
          width: "100%",
          margin: "0 auto",
          padding: { xs: "0 10px 40px 10px", md: "0 20px 70px 20px" },
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          {props.location.pathname.includes("/superadmin") && <SuperAdmin />}
          {props.location.pathname.includes("/stateadmin") && <StateAdmin />}
          {props.location.pathname.includes("/dashboard") && <RootComponent />}
          <Route path="/errorpage" component={ErrorPage} />
          <Route path="/timeout" component={TimeOutBackground} />
          <Route path="/logout" component={ThankYouPage} />
          <Redirect to={"/dashboard"} />
        </Switch>
      </Box>
    </Box>
  );
}

export default AppLayout;
