import React from "react";
import { CircularProgress, Button, useTheme } from "@mui/material";

const useStyles = (theme) => ({
  primary: {
    color: theme.btnColour.btnTextColour,
    backgroundColor: theme.btnColour.btnBackgroundColour,
    border: "1px solid " + theme.btnColour.btnBackgroundColour,
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: theme.btnColour.btnBackgroundColour,
      opacity: 0.8,
    },
    minWidth: { xs: "100%", sm: "" },
    "&:disabled": {
      backgroundColor: theme.custom.buttonDisabledBg,
      color: theme.custom.buttonDisabledTextClr,
      border: "1px solid " + theme.custom.buttonDisabledTextClr,
    },
  },
  secondary: {
    backgroundColor: theme.btnColour.btnSecondaryBackground,
    color: theme.palette.accent3.main,
    fontWeight: "500 !important",
    minWidth: { xs: "100%", sm: "" },
    marginLeft: { xs: 0 },
    "&:disabled": {
      backgroundColor: theme.custom.buttonDisabledBg,
      color: theme.custom.buttonDisabledTextClr,
      border: "1px solid " + theme.custom.buttonDisabledTextClr,
    },
  },
  customDashboard: {
    borderRadius: "50px",
    margin: "8px 0",
    minWidth: "218px !important",
    textAlign: "right",
    padding: "7px 20px",
  },
  customSubmit: {
    borderRadius: "25px",
    minWidth: "242px !important",
    padding: "5px 0",
  },
  customDialog: { borderRadius: "50px", padding: "3px 35px" },
  wrapper: {
    margin: theme.spacing(1),
    display: "inline-block",
    position: "relative",
  },
  buttonProgress: {},
});

const CustomButton = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const {
    loading,
    children,
    primary,
    secondary,
    dashboard,
    dialog,
    submit,
    sx,
    wrapperSx,
    ...other
  } = props;
  const buttonColorHandler = () => {
    if (primary) {
      return styles.primary;
    } else if (secondary) {
      return styles.secondary;
    } else {
      return {};
    }
  };
  const buttonLocationHandler = () => {
    if (dashboard) {
      return styles.customDashboard;
    } else if (submit) {
      return styles.customSubmit;
    } else if (dialog) {
      return styles.customDialog;
    } else {
      return {};
    }
  };
  return (
    <div
      style={{
        ...styles.wrapper,
        ...wrapperSx,
      }}
    >
      <Button
        sx={{
          ...buttonColorHandler(),
          ...buttonLocationHandler(),
          ...sx,
        }}
        disabled={loading}
        {...other}
      >
        {children}
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            top: "80%",
            left: "90%",
            marginTop: -12,
            marginLeft: -12,
          }}
        />
      )}
    </div>
  );
};

export default CustomButton;
