import React from "react";
import { Offline } from "react-detect-offline";
import ErrorDialog from "../src/components/ErrorDialog";
import App from "./App";

function RenderAppBasedOnInternet() {
  return (
    <>
      <App />
      <Offline
        polling={{
          url: "https://internet.code.amalgamrx.com",
          interval: 30000,
          timeout: 10000,
        }}
      >
        <ErrorDialog
          HeaderText="You are offline. Please connect to Internet to use the application."
          dismiss={""}
        />
      </Offline>
    </>
  );
}

export default RenderAppBasedOnInternet;
