import { useTheme } from "@mui/material";
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

function NavLink({ to, children, width, activeStyle, sx }) {
  const theme = useTheme();
  return (
    <RouterNavLink
      to={to}
      style={
        width === "xs" || width === "sm"
          ? {
              lineHeight: "1.75",
              textDecoration: "none",
              display: "block",
              float: "left",
              color: "#001C61",
              ...sx,
            }
          : {
              lineHeight: "24px",
              letterSpacing: 1,
              padding: "20px 17px",
              textDecoration: "none",
              display: "inline-flex",
              float: "left",
              fontSize: "14px",
              fontWeight: 500,
              color: "#00446B",
              ...sx,
            }
      }
      activeStyle={{
        borderBottom: `2px solid ${theme.custom.activeNavLink}`,
        textDecoration: "none",
        ...activeStyle,
      }}
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
