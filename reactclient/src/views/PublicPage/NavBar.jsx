import React from "react";
import { Box } from "@mui/material";
import tfilogo from "../../assets/tfilogo.jpg";
import { NavLink  } from "react-router-dom";
import '../AccountAdmin/ListOfState.css';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()

    const hanldeLogout = () => {
        localStorage.clear();
    }
    const handleLogoClick = () => {
      navigate(user.role === 1 ? "/adminhome" :"/userhome")
    }
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "123px", sm: "103px" },
          top: "0",
          left: "0",
          zIndex: "100",
          borderBottom: "1px solid #EDE9FD",
          backgroundColor: "#FBFAFF",
          width: "100%",
          fontSize: "18px",
          color: "#6147C0",
          fontWeight: "600",
          padding: { xs: "32px 16px", sm: "0 20px", md: "31px 60px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
            gap: { xs: "5px", sm: "20px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "97px", sm: "121px" },
            }}
          >
            <img
              loading="lazy"
              src={tfilogo}
              alt="ftilogo"
              onClick={handleLogoClick}
              style={{
                cursor: "pointer",
                width: "100%",
                height: "108px"
              }}
            />
          </Box>
          <Box
            sx={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: { xs: "21.79px", md: "24.51px" },
              margin: "auto 0",
            }}
          >

              <NavLink to={user.role === 1 ? "/adminhome" :"/userhome"} className="navlinkstyle">
                Home
              </NavLink>
              <NavLink  to={"/"}  onClick={hanldeLogout} className="navlinkstyle">
                Logout
              </NavLink>
          </Box>
        </Box>
      </Box>
      <Box sx={{ content: "''", height: { xs: "123px", sm: "103px" } }} />
    </>
  );
}
