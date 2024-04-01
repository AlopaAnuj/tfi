import React from 'react'
import { useTheme } from "@mui/material";
import FormikTextField from "../../components/formikcomponent/TextField";
import FormikSelectWithLabel from "../../components/formikcomponent/SelectFieldWithLabel";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import { connect, Field } from "formik";
import { stateArray, userRole } from "../StateAdmin/options.js";
import { CreateCadidateUI } from "../../components/customstyles/SuperAdminStyle.jsx";

const useStyles = () => {
    const theme = useTheme();
    return CreateCadidateUI(theme);
};

const CreateCondidateUI = (props) => {
    const styles = useStyles();
    return (
        <>
            <GridContainer>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="User Name"
                        fullWidth
                        name="userName"
                        placeholder="User Name"
                    />
                </GridItem>
                <GridItem
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={styles.formikFieldStyle}
                    className="SelectWithLabel"
                >
                    <Field
                        name="role"
                        label="User Role"
                        options={userRole}
                        component={FormikSelectWithLabel}
                        className={"selectstyle"}
                        isSearchable={false}
                        variant="filled"
                        fullWidth
                        menuPortalTarget={document.body}    
                    />
                </GridItem>
                <GridItem
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={styles.formikFieldStyle}
                    className="SelectWithLabel"
                >
                    <Field
                        name="state"
                        label="State / Team / Union Territory"
                        placeholder={""}
                        options={stateArray}
                        component={FormikSelectWithLabel}
                        isSearchable={false}
                        variant="filled"
                        menuPortalTarget={document.body}
                    />
                </GridItem>
            
            </GridContainer>
        </>
    );
};

export default connect(CreateCondidateUI);
