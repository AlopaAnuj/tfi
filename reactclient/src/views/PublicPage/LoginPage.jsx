import React, { useState, useContext } from "react";
import {
  useTheme,
  Card,
  Typography,
  InputAdornment,
  Stack,
  Box,
} from "@mui/material";
import axios from "axios";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { createUserObject } from "./CommonFunction";
import FormikTextField from "../../components/formikcomponent/TextField";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import { string, object } from "yup";
import Button from "../../components/customcomponents/CustomButton";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AuthContext } from "../../context/AuthContext";
import { LoginPageStyle } from "../../components/customstyles/LoginPageStyle";

const useStyles = () => {
  const theme = useTheme();
  return LoginPageStyle(theme);
};

function LoginPage(props) {
  const styles = useStyles();
  const { changeUser } = useContext(AuthContext);
  const [showOTP, setShowOtp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectTo, setRedirectTo] = useState("");
  const [forceRedirect, setForceRedirect] = useState(false);
  const [isLoginCompleted, setLoginCompleted] = useState(false);

  const yupSchema = object({
    unserName: string()
      .trim()
      .max(50, "User Name length too long.")
      .required("This Field is required."),
    password: string().required("This Field is required.")
  });

  const hanldeError = (errorData) => {
    setIsError(true);
    if (errorData.response.status === 403) {
      setErrorMessage(errorData.response.data.warningmessage);
    } else {
      setErrorMessage("Something went wrong.");
    }
  };
  const handleSubmit = async (values) => {
    localStorage.setItem("unserName", values.unserName);
    setLoginCompleted(true);
    let { redirectTo } = queryString.parse(props.location.search);
    try {
      let response = await axios.post("/api/userauthservice/login", {
        userName: values.unserName,
        password: values.password,
      });
      if (response.status === 200) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("stateName", response.data.userState);
        changeUser(createUserObject(response.data));
        setLoginCompleted(false);
        setForceRedirect(true);
        if(response.data.role === 1){
          setRedirectTo("/superadmin");

        }else if(response.data.role === 2){ 
          setRedirectTo("/stateadmin");

        }
      }
    } catch (err) {
      setLoginCompleted(false);
      hanldeError(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Stack alignItems="center" justifyContent="center" sx={styles.container}>
        <Card raised={true} sx={styles.card}>
          <Box sx={styles.formLaylout}>
            <Typography sx={styles.headingtext}>Login</Typography>
            {forceRedirect ? (
              <Redirect to={redirectTo} />
            ) : (
              <>
                <Formik
                  initialValues={{ unserName: "", otp: "", password: "" }}
                  onSubmit={handleSubmit}
                  validationSchema={yupSchema}
                >
                  {(props) => (
                    <Form>
                      <GridContainer>
                        <GridItem lg={12} md={12} sm={12} xs={12}>
                          <Field
                            component={FormikTextField}
                            variant="filled"
                            label="Enter Email"
                            fullWidth
                            name="unserName"
                            placeholder="Enter Email"
                          />
                        </GridItem>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <GridItem>
                          <Field
                            onChange={() => setIsError(false)}
                            component={FormikTextField}
                            variant="filled"
                            label="Enter Password"
                            id="password"
                            fullWidth
                            name="password"
                            placeholder="Password"
                            autoComplete="off"
                            InputProps={{
                              type: showOTP ? "" : "password",
                              endAdornment: (
                                <InputAdornment position="end">
                                  {showOTP ? (
                                    <VisibilityIcon
                                      onClick={() => setShowOtp(!showOTP)}
                                      sx={styles.inputIconStyle}
                                    />
                                  ) : (
                                    <VisibilityOffIcon
                                      onClick={() => setShowOtp(!showOTP)}
                                      sx={styles.inputIconStyle}
                                    />
                                  )}
                                </InputAdornment>
                              ),
                            }}
                          />
                        </GridItem>

                        <GridItem lg={12} md={12} sm={12} xs={12}>
                          {(isError) && (
                            <p style={{ color: "#d51035" }}>{errorMessage}</p>
                          )}
                        </GridItem>
                        <GridItem lg={12} md={12} sm={12} xs={12}>
                          <Button
                            type="submit"
                            primary
                            dashboard
                            size="small"
                            loading={isLoginCompleted}
                            disabled={isLoginCompleted}
                          >
                            Login
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </Form>
                  )}
                </Formik>
              </>
            )}
          </Box>
        </Card>
      </Stack>
    </>
  );
}
export default LoginPage;
