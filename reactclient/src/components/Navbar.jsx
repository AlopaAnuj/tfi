import React, { useEffect } from "react";
import {
  useTheme,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  ListItem,
  List,
  SwipeableDrawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import webNavbarLogo from "../assets/images/logo.jpeg";
import NavLink from "../components/customcomponents/NavLink";
import LogOutDialog from "../components/LogOutDialog";
import logoutImage from "../assets/images/logout.svg";
import { getDashboardStyle } from "../components/customstyles/DashboardStyle";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};

const ELEVATION_THRESHOLD = 2;
const LogoutButton = ({ setShowLogoutDialog }) => {
  const styles = useStyles();
  return (
    <Box
      onClick={() => {
        setShowLogoutDialog(true);
      }}
      sx={styles.navbarLogoutStyle}
    >
      <img
        src={logoutImage}
        style={{
          height: "16px",
          width: "22px",
          marginRight: "6px",
        }}
        alt="logout"
      />
      Logout
    </Box>
  );
};

const LoginButton = () => {
  const history = useHistory();
  const styles = useStyles();
  return (
    <Box
      onClick={() => {
        history.push("../login");
      }}
      sx={styles.navbarLogoutStyle}
    >
      <img
        src={logoutImage}
        style={{
          height: "16px",
          width: "22px",
          marginRight: "6px",
        }}
        alt="logout"
      />
      Login
    </Box>
  );
};

function Navbar(props) {
  const styles = useStyles();
  const { isAuthenticated } = React.useContext(AuthContext);
  const [showLogoutDialog, setShowLogoutDialog] = React.useState(false);
  const [state, setState] = React.useState({
    left: false,
  });
  const [scroll, setScroll] = React.useState(window.scrollY);
  const { logout } = React.useContext(AuthContext);

  const toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ state, [side]: open });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sideList = (side) => (
    <div
      sx={styles.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {props.Nav.map((link, i) => (
          <div key={i}>
            <ListItem>
              <Box sx={styles.dispBlk}>
                <NavLink to={link.to}>
                  <img src={link.image} style={link.style} alt={link.title} />
                  {link.title}
                </NavLink>
              </Box>
            </ListItem>
          </div>
        ))}
        {isAuthenticated && <LogoutButton setShowLogoutDialog={setShowLogoutDialog} /> }
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scroll > ELEVATION_THRESHOLD ? 2 : 0}
        sx={styles.appBar}
      >
        <Toolbar style={{ padding: 0 }}>
          {/*big screen*/}
          <Typography
            sx={{ display: { xs: "none", sm: "block" } }}
            variant="h6"
            color="inherit"
          >
            <NavLink
              sx={{
                ...styles.logoBg,
                pointerEvents: "initial",
              }}
              to={props.homeLink}
              activeStyle={{
                borderBottom: "none",
              }}
            >
              <img src={webNavbarLogo} alt="logo" width="80px" height="80px" />
            </NavLink>
          </Typography>
            <IconButton
              sx={{ ...styles.menuButton, display: { sm: "none" } }}
              color="inherit"
              aria-label="Menu"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              ...styles.logoForMobile,
              display: { sm: "none" },
              marginLeft: "10%",
            }}
          >
            <NavLink
              to={props.homeLink}
              sx={{
                padding: "8px 20px 8px 20px",
                pointerEvents: "initial",
              }}
              activeStyle={{
                borderBottom: "none",
              }}
            >
              <img src={webNavbarLogo} alt="logo1" width="100px" height="61px"/>
            </NavLink>
          </Typography>
          {/*big screen*/}
          <Box
            sx={{
              width: "100%",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
            }}
          >
            {props.Nav.map((link, i) => (
              <NavLink key={i} to={link.to}>
                <img src={link.image} style={link.style} alt={link.title} />
                {link.title}
              </NavLink>
            ))}
            {isAuthenticated && <LogoutButton setShowLogoutDialog={setShowLogoutDialog} /> }
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar style={{ marginTop: "10px" }} />
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>

      {showLogoutDialog && (
        <LogOutDialog
          logout={logout}
          setShowLogoutDialog={setShowLogoutDialog}
        />
      )}
    </>
  );
}

export default Navbar;
