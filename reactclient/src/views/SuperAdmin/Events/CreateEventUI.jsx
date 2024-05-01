import React from 'react'
import { useTheme } from "@mui/material";
import FormikTextField from "../../../components/formikcomponent/TextField";
import FormikSelectWithLabel from "../../../components/formikcomponent/SelectFieldWithLabel";
import GridContainer from "../../../components/grid/GridContainer.jsx";
import GridItem from "../../../components/grid/GridItem.jsx";
import { connect, Field } from "formik";
import { stateArray, eventType } from "../../StateAdmin/options.js";
import { CreateCadidateUI } from "../../../components/customstyles/SuperAdminStyle.jsx";
import FormikDateField from "../../../components/formikcomponent/FormikDateField";
import { InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const useStyles = () => {
    const theme = useTheme();
    return CreateCadidateUI(theme);
};

const CreateEventUI = (props) => {
    const styles = useStyles();
    return (
        <>
            <GridContainer>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Event Name"
                        fullWidth
                        name="eventName"
                        placeholder="Event Name"
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
                        name="eventType"
                        label="Event Type"
                        options={eventType}
                        placeholder={""}
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
                >
                    <Field
                        name="eventDate"
                        component={FormikDateField}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        minDate={new Date()}
                        textFieldProps={{
                            variant: "filled",
                            label: "Event Date",
                            InputProps: {
                                with: "100%",
                                readOnly: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CalendarTodayIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Venue"
                        fullWidth
                        name="venue"
                        placeholder="Venue"
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Organizer"
                        fullWidth
                        name="organizer"
                        placeholder="Organizer"
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Contact Number"
                        fullWidth
                        name="contactNumber"
                        placeholder="Contact Number"
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Email Id"
                        fullWidth
                        name="email"
                        placeholder="Email Id"
                    />
                </GridItem>
            </GridContainer>
        </>
    );
};

export default connect(CreateEventUI);
