import React from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ProfileIcon from "../../../assets/images/actionsImg.png";
import EditIcon from "../../../assets/images/edit.svg";
import DeleteIcon from "../../../assets/images/delete.svg";

const EventActionButton = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDeleteEvent = () => {
    props.handleDeleteEvent(props.id);
  };
  const handleEditEventDetails = () => {
    props.handleEditEvent(props.id);
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
          text="Edit Event"
          onClick={() => {
            handleEditEventDetails()
            handleCloseUserMenu();
          }}
        />
     <UserActionItem
          icon={DeleteIcon}
          text="Delete Event"
          onClick={() => {
            handleDeleteEvent()
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

export default EventActionButton;
