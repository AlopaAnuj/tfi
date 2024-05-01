import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, Typography, useTheme, Box } from "@mui/material";
import Button from "../../../components/customcomponents/CustomButton";
import GridContainer from "../../../components/grid/GridContainer.jsx";
import GridItem from "../../../components/grid/GridItem.jsx";
import { Helmet } from "react-helmet";
import MuiThemeDataTable from "../../../components/MuiThemeDataTable";
import { getDashboardStyle } from "../../../components/customstyles/DashboardStyle";
import { AuthContext } from "../../../context/AuthContext";
import EventActionButton from "./EventActionButton";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import { getEventName } from "../../StateAdmin/options.js";

const useStyles = () => {
  const theme = useTheme();
  return getDashboardStyle(theme);
};

function EventDashboard() {
  const styles = useStyles();
  const [configurationData, setStateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { makeAuthenticatedApiCall } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    const getPatientsList = async () => {
      let response = await makeAuthenticatedApiCall(
        "get",
        "/api/superadminservice/getAllEvents",
        null
      );
      if (response.status === 200) {
        if (response.data.result.length > 0) {
          response.data.result.forEach((item) => {
            item.eventType = getEventName(item.eventType, false)
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

  const handleEditEvent = (Id) => {
    history.push("./editevent/" + Id, 0);
  };
  const tablecolumns = [
    {
      name: "eventName",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>Event Name</Typography>
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
      name: "eventType",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return (
            <Typography sx={styles.tableLabelColor}>Event Type</Typography>
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
      name: "eventDate",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Event Date</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{dayjs(value).format("MMM D, YYYY")} </Typography>;
        },
      },
    },
    {
      name: "venue",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Venue</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{value}</Typography>;
        },
      },
    },
    {
      name: "organizer",
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customHeadLabelRender: () => {
          return <Typography sx={styles.tableLabelColor}>Organizer</Typography>;
        },
        customBodyRender: (value) => {
          return <Typography sx={styles.TableBodyText}>{value}</Typography>;
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
          return <Typography sx={styles.tableLabelColor}>contact</Typography>;
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
            <EventActionButton
              id={value.id}
              handleEditEvent={handleEditEvent}
            />
          );
        },
      },
    },
  ];

  return (
    <Box sx={styles.tableStyle}>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <GridContainer>
        <GridItem lg={4} md={4} sm={12} xs={12} sx={styles.gridAlign}>
          <p style={styles.headingStyle}>Events</p>
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
              history.push("./createevent");
            }}
          >
            Add New Event
          </Button>
        </GridItem>
      </GridContainer>
      {loading ? (
        <Box sx={styles.loadingLeftStyle}>
          <Box sx={{ marginBottom: "20px" }}>
            <CircularProgress />
          </Box>
          <Typography sx={styles.loadinText}>
            Loading Event details...
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
export default EventDashboard;
