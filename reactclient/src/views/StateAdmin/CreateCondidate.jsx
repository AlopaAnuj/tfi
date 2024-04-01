import React, { useContext, useState, useEffect } from "react";
import { useTheme, Stack, Typography, Card } from "@mui/material";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import SuccessDialog from "../../components/SuccessDialog";
import { Formik, Form } from "formik";
import { string, object, mixed } from "yup";
import Button from "../../components/customcomponents/CustomButton";
import GridContainer from "../../components/grid/GridContainer.jsx";
import CreateCondidateUI from "./CreateCondidateUI";
import EditCondidateUI from "./EditCondidateUI";

const useStyles = () => {
  const theme = useTheme();
  return {
    buttonsWrapper: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      marginTop: 10,
    },
    submitMediBtn: {
      minWidth: "242px !important",
      borderRadius: "25px",
      padding: "5px 25px",
      textTransform: "uppercase",
    },
    cancelMediBtn: {
      borderRadius: "25px",
      minWidth: "242px !important",
      padding: "5px 25px",
      marginRight: "10px",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: theme.palette.text.primaryButtonTextColor,
        color: theme.palette.primary.main,
        border: "1px solid" + theme.palette.primary.main,
        opacity: 0.8,
      },
    },
    card: {
      padding: "40px",
      borderRadius: "10px",
      marginTop: "3%",
      width: { xs: "100%", sm: "600px", md: "900px", lg: "1100px" },
    },
    subHeader: { padding: "20px 15px", fontSize: "30px !important" },
  };
};

const MAX_FILE_SIZE = 102400; //100KB
function CreateCondidate(props) {
  const styles = useStyles();
  const history = useHistory();
  const initialValues = { fullName: "", guardianName: "", contactNumber: "", email: "", dateOfBirth: "", gender: "", state: "", district: "", primaryRole: "", secondaryRole: "", address: "", photo: "", aadhar: "", birthCertificate: "", acceptTermAndCondition: "" };
  
  const requiredMessage = "This field is required.";
  const { makeAuthenticatedApiCall } = useContext(AuthContext);
  const id = props.match.params.id;
  const [isSuccess, setIsSuccess] = useState(false);
  const [bodyText, setBodyText] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [editCondidateData, setEditData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const yupSchema = object().shape({
    fullName: string().required(requiredMessage),
    guardianName: string().required(requiredMessage),
    contactNumber: string().max(10).min(10).required(requiredMessage),
    email: string().trim().max(100, "Email length too long.").required("This Field is required.").email("Please enter a valid email id."),
    dateOfBirth: string().required(requiredMessage),
    gender: mixed().required(requiredMessage),
    state: mixed().required(requiredMessage),
    district: mixed().required(requiredMessage),
    primaryRole: mixed().required(requiredMessage),
    secondaryRole: mixed().required(requiredMessage),
    otherRole: string().optional(),
    address: string().required(requiredMessage),
    photo:  mixed().required(requiredMessage).test("fileSize", "Max allowed size is 100KB.",value => value && value.size <= MAX_FILE_SIZE),
    aadhar:  mixed().required(requiredMessage).test("fileSize", "Max allowed size is 100KB.",value => value && value.size <= MAX_FILE_SIZE),
    birthCertificate:  mixed().required(requiredMessage).test("fileSize", "Max allowed size is 100KB.",value => value && value.size <= MAX_FILE_SIZE),
    acceptTermAndCondition: string().required(requiredMessage),
  });

 
  useEffect(() => {
    if (id) {
      const getEditData = async () => {
        let response = await makeAuthenticatedApiCall(
          "get",
          `/api/userservice/getCondidateDetails/${id}`
        );
        if (response.status === 200) {
          setEditData(response.data.result);
        } else {
          setIsError(true);
        }
      };
      getEditData();
    }
  }, []);
  const handleSubmit = async (values) => {
    setLoading(true);
    let dataToSend = {
         fullName: values.fullName,
         guardianName: values.guardianName,
         contactNumber: values.contactNumber,
         dateOfBirth: values.dateOfBirth,
         email: values.email,
         gender: values.gender.label,
         state: values.state.label,
         district: values.district.label,
         primaryRole: values.primaryRole.label,
         secondaryRole: values.secondaryRole.label,
         otherRole: values.otherRole,
         address: values.address,
         photo: values.photo.base64Rep,
         aadhar: values.photo.base64Rep,
         birthCertificate: values.photo.base64Rep
    }
    if(id){
        dataToSend.id = id;
    }
      let response = await makeAuthenticatedApiCall(
        "post",
        `/api/userservice/addCondidate`,
        dataToSend
      );

    if (response.status === 200) {
      setLoading(false);
      setIsSuccess(true);
      setBodyText(response.data.statusDescription);
      setHeaderText("Success");
      // setUpdateAccountDialog(true);
    } else {
      setBodyText("Not able to save the data.");
      setLoading(false);
      setIsError(true);
      setHeaderText("Error");
    }
  };

  const updateDismissDialog = () => {
    setIsSuccess(false);
    if (id) {
      history.push("../dashboard");
    } else {
      history.push("./dashboard");
    }
  };
  let successButton = [
    <Button primary dialog onClick={updateDismissDialog}>
      Ok
    </Button>,
  ];

  return (
    <>
      <Stack alignItems="center" justifyContent="center">
        <Card raised={true} sx={styles.card}>
          <Typography type="body2" sx={styles.subHeader}>
            <b>
              {editCondidateData ? "Edit " : "Add "}Condidate
            </b>
          </Typography>
          <>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={yupSchema}
            >
              {(props) => (
                <Form>
                  <GridContainer>
                    {editCondidateData && (
                      <EditCondidateUI
                      editCondidateData={editCondidateData}
                      />
                    )}
                    <CreateCondidateUI />
                  </GridContainer>
                  <GridContainer sx={styles.buttonsWrapper}>
                    <Button
                      secondary
                      onClick={updateDismissDialog}
                      sx={styles.cancelMediBtn}
                    >
                      Cancel
                    </Button>{" "}
                    <Button
                      type="submit"
                      primary
                      loading={loading}
                      sx={styles.submitMediBtn}
                    >
                      Save Changes
                    </Button>
                  </GridContainer>
                </Form>
              )}
            </Formik>
          </>
        </Card>
      </Stack>
      {(isSuccess || isError) && (
        <SuccessDialog
          successButton={successButton}
          HeaderText={headerText}
          BodyText={bodyText}
          dismiss={updateDismissDialog}
        />
      )}
    </>
  );
}
export default CreateCondidate;
