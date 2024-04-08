import React, { useState, useEffect } from 'react'
import { useTheme, Tooltip } from "@mui/material";
import FormikTextField from "../../components/formikcomponent/TextField";
import FormikSelectWithLabel from "../../components/formikcomponent/SelectFieldWithLabel";
import FormikDateField from "../../components/formikcomponent/FormikDateField";
import SimpleCheckBox from "../../components/formikcomponent/SimpleCheckBox";
import CustomImageInput from "../../components/formikcomponent/ImageInput";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import { connect, Field } from "formik";
import { genderArray, stateArray, primaryRoleArray, secondaryRoleArray, refrenceRoleArray } from "./options.js";
import { CreateCadidateUI } from "../../components/customstyles/SuperAdminStyle.jsx";
import stateDistrict from "./stateDistrict.json";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { InputAdornment } from '@mui/material';
import defaultImage from "../../assets/images/profile.png"
import defaultAadhar from "../../assets/images/aadhar.png"
import defaultBirthCertificate from "../../assets/images/birthCertificate.png"

const useStyles = () => {
    const theme = useTheme();
    return CreateCadidateUI(theme);
};

const CreateCondidateUI = (props) => {
    const styles = useStyles();
    const [districtOptions, setDistrictOptions] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [secondaryRoleOptions, setSecondaryRoleArray] = useState(secondaryRoleArray);

    const makeOptionsForDropDown = (district) => {
        let districtArray = [];
        district && district.map((item) => {
            districtArray.push({ "label": item, "value": item });
        })
        setDistrictOptions(districtArray);
    }
    useEffect(() => {
        const getStateName = async () => {
            let stateName = localStorage.getItem("stateName");
            stateArray.map((item) => {
                if (item.label == stateName) {
                    setStateOptions([item])
                }
            })
        };
        getStateName();
    }, []);

    const handleStatesDistrict = (stateObj) => {
        props.formik.setFieldValue("district", "");
        stateDistrict.states.map((item) => {
            let stateName = stateObj.label;
            if (item.state === stateName) {
                makeOptionsForDropDown(item.districts)
            }
            else if (stateName === "Assam Rifles - ARF" || stateName === "Border Security Force - BSF" || stateName === "Central Industrial Security Force - CISF" || stateName === "Central Reserve police Force - CRPF" || stateName === "Indo-Tibetan Border Police - ITBP" || stateName === "Sashastra Seema Bal - SSB" || stateName === "Services Sports Control Board - SSCB") {
                let defaultoption = [{ "label": "NA", "value": "NA" }]
                setDistrictOptions(defaultoption)
            }
        })
    }
    const removeByAttr = function (arr, attr, value) {
        let i = arr.length;
        while (i--) {
            if (arr[i]
                && arr[i].hasOwnProperty(attr)
                && (arguments.length > 2 && arr[i][attr] === value)) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }
    const handleSecondaryRole = (selectedItem) => {
        props.formik.setFieldValue("secondaryRole", "");
        let updatedSecondaryOptions = removeByAttr(refrenceRoleArray, 'label', selectedItem.label);
        setSecondaryRoleArray(updatedSecondaryOptions);
    }

    return (
        <>
            <GridContainer>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Full Name"
                        fullWidth
                        name="fullName"
                        placeholder="Full Name"
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={FormikTextField}
                        variant="filled"
                        label="Guardian Name"
                        fullWidth
                        name="guardianName"
                        placeholder="Guardian Name"
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
                <GridItem
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={styles.formikFieldStyle}
                >
                    <Field
                        name="dateOfBirth"
                        component={FormikDateField}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDate={new Date()}
                        textFieldProps={{
                            variant: "filled",
                            label: "Date of Birth",
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
                <GridItem
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={styles.formikFieldStyle}
                    className="SelectWithLabel"
                >
                    <Field
                        name="gender"
                        label="Gender"
                        placeholder={""}
                        options={genderArray}
                        component={FormikSelectWithLabel}
                        className={"selectstyle"}
                        isSearchable={false}
                        variant="filled"
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
                        options={stateOptions}
                        onChange={handleStatesDistrict}
                        component={FormikSelectWithLabel}
                        isSearchable={false}
                        variant="filled"
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
                        name="district"
                        label="Select District"
                        placeholder={""}
                        options={districtOptions}
                        component={FormikSelectWithLabel}
                        isSearchable={false}
                        variant="filled"
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
                        name="primaryRole"
                        label="Primary Role"
                        placeholder={""}
                        options={primaryRoleArray}
                        onChange={handleSecondaryRole}
                        component={FormikSelectWithLabel}
                        isSearchable={false}
                        variant="filled"
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
                        name="secondaryRole"
                        label="Secondary Role"
                        placeholder={""}
                        options={secondaryRoleOptions}
                        component={FormikSelectWithLabel}
                        isSearchable={false}
                        variant="filled"
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
                        name="otherRole"
                        label="Other Role"
                        variant="filled"
                        fullWidth
                        component={FormikTextField}
                        placeholder="Other Role"
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
                        name="address"
                        label="Address"
                        variant="filled"
                        fullWidth
                        component={FormikTextField}
                    // InputProps={{ multiline: true, rows: 2 }}
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
                        name="aadharNumber"
                        label="Aadhar Number"
                        variant="filled"
                        fullWidth
                        component={FormikTextField}
                        placeholder="Aadhar Number"
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
                        name="birthCertificateNumber"
                        label="Birth Certificate Number"
                        variant="filled"
                        fullWidth
                        component={FormikTextField}
                        placeholder="Birth Certificate Number"
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={CustomImageInput}
                        label="Upload Photo:"
                        fullWidth
                        name="photo"
                        defaultsrc={defaultImage}
                        style={{ borderRadius: "10px !important" }}
                        inputProps={{ padding: '6px' }}
                        placeholder={'User Image'}
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={CustomImageInput}
                        label="Upload Aadhar:"
                        fullWidth
                        name="aadhar"
                        defaultsrc={defaultAadhar}
                        style={{ borderRadius: "10px !important" }}
                        inputProps={{ padding: '6px' }}
                        placeholder={'User Image'}
                    />
                </GridItem>
                <GridItem lg={6} md={6} sm={12} xs={12} sx={styles.formikFieldStyle}>
                    <Field
                        component={CustomImageInput}
                        label="Birth Cerfificate:"
                        fullWidth
                        name="birthCertificate"
                        defaultsrc={defaultBirthCertificate}
                        style={{ borderRadius: "10px !important" }}
                        inputProps={{ padding: '6px' }}
                        placeholder={'User Image'}
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
                        component={SimpleCheckBox}
                        name="acceptTermAndCondition"
                        label=""
                        checked={
                            props.formik.values.acceptTermAndCondition
                                ? props.formik.values.acceptTermAndCondition
                                : false
                        }
                    />
                    <Tooltip
                        title={"By filling in details on this website and submitting personal information, you hereby agree to the following terms: You acknowledge that the data is submitted voluntarily by you, and you are providing personal information for federation purposes, data management, and the possibility of sharing it with associated third parties for future collaborations. The federation or parties associated with it may utilize cookies and tracking technologies to enhance the user experience. The federation reserves the right to update terms without notice, and you agree that continued use implies acceptance of any modifications. Termination of access may occur without notice for violations"}
                        arrow
                        placement="top"
                        style={{ cursor: "pointer", fontSize: "14px" }}
                    ><a href="">Terms & Condition:</a>
                    </Tooltip>
                </GridItem>
            </GridContainer>
        </>
    );
};

export default connect(CreateCondidateUI);
