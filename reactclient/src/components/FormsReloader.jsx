import React, { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import queryString from "query-string";
import { useHistory } from "react-router-dom";

function FormsReloader(props) {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      if (props.location.state && props.location.state.patientName) {
        history.push(
          "./" + queryString.parse(props.location.search).reloadTo,
          props.location.state
        );
      } else if (props.location.state) {
        history.push(
          "./" +
            queryString.parse(props.location.search).reloadTo +
            "/" +
            props.location.state
        );
      } else {
        history.push("./" + queryString.parse(props.location.search).reloadTo);
      }
    }, 100);
  }, []);

  return (
    <>
      <CircularProgress />
    </>
  );
}

export default FormsReloader;
