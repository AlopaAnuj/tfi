import React from "react";
import { Typography, Grid, Card, Avatar } from "@mui/material";
import secratery from "../../assets/images/secratery.jpg";
import president from "../../assets/images/president.jpg";

import five from "../../assets/5.jpg";
const useStyles = () => {
    return {
        titleContainer: {
            display: "flex",
            flexDirection: "column",
            fontSize: "30px",
            fontWeight: "bolder",
            alignItems: "center",
            justifyContent: "center"
        },

        publicmaincontainer: {
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "15px",
            marginRight: "15px",
            height: "100%"
        },

        textStyle: { fontSize: "16px", margin: "5px", fontWeight: 500, color:"#551A8B" },
        displayFlex: { display: "flex" }
    };
};

export default function Aboutpresident() {
    const styles = useStyles();

    return (
        <div style={{ marginBottom: "30px" }}>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600, textAlign: "center" }}>OUR President - TFI</Typography>
                </Grid>
            </Grid>
            <div style={styles.publicmaincontainer}>
                <Grid container spacing={2}>
                    <Card style={styles.displayFlex}>
                        <Grid item xl={6} lg={6} md={12} xs={12}>
                            <div style={styles.titleContainer}>
                                <Avatar
                                    src={president}
                                    alt={"president"}
                                    style={{
                                        width: "300px",
                                        height:"300px",
                                        aspectRatio: "1",
                                        objectFit: "auto",
                                        objectPosition: "center",
                                    }}
                                />
                            </div>
                        </Grid>
                        <Grid item xl={6} lg={6} md={12} xs={12}>
                            <div style={styles.titleContainer}>
                                <div style={{ margin: "50px" }}>
                                    <Typography style={styles.textStyle}>DR. ISHARI K. GANESH</Typography>
                                    <Typography style={styles.textStyle}>"As President, I'm honored to lead our community in this exciting journey. Taekwondo is not just a sport, it's a pathway to self-improvement and empowerment. Together, let's foster a culture of discipline, respect, and excellence. Thank you for being part of our vision for a stronger Taekwondo community in India."</Typography>
                                    <br />
                                    <Typography style={styles.textStyle}>Worm regards,</Typography>
                                    <Typography style={styles.textStyle}>President, TFI</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Card>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
                            <Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600, textAlign: "center" }}>Our Secretary General - TFI</Typography>
                        </Grid>
                    </Grid>
                    <Card style={styles.displayFlex}>
                        <Grid item xl={6} lg={6} md={12} xs={12}>
                            <div style={styles.titleContainer}>
                                <div style={{ margin: "50px" }}>
                                    <Typography style={styles.textStyle}>ADV. R.D. MANGUESHKAR</Typography>
                                    <Typography style={styles.textStyle}>"As Secretary, I'm delighted to welcome you to our growing family. Taekwondo is a journey that transcends borders, uniting us in our pursuit of greatness. Let's work together to create opportunities for athletes, coaches, and enthusiasts alike. Thank you for your commitment to Taekwondo and to TFI."</Typography>
                                    <br />
                                    <Typography style={styles.textStyle}>Worm regards,</Typography>
                                    <Typography style={styles.textStyle}>Secretary General, TFI</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl={6} lg={6} md={12} xs={12} >
                            <div style={styles.titleContainer}>
                                <Avatar
                                    src={secratery}
                                    alt={"five"}
                                    style={{
                                        width: "300px",
                                        height:"350px",
                                        aspectRatio: "1",
                                        objectFit: "auto",
                                        objectPosition: "center",
                                    }}
                                />
                            </div>
                        </Grid>
                    </Card>
                </Grid>
            </div>
        </div>
    );
}
