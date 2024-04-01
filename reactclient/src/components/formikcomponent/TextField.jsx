import React from "react";
import { FormHelperText } from "@mui/material";
import TextField from "../customcomponents/TextField";
import { getIn } from "formik";
const useStyles = () => ({
  ieRemoveIcon: {
    "& input::-MsClear": { display: "none" },
    "& input::-ms-reveal": { display: "none" },
  },
});
const FormikTextField = ({
  field,
  form,
  name,
  helperText,
  error,
  onChange,
  onBlur,
  isColorPicker,
  value,
  displayErrorMessage = true,
  ...otherProps
}) => {
  const styles = useStyles();
  const changeHandler = (event) => {
    form.setFieldValue(field.name, event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  const blurHandler = (event) => {
    form.setFieldTouched(field.name);
    if (onBlur) {
      onBlur(event);
    }
  };
  const touch = getIn(form.touched, field.name);
  const errorText = getIn(form.errors, field.name);

  return (
    <>
      <TextField
        //  key={field.name}
        name={field.name}
        value={isColorPicker ? value : field.value || ""}
        onChange={changeHandler}
        onBlur={blurHandler}
        InputProps={{
          type: field.name,
          style: styles.ieRemoveIcon,
        }}
        {...otherProps}
        error={touch && errorText ? true : false}
      />
      {displayErrorMessage ? (
        <FormHelperText error={Boolean(touch && errorText)}>
          {(touch && errorText) || helperText}
        </FormHelperText>
      ) : (
        helperText && <FormHelperText>{helperText}</FormHelperText>
      )}
    </>
  );
};
export default FormikTextField;
