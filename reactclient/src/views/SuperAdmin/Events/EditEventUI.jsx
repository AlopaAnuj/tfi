import React from "react";
import { connect } from "formik";
import { useEffect } from "react";
import { getEventName } from "../../StateAdmin/options.js";
  
const EditEventUI = (props) => {
  useEffect(() => {
    let data = props.editEventData;
    if (data) {
      props.formik.setFieldValue("eventName", data.eventName);
      props.formik.setFieldValue("eventType", getEventName(data.eventType, true));
      props.formik.setFieldValue("eventDate", data.eventDate, true);
      props.formik.setFieldValue("venue", data.venue, true);
      props.formik.setFieldValue("organizer", data.organizer, true);
      props.formik.setFieldValue("contactNumber", data.contactNumber, true);
      props.formik.setFieldValue("email", data.email, true);
      props.formik.setFieldValue("redirectURL", data.redirectURL, true);
    }
  }, []);
  return <></>;
};

export default connect(EditEventUI);
