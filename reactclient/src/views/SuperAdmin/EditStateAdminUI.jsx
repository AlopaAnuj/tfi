import React from "react";
import { connect } from "formik";
import { useEffect } from "react";
import {getUserRole,  getState } from "./options";
  
const EditStateAdminUI = (props) => {
  useEffect(() => {
    let data = props.editCondidateData;
    if (data) {
      props.formik.setFieldValue("userName", data.userName);
      props.formik.setFieldValue("role", getGender(data.gender, true));
      props.formik.setFieldValue("state", getState(data.state, true));
    }
  }, []);
  return <></>;
};

export default connect(EditStateAdminUI);
