import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, Avatar, Typography, useTheme, Box, Button } from "@mui/material";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import { Helmet } from "react-helmet";
import MuiThemeDataTable from "../../components/MuiThemeDataTable.jsx";
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import ActionButtonViewDetails from "./ActionButtonViewDetails.jsx";
import defaultImage from "../../assets/images/profile.png"
import CondidateDialogUI from "./CondidateDialogUI";
import { makeTheOptions } from "../PublicPage/CommonFunction.js";
import SuperActionButton from "./SuperActionButton.jsx";
import SuccessDialog from "../../components/SuccessDialog.jsx";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import RequestCancelationDialog from "./RequestCancelationDialog";
const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};

function StateCondidateView(props) {
  const styles = useStyles();
  const stateId = props.match.params.stateId;
  const [loading, setLoading] = useState(true);
  const { makeAuthenticatedApiCall } = useContext(AuthContext);
  const [stateCondidateData, setCondidateData] = useState(null);
  const [openDetailedDialog, setDialogOpen] = useState(false);
  const [dialodData, setDialogData] = useState("");
  const [openSuccessDialog, setSuccessDialog] = useState(false);
  const [bodyText, setBodyText] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [confirmRejectDialog, setRejectDialog] = useState(false);
  const [id, setCondidateId] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (stateId) {
      const getEditData = async () => {
        let response = await makeAuthenticatedApiCall(
          "get",
          `/api/superadminservice/getAllCondidateOfState/${stateId}`
        );
        if (response.status === 200) {
          response.data.result.forEach((item) => {
            item.Action = {
              data: item,
            };
          });
          setLoading(false)
          setCondidateData(response.data.result);
        }
      };
      getEditData();
    }
  }, []);


  const handleViewCondidateDetails = (data) => {
    setDialogData(data)
    setDialogOpen(true)
  };

  const handleApproveCondidate = (id) => {
    setCondidateId(id);
    setConfirmDialog(true);
    setHeaderText("Confirm");
    setBodyText(
      "Are you sure you want to approve this Condidate?"
    );
  };

  const handleRejectCondidate = (id) => {
    setCondidateId(id);
    setRejectDialog(true);
  };
  const approveCondidate = async () => {
    let reviewResponse = await makeAuthenticatedApiCall(
      "post",
      `/api/superadminservice/requesttoapprove/${id}`
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
            <SuperActionButton
              data={value.data}
              handleRejectCondidate={handleRejectCondidate}
              handleApproveCondidate={handleApproveCondidate}
              handleViewCondidateDetails={handleViewCondidateDetails}
            />
          );
        },
      },
    },
  ];

  const handleCloseDialog = () => {
    setDialogOpen(false)
    setRejectDialog(false)
  }
  const dismissConfirmDialog = () => {
    setConfirmDialog(false);
    setRejectDialog(false)
  };

  const dismissSuccessDialog = () => {
    setSuccessDialog(false);
    let parsed = {};
    parsed.reloadTo = "condidatelist";
    parsed.timeOut = "100";
    const stringified = queryString.stringify(parsed);
    history.push({
      pathname: `../formReloader`,
      search: "?" + stringified,
    });
  };
  let confirmDialogButton = [
    <Button secondary dialog onClick={dismissConfirmDialog}>
      Cancel
    </Button>,
    <Button primary dialog onClick={approveCondidate}>
      Approve
    </Button>,
  ];
  
  let successDialogButton = [
    <Button primary dialog onClick={dismissSuccessDialog}>
      Ok
    </Button>,
  ];

  return (
    <Box sx={styles.tableStyle}>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <GridContainer>
        <GridItem lg={4} md={4} sm={12} xs={12} sx={styles.gridAlign}>
          <p style={styles.headingStyle}>State Condidates</p>
        </GridItem>
      </GridContainer>
      {loading ? (
        <Box sx={styles.loadingLeftStyle}>
          <Box sx={{ marginBottom: "20px" }}>
            <CircularProgress />
          </Box>
          <Typography sx={styles.loadinText}>
            Loading state admin details...
          </Typography>
        </Box>
      ) : (
        <GridContainer>
          <GridItem md={12}>
            <MuiThemeDataTable
              rows={stateCondidateData}
              columns={tablecolumns}
              hideDownloadIcon={false}
              hideSearchIcon={false}
              hideFilterIcon={false}
              viewColumnsIcon={false}
              smallScreenTableColumnDisplayIndex={[1, 4, 6]}
              sortOrder={{
                name: "appointment",
                direction: "asc",
              }}
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
      <RequestCancelationDialog  open={confirmRejectDialog} handleCloseDialog={handleCloseDialog}/>
      <CondidateDialogUI open={openDetailedDialog} handleCloseDialog={handleCloseDialog} dialodData={dialodData} />
    </Box>
  );
}
export default StateCondidateView;
