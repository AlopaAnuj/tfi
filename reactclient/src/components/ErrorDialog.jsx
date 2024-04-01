import React from "react";
import {
  Typography,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomDialogTitle = ({ children, onClose }) => {
  return (
    <DialogTitle
      disableTypography={true}
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing(2),
        width: { xs: "154px", sm: "300px", md: "600px" },
      })}
    >
      <Typography variant="subtitle2" type="body2" sx={{ width: "100%" }}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          sx={(theme) => ({
            position: "absolute",
            right: theme.spacing(0.0001),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
          })}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const ErrorDialog = ({ dismiss, HeaderText, children }) => {
  return (
    <Dialog
      onClose={dismiss}
      scroll="body"
      open={true}
      aria-labelledby="customized-dialog-title"
      disableBackdropClick
      maxWidth="lg"
      className="mainRoot"
    >
      <CustomDialogTitle onClose={dismiss}>{HeaderText}</CustomDialogTitle>
      <Divider />
      <DialogActions>{children}</DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
