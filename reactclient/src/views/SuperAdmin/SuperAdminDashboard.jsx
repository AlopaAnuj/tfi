import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, Typography, useTheme, Box } from "@mui/material";
import Button from "../../components/customcomponents/CustomButton";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import { Helmet } from "react-helmet";
import MuiThemeDataTable from "../../components/MuiThemeDataTable";
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle";
import { AuthContext } from "../../context/AuthContext";
import SuperAdminActionButton from "./SuperAdminActionButton";
import { useHistory } from "react-router-dom";
const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};

function SuperAdminDashboard() {
  const styles = useStyles();
  const [configurationData, setStateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { makeAuthenticatedApiCall } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    const getPatientsList = async () => {
      let response = await makeAuthenticatedApiCall(
        "get",
        "/api/superadminservice/getAllStateUsers",
        null
      );
      if (response.status === 200) {
        if (response.data.result.length > 0) {
          response.data.result.forEach((item) => {
            item.role = item.role === 2 && "State Admin";
            item.Action = {
              id: item.id,
            };
          });
          setStateData(response.data.result);
        }
        setLoading(false);
      }
    };
    getPatientsList();
  }, []);

  const handleCondidateList = (stateId) => {
    history.push("./condidatelist/" + stateId, 0);
  };
  const handleEditStateAdmin = (Id) => {
    history.push("./editstateadmin/" + Id, 0);
  }
  const tablecolumns = [
    {
      name: "stateName",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>User Name</Typography>
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
      name: "stateName",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>State Name</Typography>
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
      name: "role",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Role</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{value}</Typography>;
        },
      },
    },
    {
      name: "contactPersion",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Contact Person</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{value}</Typography>;
        },
      },
    },
    {
      name: "mobileNumber",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Mobile Number</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{value}</Typography>;
        },
      },
    },
    {
      name: "email",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Email Id</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{value}</Typography>;
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
            <SuperAdminActionButton
              stateId={value.id}
              handleEditStateAdmin={handleEditStateAdmin}
              handleCondidateList={handleCondidateList}
            />
          );
        },
      },
    },
  ];

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
              history.push("./createstateadmin");
            }}
          >
            Add State Admin
          </Button>
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
              rows={configurationData}
              columns={tablecolumns}
              hideDownloadIcon={false}
              hideSearchIcon={false}
              hideFilterIcon={false}
              viewColumnsIcon={false}
              smallScreenTableColumnDisplayIndex={[1, 3]}
              sortOrder={{
                name: "appointment",
                direction: "asc",
              }}
            />
          </GridItem>
        </GridContainer>
      )}
    </Box>
  );
}
export default SuperAdminDashboard;
