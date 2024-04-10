import React from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  useTheme
} from "@mui/material";
import { ActionButtonStyle } from "../../components/customstyles/SuperAdminStyle";
import ProfileIcon from "../../assets/images/actionsImg.png";
import ApproveIcon from "../../assets/images/approve.svg";
import RejectIcon from "../../assets/images/reject.svg";
import { useHistory } from "react-router-dom";
import ViewIcon from "../../assets/images/view.svg";


const useStyles = () => {
  const theme = useTheme();
  return ActionButtonStyle(theme);
};
const SuperActionButton = (props) => {
  const styles = useStyles();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useHistory();

  const handleViewCondidate = () => {
    props.handleViewCondidateDetails(props.data);
  };
  const handleApproveCondidate = () => {
    props.handleApproveCondidate(props.data.id);
  }
  const handleRejectCondidate = () => {
    props.handleRejectCondidate(props.data.id);
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
          icon={ViewIcon}
          text="View Details"
          onClick={() => {
            handleViewCondidate()
            handleCloseUserMenu();
          }}
        />
        {props.data.status === 2 && <UserActionItem
          icon={ApproveIcon}
          text="Approve"
          onClick={() => {
            handleApproveCondidate()
            handleCloseUserMenu();
          }}
        />}
        {props.data.status === 2 && <UserActionItem
          icon={RejectIcon}
          text="Reject"
          onClick={() => {
            handleRejectCondidate()
            handleCloseUserMenu();
          }}
        />}
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

export default SuperActionButton;
