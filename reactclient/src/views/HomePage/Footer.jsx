import React from "react";
import { Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const useStyles = () => {
  return {
    footercontainer: {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%"
    },
    navLinkStyle: {
      textDecoration: "none",
      padding: "10px"
    },
  };
};

export default function Footer() {
  const styles = useStyles();

  return (
    <div style={styles.footercontainer}>
      <Grid container spacing={2} style={{ borderTop: "2px solid #EDE9FD", borderBottom: "2px solid #EDE9FD", paddingLeft: "20px", paddingTop: "24px", paddingRight: "20px", paddingBottom: "24px" }}>
        <Grid item xl={4} lg={4} md={12} xs={12}>
          <NavLink to={"/"} style={styles.navLinkStyle}>
            Facebook
            {/* <img src={link.image} style={link.style} alt={link.title} /> */}
          </NavLink>
          <NavLink to={"/"} style={styles.navLinkStyle}>
            Instagram
            {/* <img src={link.image} style={link.style} alt={link.title} /> */}
          </NavLink>
          <NavLink to={"/"} style={styles.navLinkStyle}>
            Twitter
            {/* <img src={link.image} style={link.style} alt={link.title} /> */}
          </NavLink>
          <NavLink to={"/"} style={styles.navLinkStyle}>
            YouTube
            {/* <img src={link.image} style={link.style} alt={link.title} /> */}
          </NavLink>
        </Grid>
        <Grid item xl={5} lg={5} md={12} xs={12}>
          <Typography>Copyright @ TFI & Movers All Rights Reserved.</Typography>
        </Grid>
        <Grid item xl={3} lg={3} md={12} xs={12}>
          <Typography>membership@officialtfi.com</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
