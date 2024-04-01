const CreateCadidateUI = (theme) => {
  return {
    cardRoot: { overflow: "initial", maxWidth: "1127px", margin: "5px auto" },
    subHeader: { padding: "20px 15px", fontSize: "30px !important" },
    card: {
      padding: "40px",
      borderRadius: "10px",
      marginTop: "3%",
      width: { xs: "100%", sm: "600px", md: "900px", lg: "1100px" },
    },
    formikFieldStyle: { padding: "20px" },
    inputItem: { width: "100%" },
  };
};

const ActionButtonStyle = (theme) => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      transformOrigin: "center bottom",
    },
    deleteActionFontSize: {
      fontSize: "16px !important",
      color: "rgb(177, 2, 34)",
    },
    actionFontSize: { fontSize: "16px" },
    ActnBtn: {
      marginLeft: "10px",
      color: "#6d6f6f",
      backgroundColor: "#eef2f4",
      height: 30,
      width: 30,
      minWidth: 0,
      borderRadius: "50%",
      padding: 0,
      fontWeight: "400",
      lineHeight: "1.42857143",
      "&:hover": { color: "#6d6f6f", backgroundColor: "#f8f8f8" },
    },
    deleteActionBtn: { marginLeft: "10px" },
  };
};
export { CreateCadidateUI, ActionButtonStyle };
