import React from 'react'
import { useTheme } from "@mui/material";
import FormikTextField from "../../../components/formikcomponent/TextField";
import GridContainer from "../../../components/grid/GridContainer.jsx";
import GridItem from "../../../components/grid/GridItem.jsx";
import { connect, Field } from "formik";
import { CreateCadidateUI } from "../../../components/customstyles/SuperAdminStyle.jsx";

const useStyles = () => {
    const theme = useTheme();
    return CreateCadidateUI(theme);
};

const UpdatePasswordUI = (props) => {
    const styles = useStyles();
    return (
        <>
            <GridContainer>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Current Password"
                        fullWidth
                        name="currentPassword"
                        placeholder="Current Password"
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="New Password"
                        fullWidth
                        name="newPassword"
                        placeholder="New Password"
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Confirm Password"
                        fullWidth
                        name="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </GridItem>
            </GridContainer>
        </>
    );
};

export default connect(UpdatePasswordUI);
