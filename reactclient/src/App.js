import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppLayout from "./layouts/AppLayout";
import theme from "./ThemeFile";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TFI Portal</title>
        <link rel="icon" type="image/png" href="" />
      </Helmet>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/superadmin" component={AppLayout} />
            <Route path="/stateadmin" component={AppLayout} />
            <Route path="/dashboard" component={AppLayout} />
            <Route path="*" component={AppLayout} />
          </Switch>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
export default App;
