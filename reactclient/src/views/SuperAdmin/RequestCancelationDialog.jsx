import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, useTheme, DialogTitle, DialogContent, Dialog, Divider } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { string, object, mixed } from "yup";
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import FormikTextField from "../../components/formikcomponent/TextField";
import { AuthContext } from "../../context/AuthContext";
import { CreateCadidateUI } from "../../components/customstyles/SuperAdminStyle.jsx";

const useStyles = () => {
    const theme = useTheme();
    return CreateCadidateUI(theme);
};

function RequestCancelationDialog(props) {
    const styles = useStyles();
    const navigate = useHistory();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [bodyText, setBodyText] = useState("");
    const [headerText, setHeaderText] = useState("");
    const [isError, setIsError] = useState(false);
    const { makeAuthenticatedApiCall } = useContext(AuthContext);


    const handleClickOpen = () => {
        props.handleCloseDialog()
        setOpen(false);
    };
    const handleClose = (value) => {
        // props.handleCloseDialog()
        setOpen(false);
    };
    const initialValues = { reason: "" };

    const yupSchema = object().shape({
        reason: string().required("This field is required.")
    });
    const handleSubmit = async (values) => {
        console.log("values",values)
        setLoading(true);
        let dataToSend = {
            reason: values.reason,
            id: props.id
        }
      
        let response = await makeAuthenticatedApiCall(
            "post",
            `/api/superadminservice/requestrejected`,
            dataToSend
        );

        if (response.status === 200) {
            handleClickOpen()
            setLoading(false);
            setIsSuccess(true);
            setBodyText(response.data.statusDescription);
            setHeaderText("Success");
        } else {
            setBodyText("Not able to save the data.");
            setLoading(false);
            setIsError(true);
            setHeaderText("Error");
        }
    };
    const updateDismissDialog = () => {
        // setIsSuccess(false);
        // if (id) {
        //     history.push("../dashboard");
        // } else {
        //     history.push("./dashboard");
        // }
    };
    return (
        <Dialog onClose={handleClose} open={open || props.open}
            scroll="body"
            maxWidth="lg"
        >
            <DialogTitle style={styles.dialogHeading}>Why are we rejecting?</DialogTitle>
            <Divider />
            <DialogContent >
                <Formik
                    initialValues={initialValues}
                    validationSchema={yupSchema}
                    onSubmit={handleSubmit}
                >
                    {(props) => (
                        <Form>
                            <GridContainer>

                                <GridItem lg={12} md={12} sm={12} xs={12} sx={styles.formikFieldStyle}>
                                    <Field
                                        component={FormikTextField}
                                        variant="filled"
                                        label="Reason"
                                        fullWidth
                                        name="reason"
                                        placeholder="Reason"
                                        InputProps={{ multiline: true, rows: 2 }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer sx={styles.buttonsWrapper}>
                             
                                <Button
                                    type="submit"
                                    primary
                                    loading={loading}
                                    sx={styles.submitMediBtn}
                                >
                                    Reject
                                </Button>
                            </GridContainer>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
            <Divider />
            <div style={{ textAlign: "center", margin: "10px" }}>
                <Button onClick={handleClickOpen}>
                    close
                </Button>
            </div>
        </Dialog>
    );
}
export default RequestCancelationDialog;
