import { createTheme } from "@mui/material";
const theme = createTheme({
  textColour: {
    primaryColor: "#00446B",
  },
  btnColour: {
    btnBackgroundColour: "#00446B",
    btnTextColour: "#fff",
    btnSecondaryBackground: "rgba(105, 87, 178, 0.08)",
  },
  custom: {
    buttonDisabledBg: "rgba(243, 244, 245, 1)",
    activeNavLink: "#00446B",
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fff"
    },
    secondary: {
      main: "#ff9900",
    },
    primary: {
      // light : "#fff",
      dark: "",
      main: "#0080FF",
    },
    thirdColor:{
      main:"#8000FF"
    },
    hoverPrimaryColor:{
      main: "#0000FF"
    },
    hoverSecondaryColor:{
      main: "#00FF80"
    },
    hoverThirdColor:{
      main:"#FF0080"
    },
    border:{
      primaryBorder:"#0080FF",
      secondaryBorder:"#ff9900",
      thirdBorder:"#8000FF",
      hoverPrimaryBorder:"#0000FF",
      hoverThirdBorder:"#FF00FF"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    button:{
      okButtonBackground:"#0080FF",
      okButtonHover:"#0080FF"
    },
    text: {
      textPrimaryColor:"#0080FF",
      textSecondaryColor:"#0080FF",
      textThirdColor:"theme.textThirdColor",
      hoverTextPrimaryColor:"#0080FF",
      hoverTextSecondaryColor:"#0080FF",
      hoverTextThirdColor:"#0080FF",
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "#515974",
      third:"#fff",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    formcolor:{
      backgroundHeader:"#55ACEE",
      textColor:"#fff",
      fontSize: "25px",
      backgroundFullPage:"#ebecf5"

    },
    accent3: {
      main: "#382D82",
      background: "rgba(105, 87, 178, 0.08)",
    },
  },

});
export default theme;
