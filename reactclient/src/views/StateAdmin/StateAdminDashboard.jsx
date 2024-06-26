import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, Avatar, Typography, useTheme, Box } from "@mui/material";
import Button from "../../components/customcomponents/CustomButton.jsx";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import { Helmet } from "react-helmet";
import MuiThemeDataTable from "../../components/MuiThemeDataTable.jsx";
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import SuccessDialog from "../../components/SuccessDialog.jsx";
import StateAdminAction from "./StateAdminAction.jsx";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import defaultImage from "../../assets/images/profile.png"
import { makeTheOptions } from "../PublicPage/CommonFunction.js";
import CondidateDialogUI from "../SuperAdmin/CondidateDialogUI.jsx"

const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};

function StateAdminDashboard() {
  const styles = useStyles();
  const [condidateData, setStateData] = useState([]);
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const { makeAuthenticatedApiCall } = useContext(AuthContext);
  const [openSuccessDialog, setSuccessDialog] = useState(false);
  const [bodyText, setBodyText] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [id, setCondidateId] = useState("");
  const [openDetailedDialog, setDialogOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const getPatientsList = async () => {
      let response = await makeAuthenticatedApiCall(
        "get",
        "/api/userservice/getAllCondidates",
        null
      );
      if (response.status === 200) {
        if (response.data.result.length > 0) {
          response.data.result.forEach((item) => {
            item.role = item.role === 2 && "State Admin";
            item.Action = {
              data: item,
            };
          });
          setStateData(response.data.result);
        }
        setLoading(false);
      }
    };
    getPatientsList();
  }, []);

  const handleDeleteCondidate = (id) => {
    setCondidateId(id);
    setConfirmDialog(true);
    setHeaderText("Confirm");
    setBodyText(
      "Are you sure you want to delete this Condidate?"
    );
  };

  const handleEditCondidate = (id) => {
    history.push("./editcondidate/" + id, 0);
  };

  const handleMakeRequestToReview = async (id) => {
    let reviewResponse = await makeAuthenticatedApiCall(
      "post",
      `/api/userservice/requesttoapprove/${id}`
    );
    if (reviewResponse.status === 200) {
      setHeaderText("Success");
      setBodyText(reviewResponse.data.statusDescription);
    } else {
      setBodyText("Unable to delete the record.");
      setHeaderText("Error");
    }
    setSuccessDialog(true);
    setConfirmDialog(false);
  }
  const tablecolumns = [
    {
      name: "photo",
      label: "Photo",
      options: {
        filter: false,
        sort: false,
        searchable: false,
        customBodyRender: (value) => {
          return (
            <Avatar alt="No Images" src={value === null ? defaultImage : value} />
          )
        }
      }
    },
    {
      name: "fullName",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>Full Name</Typography>
          );
        },
        customBodyRender: (value) => {
          return (
            <>
              <Typography sx={styles.TableBodySubText}>{value}</Typography>
            </>
          );
        },
      },
    },
    {
      name: "contactNumber",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>Contact Number</Typography>
          );
        },
        customBodyRender: (value) => {
          return (
            <>
              <Typography sx={styles.TableBodySubText}>{value}</Typography>
            </>
          );
        },
      },
    },
    {
      name: "gender",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>Gender</Typography>
          );
        },
        customBodyRender: (value) => {
          return (
            <>
              <Typography sx={styles.TableBodySubText}>{value}</Typography>
            </>
          );
        },
      },
    },
    {
      name: "primaryRole",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>Primary Role</Typography>
          );
        },
        customBodyRender: (value) => {
          return (
            <>
              <Typography sx={styles.TableBodySubText}>{value}</Typography>
            </>
          );
        },
      },
    },
    {
      name: "status",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Status</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{makeTheOptions(value)}</Typography>;
        },
      },
    },
    {
      name: "Action",
      label: <Typography sx={styles.tableLabelColor}>Action</Typography>,
      options: {
        filter: false,
        sort: false,
        print: false,
        customBodyRender: (value) => {
          return (
           <StateAdminAction
              data={value.data}
              handleEditCondidate={handleEditCondidate}
              handleDeleteCondidate={handleDeleteCondidate}
              handleMakeRequestToReview={handleMakeRequestToReview}
              handleViewDetails={handleViewDetails}
            />
          );
        },
      },
    },
  ];
  const handleViewDetails = (data) => {
    setUserData(data)
    setDialogOpen(true)
  }
  const deleteCondidate = async () => {
    let deleteResponse = await makeAuthenticatedApiCall(
      "delete",
      `/api/userservice/deleteCondidate/${id}`
    );
    if (deleteResponse.status === 200) {
      setHeaderText("Success");
      setBodyText(deleteResponse.data.statusDescription);
    } else {
      setBodyText("Unable to delete the record.");
      setHeaderText("Error");
    }
    setSuccessDialog(true);
    setConfirmDialog(false);
  };

  const dismissConfirmDialog = () => {
    setConfirmDialog(false);
  };
  const dismissSuccessDialog = () => {
    setSuccessDialog(false);
    let parsed = {};
    parsed.reloadTo = "dashboard";
    parsed.timeOut = "100";
    const stringified = queryString.stringify(parsed);
    history.push({
      pathname: `./formReloader`,
      search: "?" + stringified,
    });
  };
  let confirmDialogButton = [
    <Button secondary dialog onClick={dismissConfirmDialog}>
      Cancel
    </Button>,
    <Button primary dialog onClick={deleteCondidate}>
      Delete
    </Button>,
  ];
  let successDialogButton = [
    <Button primary dialog onClick={dismissSuccessDialog}>
      Ok
    </Button>,
  ];
  const handleCloseDialog = () => {
    setDialogOpen(false)
  }
  return (
    <Box sx={styles.tableStyle}>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <GridContainer>
        <GridItem lg={4} md={4} sm={12} xs={12} sx={styles.gridAlign}>
          <p style={styles.headingStyle}>State Admins</p>
        </GridItem>
        <GridItem
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            ...styles.gridAlign,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Button
            primary
            dashboard
            variant="contained"
            sx={styles.addPatientButton}
            onClick={() => {
              history.push("./addcondidate");
            }}
          >
            Add Condidate
          </Button>
        </GridItem>
      </GridContainer>
      {loading ? (
        <Box sx={styles.loadingLeftStyle}>
          <Box sx={{ marginBottom: "20px" }}>
            <CircularProgress />
          </Box>
          <Typography sx={styles.loadinText}>
            Loading state condidates details...
          </Typography>
        </Box>
      ) : (
        <GridContainer>
          <GridItem md={12}>
            <MuiThemeDataTable
              rows={condidateData}
              columns={tablecolumns}
              hideDownloadIcon={false}
              hideSearchIcon={false}
              hideFilterIcon={false}
              viewColumnsIcon={false}
              smallScreenTableColumnDisplayIndex={[1, 5, 6]}
            />
          </GridItem>
        </GridContainer>
      )}
      {confirmDialog && (
        <SuccessDialog
          successButton={confirmDialogButton}
          HeaderText={headerText}
          BodyText={bodyText}
          dismiss={dismissConfirmDialog}
        />
      )}
      {openSuccessDialog && (
        <SuccessDialog
          successButton={successDialogButton}
          HeaderText={headerText}
          BodyText={bodyText}
          dismiss={dismissConfirmDialog}
        />
      )}
       <CondidateDialogUI open={openDetailedDialog} handleCloseDialog={handleCloseDialog} dialodData={userData} />
    </Box>
  );
}
export default StateAdminDashboard;
