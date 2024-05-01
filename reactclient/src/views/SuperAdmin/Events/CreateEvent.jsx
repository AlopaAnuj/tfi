import React, { useContext, useState, useEffect } from "react";
import { useTheme, Stack, Typography, Card } from "@mui/material";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import SuccessDialog from "../../../components/SuccessDialog";
import { Formik, Form } from "formik";
import { string, object, mixed } from "yup";
import Button from "../../../components/customcomponents/CustomButton";
import GridContainer from "../../../components/grid/GridContainer.jsx";
import CreateEventUI from "./CreateEventUI";
import EditEventUI from "./EditEventUI";

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

function CreateEvent(props) {
    const styles = useStyles();
    const history = useHistory();
    const initialValues = { eventName: "", eventType: "", eventDate: "", venue: "", organizer: "", contactNumber: "", email: "" };

    const requiredMessage = "This field is required.";
    const { makeAuthenticatedApiCall } = useContext(AuthContext);
    const id = props.match.params.id;
    const [isSuccess, setIsSuccess] = useState(false);
    const [bodyText, setBodyText] = useState("");
    const [headerText, setHeaderText] = useState("");
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editEventData, setEditData] = useState(null);

    const yupSchema = object().shape({
        eventName: string().required(requiredMessage),
        eventType: mixed().required(requiredMessage),
        eventDate: mixed().required(requiredMessage),
        venue: mixed().required(requiredMessage),
        organizer: string().required(requiredMessage),
        contactNumber: string().max(10).min(10).required(requiredMessage),
        email: string().trim().max(100, "Email length too long.").required("This Field is required.").email("Please enter a valid email id."),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        let dataToSend = {
            eventName: values.eventName,
            eventType: values.eventType.value,
            eventDate: values.eventDate,
            venue: values.venue,
            organizer: values.organizer,
            contactNumber: values.contactNumber,
            email: values.email
        }
        if (id) {
            dataToSend.id = id;
        }
        let response = await makeAuthenticatedApiCall(
            "post",
            `/api/superadminservice/createEvent`,
            dataToSend
        );

        if (response.status === 200) {
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
        setIsSuccess(false);
        if (id) {
            history.push("../events");
        } else {
            history.push("./events");
        }
    };

    useEffect(() => {
        if (id) {
            const getEditData = async () => {
                let response = await makeAuthenticatedApiCall(
                    "get",
                    `/api/superadminservice/getEventDetails/${id}`
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
                           {id?"Update Event Details":"Add Event Details"} 
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
                                        {editEventData && (
                                            <EditEventUI
                                                editEventData={editEventData}
                                            />
                                        )}
                                        <CreateEventUI />
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
export default CreateEvent;
