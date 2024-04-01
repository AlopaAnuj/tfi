import React from "react";
import { connect } from "formik";
import { useEffect } from "react";
import {getGender,  getState, getPrimaryRole, getSecondaryRole } from "./options";
import stateDistrict from "./stateDistrict.json";

const getDistrict = (stateName, district) => {
    let selectedDistrict;
    stateDistrict.states.map((item) => {
        if (item.state === stateName) {
            item.districts.forEach((data) => {
              if (data === district) {
                selectedDistrict = { "label": district, "value": district };
              }
            });
        }
        else if (stateName === "Assam Rifles - ARF" || stateName === "Border Security Force - BSF" || stateName === "Central Industrial Security Force - CISF" || stateName === "Central Reserve police Force - CRPF" || stateName === "Indo-Tibetan Border Police - ITBP" || stateName === "Sashastra Seema Bal - SSB" || stateName === "Services Sports Control Board - SSCB") {
            selectedDistrict = { "label": "NA", "value": "NA" }
        }
    })
    return selectedDistrict;
  };
  
const EditCondidateUI = (props) => {
  useEffect(() => {
    let data = props.editCondidateData;
    if (data) {
      props.formik.setFieldValue("fullName", data.fullName);
      props.formik.setFieldValue("guardianName", data.guardianName);
      props.formik.setFieldValue("contactNumber", data.contactNumber);
      props.formik.setFieldValue("dateOfBirth", data.dateOfBirth);
      props.formik.setFieldValue("email", data.email);
      props.formik.setFieldValue("gender", getGender(data.gender, true));
      props.formik.setFieldValue("state", getState(data.state, true));
      props.formik.setFieldValue("district", getDistrict(data.state, data.district, true));
      props.formik.setFieldValue("primaryRole", getPrimaryRole(data.primaryRole, true));
      props.formik.setFieldValue("secondaryRole", getSecondaryRole(data.secondaryRole, true));
      props.formik.setFieldValue("otherRole", data.otherRole);
      props.formik.setFieldValue("address", data.address);
      props.formik.setFieldValue("photo", data.photo, true);
      props.formik.setFieldValue("aadhar", data.aadhar);
      props.formik.setFieldValue("birthCertificate", data.birthCertificate);
      props.formik.setFieldValue("acceptTermAndCondition", true);
    }
  }, []);
  return <></>;
};

export default connect(EditCondidateUI);
