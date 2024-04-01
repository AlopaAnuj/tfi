import React from "react";
import Grid from "@mui/material/Grid";

function GridContainer({ ...props }) {
  const { children, sx, ...rest } = props;
  return (
    <Grid container {...rest} sx={sx}>
      {children}
    </Grid>
  );
}

export default GridContainer;
