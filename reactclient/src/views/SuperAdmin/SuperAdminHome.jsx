import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import SuperAdminDashboard from "./SuperAdminDashboard";
import { useTheme } from "@mui/material";
import FormReloader from "../../components/FormsReloader";
import Navbar from "../../components/Navbar";
import StateCondidateView from "./StateCondidateView";
import CreateStateAdmin from "./CreateStateAdmin";
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle";
import dashboard from "../../assets/dashboard.png";
import EventDashboard from "./Events/EventDashboard";
import CreateEvent from "./Events/CreateEvent";

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
      to: `${match.url}/events`,
      image: dashboard,
      title: "Events",
      style: styles.navBarIconStyle,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Super Admin</title>
      </Helmet>
      <Navbar Nav={Nav} homeLink={"/superadmin/dashboard"} />

      <Switch>
        <Route
          path={`${match.url}/condidatelist/:stateId`}
          component={StateCondidateView}
        />
        <Route
          path={`${match.url}/dashboard`}
          component={SuperAdminDashboard}
        />
        <Route
          path={`${match.url}/events`}
          component={EventDashboard}
        />
        <Route
          path={`${match.url}/createevent`}
          component={CreateEvent}
        />
        <Route
          path={`${match.url}/editevent/:id`}
          component={CreateEvent}
        />
        <Route
          path={`${match.url}/createstateadmin`}
          component={CreateStateAdmin}
        />
        <Route path={`${match.url}/formReloader`} component={FormReloader} />
        <Redirect to={`${match.url}/dashboard`}></Redirect>
      </Switch>
    </>
  );
}
export default SuperAdmin;
