import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";
import About from "./About";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Gallery from "./Gallery"
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle";
import dashboard from "../../assets/dashboard.png";
import contactUs from "../../assets/contact-us.png";
import groupImage from "../../assets/group.png";
import galleryImage from "../../assets/image-gallery.png";
import LoginPage from "../PublicPage/LoginPage";
const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};

function RootComponent() {
  const styles = useStyles();

  const match = useRouteMatch();
  const Nav = [
    {
      to: `${match.url}/home`,
      image: dashboard,
      title: "Home",
      style: styles.navBarIconStyle,
    },
    {
      to: `${match.url}/gallery`,
      image: galleryImage,
      title: "Gallery",
      style: styles.navBarIconStyle,
    },
    {
      to: `${match.url}/about`,
      image: groupImage,
      title: "About",
      style: styles.navBarIconStyle,
    },
    {
      to: `${match.url}/contact`,
      image: contactUs,
      title: "Contact",
      style: styles.navBarIconStyle,
    },
    {
      to: `../login`,
      image: contactUs,
      title: "Login",
      style: styles.navBarIconStyle,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Navbar Nav={Nav} homeLink={"/dashboard/home"} />
      <Switch>
        <Route
          path={`${match.url}/contact`}
          component={Contact}
        />
        <Route
          path={`${match.url}/gallery`}
          component={Gallery}
        />
        <Route
          path={`${match.url}/home`}
          component={HomePage}
        />
        <Route
          path={`${match.url}/about`}
          component={About}
        />
        <Route
          path={`${match.url}/login`}
          component={LoginPage}
        />
        <Redirect to={`${match.url}/home`}></Redirect>
      </Switch>
    </>
  );
}
export default RootComponent;
