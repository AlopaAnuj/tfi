import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  DialogTitle,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomDialogTitle = ({ children, onClose }) => {
  return (
    <DialogTitle
      disableTypography
      sx={{
        margin: 0,
        padding: "30px 24px 16px 24px",
        width: { xs: "100%", sm: "auto", md: "600px", lg: "800px" },
      }}
    >
      <Typography variant="h6" type="title">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function SuccessDialog({
  dismiss,
  HeaderText,
  BodyText,
  spinnerControl,
  dialogueOverDialogue,
  successButton,
}) {
  return (
    <Dialog
      onClose={dismiss}
      scroll="body"
      open={true}
      className={dialogueOverDialogue && "successDialogWrap"}
      disableBackdropClick
      aria-labelledby="customized-dialog-title"
      maxWidth="sm"
    >
      <CustomDialogTitle id="customized-dialog-title" onClose={dismiss}>
        {HeaderText}
      </CustomDialogTitle>
      <Divider />
      <DialogContent sx={{ padding: "15px 24px 15px 24px", fontSize: "14px" }}>
        {spinnerControl && (
          <CircularProgress
            sx={{ position: "absolute", top: "50%", left: "50%" }}
          />
        )}
        <Typography type="body2">{BodyText}</Typography>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ padding: "15px 24px 30px 24px" }}>
        {successButton.map((button, i) => (
          <div key={i}>
            <div>{button}</div>
          </div>
        ))}
      </DialogActions>
    </Dialog>
  );
}

export default SuccessDialog;
