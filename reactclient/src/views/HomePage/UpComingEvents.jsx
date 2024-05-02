import React, { useEffect, useState } from "react";
import { Typography, Grid, Card, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { getEventName } from "../StateAdmin/options.js";
import dayjs from "dayjs";
import Button from "../../components/customcomponents/CustomButton";
const useStyles = () => {
    return {
        submitMediBtn: {
            minWidth: "242px !important",
            borderRadius: "25px",
            padding: "5px 25px",
            textTransform: "uppercase",
        },
    };
};
export default function UpComingEvents() {
    const styles = useStyles();
    const [eventDate, setEventData] = useState(false);
    const [isLoading, setLoadingBar] = useState(true);

    useEffect(() => {
        const getPatientsList = async () => {
            try {
                let response = await axios.get("/api/userauthservice/getAllEvents");
                if (response.status === 200) {
                    if (response.data.result.length > 0) {
                        setEventData(response.data.result);
                        setLoadingBar(false)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        };
        getPatientsList();
    }, []);

    return (
        <div style={{ marginBottom: "30px" }}>
            <div className="publicmaincontainer">
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <marquee direction="right" behavior="alternate"><Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600 }}>Upcoming Event Details...</Typography></marquee>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {isLoading&&<CircularProgress />}
                    {eventDate && eventDate.map((item) => {
                        return <Grid item xl={3} lg={3} md={6} xs={12} key={item.id}>
                            <div className={'titleContainer'}>
                                <Card style={{ height: "400px" }}>
                                    <Box style={{ backgroundColor: "#F5F5F5", height: "50px" }}>
                                        <Typography style={{ fontWeight: 600, marginLeft: "20px", paddingTop: "10px", fontSize: "20px", color: "#551A8B" }}>Event Name: {item.eventName}</Typography>
                                    </Box>
                                    <div style={{ margin: "20px" }}>
                                        <Typography style={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px", color: "#551A8B" }}>Event Type: {getEventName(item.eventType)}</Typography>
                                        <Typography style={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px", color: "#551A8B" }}>Event Date: {dayjs(item.eventDate).format("MMM D, YYYY")}</Typography>
                                        <Typography style={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px", color: "#551A8B" }}>Event venue: {item.venue}</Typography>
                                        <Typography style={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px", color: "#551A8B" }}>Organizer: {item.organizer}</Typography>
                                        <Typography style={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px", color: "#551A8B" }}>Contact Number: {item.contactNumber}</Typography>
                                        <Typography style={{ fontWeight: 500, marginBottom: "10px", fontSize: "16px", color: "#551A8B" }}>Email Id: {item.email}</Typography>
                                        <br />
                                        <br />
                                        <Button
                                            onClick={() => {
                                                window.open(item.redirectURL, "_blank")
                                            }}

                                            primary
                                            sx={styles.submitMediBtn}
                                        >
                                            View More
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    })}
                </Grid>
            </div>
        </div>
    );
}
