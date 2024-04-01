import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import one from "../../assets/1.jpg";
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
                                <img
                                    src={one}
                                    alt={"one"}
                                    style={{
                                        width: "100%",
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
                                    <Typography style={styles.textStyle}>Mr. Aquibe Khan</Typography>
                                    <Typography style={styles.textStyle}>Coach</Typography>
                                    <Typography style={styles.textStyle}>He serves the Academy 15 years. Taekwondo was included as a discipline for the first at the 1985 National Games in New Delhi. The TFI organized a special taekwondo demonstration by Korean taekwondokas for then Prime Minister Rajiv Gandhi at the Prime Minister's residence on 17 March 1986. Gandhi was impressed by the demonstration and agreed to "extend all possible help" to the TFI. The Union Ministry of Youth Affairs and Sports officially recognized the TFI as the national governing body for taekwondo in 1988</Typography>
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
                                    <Typography style={styles.textStyle}>Mr. Aquibe Khan</Typography>
                                    <Typography style={styles.textStyle}>Coach</Typography>
                                    <Typography style={styles.textStyle}>He serves the Academy 15 years. Taekwondo was included as a discipline for the first at the 1985 National Games in New Delhi. The TFI organized a special taekwondo demonstration by Korean taekwondokas for then Prime Minister Rajiv Gandhi at the Prime Minister's residence on 17 March 1986. Gandhi was impressed by the demonstration and agreed to "extend all possible help" to the TFI. The Union Ministry of Youth Affairs and Sports officially recognized the TFI as the national governing body for taekwondo in 1988</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl={6} lg={6} md={12} xs={12} >
                            <div style={styles.titleContainer}>
                                <img
                                    src={five}
                                    alt={"five"}
                                    style={{
                                        width: "100%",
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
