import React from "react";
import {
    Box,
    Typography,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import ProfileIcon from "../../assets/images/actionsImg.png";
import DeleteIcon from "../../assets/images/delete.svg";
import ViewIcon from "../../assets/images/view.svg";
import EditIcon from "../../assets/images/edit.svg";
import UserAgreementIcon from "../../assets/images/user-agreement.svg";

const StateAdminAction = (props) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleEditCondidateClick = () => {
        props.handleEditCondidate(props.data.id);
    };
    const handleDeleteCondidateClick = () => {
        props.handleDeleteCondidate(props.data.id);
    };
    const handleMakeRequestToReviewClick = () => {
        props.handleMakeRequestToReview(props.data.id);
    };
    const handleViewDetails = () => {
        props.handleViewDetails(props.data)
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
                {props.data.status === 1 || props.data.status === 3 && <UserActionItem
                    icon={EditIcon}
                    text="Edit"
                    onClick={() => {
                        handleEditCondidateClick()
                        handleCloseUserMenu();
                    }}
                />}
                {props.data.status === 1 && <UserActionItem
                    icon={DeleteIcon}
                    text="Delete"
                    onClick={() => {
                        handleDeleteCondidateClick()
                        handleCloseUserMenu();
                    }}
                />}
                {props.data.status === 1 || props.data.status === 3 && <UserActionItem
                    icon={UserAgreementIcon}
                    text="Make Request to Approve"
                    onClick={() => {
                        handleMakeRequestToReviewClick()
                        handleCloseUserMenu();
                    }}
                />}
                <UserActionItem
                    icon={ViewIcon}
                    text="View Details"
                    onClick={() => {
                        handleViewDetails();
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

export default StateAdminAction;
