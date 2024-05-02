import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import StateAdminDashboard from "./StateAdminDashboard";
import { useTheme } from "@mui/material";
import FormReloader from "../../components/FormsReloader";
import Navbar from "../../components/Navbar";
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle";
import CreateCondidate from "./CreateCondidate";
import dashboard from "../../assets/dashboard.png";
import group from "../../assets/group.png";
import UpdatePassword from "./UpdatePassword/UpdatePassword";

const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};

function SuperAdmin() {
  const styles = useStyles();

  const match = useRouteMatch();
  const Nav = [
    {
      to: `${match.url}/dashboard`,
      image: dashboard,
      title: "Dashboard",
      style: styles.navBarIconStyle,
    },
    {
      to: `${match.url}/updatepassword`,
      image: group,
      title: "Update Password",
      style: styles.navBarIconStyle,
    },
  ];
  return (
    <>
      <Helmet>
        <title>State Admin</title>
      </Helmet>
      <Navbar Nav={Nav} homeLink={"/stateadmin/dashboard"} />

      <Switch>
        <Route
          path={`${match.url}/addcondidate`}
          component={CreateCondidate}
        />
        <Route
          path={`${match.url}/updatepassword`}
          component={UpdatePassword}
        />
        <Route
          path={`${match.url}/editcondidate/:id`}
          component={CreateCondidate}
        />
        <Route
          path={`${match.url}/dashboard`}
          component={StateAdminDashboard}
        />
        <Route path={`${match.url}/formReloader`} component={FormReloader} />
        <Redirect to={`${match.url}/dashboard`}></Redirect>
      </Switch>
    </>
  );
}
export default SuperAdmin;
