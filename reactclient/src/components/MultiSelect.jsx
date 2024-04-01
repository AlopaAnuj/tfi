import React from "react";
import classNames from "classnames";
import Select from "react-select";
import Typography from "@mui/material/Typography";
import NoSsr from "@mui/material/NoSsr";

import {
  TextField,
  Paper,
  Chip,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Style from "./SelectStyle.module.css";
function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

const inputComponent = React.forwardRef(({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
});

function Control(props) {
  return (
    <TextField
      fullWidth
      InputLabelProps={{
        shrink:
          props.hasValue || props.isFocused || props.isMenuOpen ? true : false,
        className:
          props.selectProps.InputPropsLabel &&
          props.selectProps.InputPropsLabel.className,
      }}
      InputProps={{
        className:
          props.selectProps.InputProps &&
          props.selectProps.InputProps.className,
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
        backgroundColor: props.isFocused && "#e0e0e0",
      }}
      // className={props.selectProps.menuCss}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function checkBoxOption(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 700 : 400,
        backgroundColor: props.isFocused && "#e0e0e0",
      }}
      className={props.selectProps.classes.checkBoxStyle}
      {...props.innerProps}
    >
      <FormControlLabel
        control={<Checkbox checked={props.isSelected} color="secondary" />}
        label={props.children}
      />
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={`${props.selectProps.classes.SingleValue} ${"SingleValue"} ${
        props.selectProps.inputProps
      }`}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  if (props.isMulti === true) {
    return (
      <div className={props.selectProps.classes.valueContainer}>
        {props.children}
      </div>
    );
  } else {
    return (
      <div
        className={`${props.selectProps.classes.valueContainer} ${props.selectProps.classes.textFeildWrap} ${props.selectProps.formAreaInput}`}
      >
        {props.children}
      </div>
    );
  }
}
function NoWrapValueContainer(props) {
  return (
    <div className={props.selectProps.classes.NoWrapValueContainer}>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function checkBoxMutliValue(props) {
  return props.getValue()[0] === props.data ? (
    <>
      <Chip
        tabIndex={-1}
        label={props.getValue().length + "select"}
        className={classNames(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
      />
    </>
  ) : (
    ""
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};
const nowrapComponents = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer: NoWrapValueContainer,
};
const checkBoxComponents = {
  Control,
  Menu,
  MultiValue: checkBoxMutliValue,
  NoOptionsMessage,
  Option: checkBoxOption,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class SelectAutoComplete extends React.Component {
  render() {
    const {
      theme,
      suggestions,
      placeholder,
      checkBoxStyled,
      isMulti,
      formatOptionLabel,
      options,
      hideSelectedOptions,
      nowraptrue,
      t,
      ...other
    } = this.props;
    let selectComponents = nowraptrue ? nowrapComponents : components;

    const selectStyles = {
      input: (base) => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit",
        },
      }),
    };
    let isMutlipleAllowed = isMulti;
    let isHideSelectOptions = hideSelectedOptions;
    if (checkBoxStyled) {
      selectComponents = checkBoxComponents;
      isMutlipleAllowed = true;
      isHideSelectOptions = false;
    }
    if (formatOptionLabel) {
      return (
        <div className={Style.root}>
          <NoSsr>
            <Select
              formatOptionLabel={formatOptionLabel}
              classes={Style}
              options={options}
              styles={selectStyles}
              components={selectComponents}
              placeholder={placeholder}
              onChange={this.handleChange}
              isMulti={isMutlipleAllowed}
              hideSelectedOptions={isHideSelectOptions}
              {...other}
            />
          </NoSsr>
        </div>
      );
    }
    return (
      <div className={Style.root}>
        <NoSsr>
          <Select
            options={options}
            classes={Style}
            styles={selectStyles}
            components={selectComponents}
            placeholder={placeholder}
            onChange={this.handleChange}
            isMulti={isMutlipleAllowed}
            hideSelectedOptions={isHideSelectOptions}
            {...other}
          />
        </NoSsr>
      </div>
    );
  }
}

export default SelectAutoComplete;
