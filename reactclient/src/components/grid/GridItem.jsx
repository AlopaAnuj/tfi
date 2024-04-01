import React from "react";
import Grid from "@mui/material/Grid";

function GridItem(props) {
  const { children, sx, ...rest } = props;
  return (
    <Grid
      item
      {...rest}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "1px",
        flexBasis: "auto",
        ...sx,
      }}
    >
      {children}
    </Grid>
  );
}

export default GridItem;
