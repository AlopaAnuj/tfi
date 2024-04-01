import React from "react";
import Select from "../MultiSelect";
import { FormHelperText } from "@mui/material";
import { getIn } from "formik";
import FormControl from "@mui/material/FormControl";

export default function ({
  field,
  form,
  onChange,
  onBlur,
  variant,
  options,
  label,
  isClearable,
  placeholder,
  value,
  helperText,
  formatOptionLabel,
  displayErrorMessage = true,
  ...otherProps
}) {
  const changeHandler = (evt) => {
    form.setFieldValue(field.name, evt);

    if (onChange) {
      onChange(evt);
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
      <FormControl variant="filled">
        <Select
          {...otherProps}
          value={field.value}
          formatOptionLabel={formatOptionLabel}
          onChange={changeHandler}
          options={options}
          onBlur={blurHandler}
          textFieldProps={{
            variant: variant,
            label: label,
          }}
          placeholder={placeholder}
          isClearable={isClearable}
          className={
            touch && errorText
              ? `fieldBorderColor SelectPadding1`
              : `SelectPadding1`
          }
        />
      </FormControl>

      {displayErrorMessage ? (
        <FormHelperText error={Boolean(touch && errorText)}>
          {(touch && errorText) || helperText}
        </FormHelperText>
      ) : (
        helperText && <FormHelperText>{helperText}</FormHelperText>
      )}
    </>
  );
}
