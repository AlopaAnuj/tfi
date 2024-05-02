// import React from "react";
// import { useTheme, Button } from "@mui/material";
// import TableViewIcon from "@mui/icons-material/TableView";
// import Tooltip from "@mui/material/Tooltip";
// import { ActionButtonStyle } from "../../components/customstyles/SuperAdminStyle";
// const useStyles = () => {
//   const theme = useTheme();
//   return ActionButtonStyle(theme);
// };
// const SuperAdminActionButton = (props) => {
//   const styles = useStyles();

//   const handleViewAllCondidates = () => {
//     props.handleCondidateList(props.stateId);
//   };

//   return (
//     <div sx={styles.root}>
//       <Tooltip title="View Condidates" placement="top" arrow>
//         <Button
//           color="inherit"
//           aria-haspopup="true"
//           onClick={handleViewAllCondidates}
//           sx={styles.ActnBtn}
//         >
//           <TableViewIcon sx={styles.actionFontSize} />
//         </Button>
//       </Tooltip>
//     </div>
//   );
// };

// export default SuperAdminActionButton;


import React from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ProfileIcon from "../../assets/images/actionsImg.png";
import EditIcon from "../../assets/images/edit.svg";
import ViewIcon from "../../assets/images/view.svg";

const SuperAdminActionButton = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCondidateList = () => {
    props.handleCondidateList(props.stateId);
  };
  const handleEditStateAdmin = () => {
    props.handleEditStateAdmin(props.stateId);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        sx={{ borderRadius: "50%", minWidth: "initial", width: "40px" }}
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenUserMenu}
      >
        <img
          src={ProfileIcon}
          alt="profile icon"
          height={"24px"}
          width={"24px"}
        />
      </Button>
      <Menu
        sx={{ mt: "40px", ml: "15px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <UserActionItem
          icon={EditIcon}
          text="Edit Admin"
          onClick={() => {
            handleEditStateAdmin()
            handleCloseUserMenu();
          }}
        />
     <UserActionItem
          icon={ViewIcon}
          text="View Condidates"
          onClick={() => {
            handleCondidateList()
            handleCloseUserMenu();
          }}
        />
      </Menu>
    </Box>
  );
};

function UserActionItem({ icon, text, onClick }) {
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
      }}
    >
      <Box sx={{ height: "24px", width: "24px" }}>
        <img src={icon} alt="about icon" height={"100%"} />
      </Box>
      <Typography
        sx={{
          lineHeight: "24px",
          letterSpacing: "0.15px",
        }}
      >
        {text}
      </Typography>
    </MenuItem>
  );
}

export default SuperAdminActionButton;
