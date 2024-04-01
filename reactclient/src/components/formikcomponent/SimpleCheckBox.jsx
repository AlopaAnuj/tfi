import React from "react";
import { useTheme, FormHelperText, FormControlLabel, Typography } from "@mui/material";
import Checkbox from "../customcomponents/Checkbox";
import { getIn } from 'formik';

const useStyles = () => {
  const theme = useTheme();
  return {
    checkbox: {
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: theme.textColour.primaryColor,
    },
  };
};

export default function ({
  field: { value, name, onChange, onBlur, checked },
  label,
  identifier,
  displayErrorMessage = true,
  field, form, helperText,
  ...otherProps
}) {
  const styles = useStyles();
  const touch = getIn(form.touched, field.name);
  const errorText = getIn(form.errors, field.name);
  return (
    <>
      <FormControlLabel
        name={name}
        label={
          <Typography variant="h6" sx={styles.checkbox} type="body3">
            {label}
          </Typography>
        }
        control={
          <Checkbox
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
          />
        }
        {...otherProps}

      />
        {displayErrorMessage?<FormHelperText error={Boolean(touch && errorText)}>{(touch && errorText) || helperText}</FormHelperText>:helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
}
