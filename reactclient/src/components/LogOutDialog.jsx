import React from "react";
import { useHistory } from "react-router-dom";
import SuccessDialog from "./SuccessDialog";
import { Typography, useTheme } from "@mui/material";
import { getDashboardStyle } from "./customstyles/DashboardStyle";
const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};
function LogOutDialog({ setShowLogoutDialog, logout }) {
  const styles = useStyles();
  const navigate = useHistory();
  return (
    <SuccessDialog
      HeaderText={<Typography sx={styles.dialogHeading}>Logout ?</Typography>}
      successButton={[
        <Typography
          onClick={() => setShowLogoutDialog(false)}
          sx={styles.dialogbtnStyle}
        >
          Cancel
        </Typography>,
        <Typography
          onClick={async () => {
            await logout();
            setShowLogoutDialog(false);
            navigate.replace("/logout");
          }}
          sx={styles.dialogbtnStyle}
        >
          Logout
        </Typography>,
      ]}
      BodyText={
        <Typography sx={styles.dialogBodytext}>
          Are you sure you want to log out? If you want to login again, you need
          to reenter your username and password.
        </Typography>
      }
      dismiss={""}
    />
  );
}
export default LogOutDialog;
