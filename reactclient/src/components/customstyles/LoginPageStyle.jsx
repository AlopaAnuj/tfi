let LoginPageStyle = (theme) => {
  return {
    fifteen: {
      fontSize: "15px",
      color: theme.textColour.primaryColor,
      letterSpacing: "0.5px",
      lineHeight: "1px",
    },
    container: {
      height: "100%",
      width: "100%",
    },
    backLinkStyle: {
      marginTop: "10px",
      fontSize: "14px",
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: "600",
    },
    card: {
      padding: "40px",
      borderRadius: "10px",
      marginTop: "8%",
      width: { xs: "100%", sm: "600px" },
    },
    inputIconStyle: { cursor: "pointer" },
    formLaylout: {
      textAlign: "center",
    },
    inputItem: { width: "100%" },
    headingtext: {
      margin: "30px",
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "1px",
      letterSpacing: "0.5px",
      color: theme.textColour.primaryColor,
    },
    errorTextStyle: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "1px",
      letterSpacing: "0.5px",
      color: "red",
      marginTop: "10px",
      marginBottom: "10px",
    },
    resendText: { fontSize: "15px" },
    sendOtpText: {
      color: "#2F363CC4",
      fontSize: "14px",
      lineHeight: "1px",
      letterSpacing: "0.5px",
    },
  };
};

let ErrorPageStyle = () => {
  return {
    cardFooter: {
      justifyContent: "flex-end",
      position: "relative",
      padding: "16px 0px",
      margin: "30px 0 20px",
    },
    errorText: { color: "red" },
    LoginHeading: { fontSize: "30px !important", fontWeight: "600 !important" },
    cardStyle: { boxShadow: "none", width: 343 },
    tableStyle: {
      maxWidth: "1400px",
      width: "100%",
      marginTop: "10%",
      textAlign: "center",
      padding: "0 20px",
    },
  };
};

export { LoginPageStyle, ErrorPageStyle };
