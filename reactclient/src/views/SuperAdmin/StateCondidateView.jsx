import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, Avatar, Typography, useTheme, Box } from "@mui/material";
import GridContainer from "../../components/grid/GridContainer.jsx";
import GridItem from "../../components/grid/GridItem.jsx";
import { Helmet } from "react-helmet";
import MuiThemeDataTable from "../../components/MuiThemeDataTable.jsx";
import { getDashboardStyle } from "../../components/customstyles/DashboardStyle.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import ActionButtonViewDetails from "./ActionButtonViewDetails.jsx";
import defaultImage from "../../assets/images/profile.png"
import CondidateDialogUI from "./CondidateDialogUI";
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
      name: "secondaryRole",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Secondary Role</Typography>;
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
            <ActionButtonViewDetails
              data={value.data}
              handleViewCondidateDetails={handleViewCondidateDetails}
            />
          );
        },
      },
    },
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
      <CondidateDialogUI open={openDetailedDialog} handleCloseDialog={handleCloseDialog} dialodData={dialodData} />
    </Box>
  );
}
export default StateCondidateView;
