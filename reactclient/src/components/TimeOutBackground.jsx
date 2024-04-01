import React from "react";
import Button from "./customcomponents/CustomButton";
import ErrorDialog from "./ErrorDialog";
import { useHistory } from "react-router-dom";
import { useTheme } from "@mui/material";

function TimeOutBackground() {
  const history = useHistory();
  const theme = useTheme();
  let HeaderText = "Session has been expired due to inactivity.";
  return (
    <ErrorDialog HeaderText={HeaderText} dismiss={""}>
      <Button
        primary
        sx={{
          color: theme.btnColour.btnTextColour,
          backgroundColor: theme.btnColour.btnBackgroundColour,
          border: "1px solid " + theme.btnColour.btnBackgroundColour,
          borderRadius: "50px",
          margin: "8px 0",
          textAlign: "right",
          padding: "7px 15px",
          "&:hover": {
            backgroundColor: theme.btnColour.btnBackgroundColour,
            color: theme.btnColour.btnTextColour,
            border: "1px solid " + theme.btnColour.btnBackgroundColour,
            opacity: "0.8",
          },
        }}
        onClick={() => {
          history.push(`./logout`);
        }}
      >
        Ok
      </Button>
    </ErrorDialog>
  );
}

export default TimeOutBackground;
