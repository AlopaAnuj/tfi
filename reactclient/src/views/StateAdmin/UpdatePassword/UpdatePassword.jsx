import React, { useContext, useState } from "react";
import { useTheme, Stack, Typography, Card } from "@mui/material";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import SuccessDialog from "../../../components/SuccessDialog";
import { Formik, Form } from "formik";
import { string, object, ref } from "yup";
import Button from "../../../components/customcomponents/CustomButton";
import GridContainer from "../../../components/grid/GridContainer.jsx";
import UpdatePasswordUI from "./UpdatePasswordUI";

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

function UpdatePassword(props) {
  const styles = useStyles();
  const history = useHistory();
  const initialValues = { currentPassword: "", newPassword: "", confirmPassword: "" };
  
  const requiredMessage = "This field is required.";
  const { makeAuthenticatedApiCall } = useContext(AuthContext);
  const id = props.match.params.id;
  const [isSuccess, setIsSuccess] = useState(false);
  const [bodyText, setBodyText] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const yupSchema = object().shape({
    currentPassword: string().required(requiredMessage),
    newPassword: string().required(requiredMessage).min(8, "The password should be at least 8 characters long.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$()≠!%*#_?&^+=-])[A-Za-z\d$@$()≠!%*#_?&^+=-]{8,}$/, "The password should contain at least one uppercase letter, one lowercase letter, and one number."),
    confirmPassword: string().required(requiredMessage).oneOf([ref('password')], "Confirm password is not same."),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    let dataToSend = {
         currentPassword: values.currentPassword,
         newPassword: values.newPassword,
    }
      let response = await makeAuthenticatedApiCall(
        "post",
        `/api/userservice/changePassword`,
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
              Update Password
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
                    <UpdatePasswordUI />
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
export default UpdatePassword;
