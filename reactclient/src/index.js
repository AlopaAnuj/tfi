import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import RenderAppBasedOnInternet from "./RenderAppBasedOnInternet";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <RenderAppBasedOnInternet />
    </BrowserRouter>
  </React.StrictMode>
);
