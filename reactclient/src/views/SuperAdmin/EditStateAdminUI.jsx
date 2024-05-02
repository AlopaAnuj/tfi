import React from "react";
import { connect } from "formik";
import { useEffect } from "react";
import {getUserRole,  getState } from "../StateAdmin/options";
  
const EditStateAdminUI = (props) => {
  useEffect(() => {
    let data = props.editStateAdminData;
    console.log(data)
    if (data) {
      props.formik.setFieldValue("userName", data.userName);
      props.formik.setFieldValue("role", getUserRole(data.role, true));
      props.formik.setFieldValue("state", getState(data.stateName, true));
      props.formik.setFieldValue("contactPersion", data.contactPersion);
      props.formik.setFieldValue("mobileNumber", data.mobileNumber);
      props.formik.setFieldValue("email", data.email);
    }
  }, []);
  return <></>;
};

export default connect(EditStateAdminUI);
