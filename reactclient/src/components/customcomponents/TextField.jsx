import React from "react";
import { TextField } from "@mui/material";

export default function ({ children, ...otherProps }) {
  return (
    <>
      <TextField {...otherProps} />
      {children}
    </>
  );
}
