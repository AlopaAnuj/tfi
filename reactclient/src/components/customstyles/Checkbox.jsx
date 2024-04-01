import React from "react";
import { Checkbox } from "@mui/material";

export default (props) => {
  const { name, isSelected, color, ...other } = props;

  return (
    <Checkbox
      name={name}
      checked={isSelected}
      color={color ? color : "primary"}
      {...other}
    />
  );
};
