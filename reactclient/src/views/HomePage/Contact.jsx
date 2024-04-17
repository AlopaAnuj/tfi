import React from 'react'
import { Typography, Grid, Card } from "@mui/material";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
const useStyles = () => {
    return {
        aboutCardStyle: {
            padding: "30px",
            height: "100%"
        },
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
            // marginLeft: "50px",
            marginTop: "80px",
            height: "100%"
        },
        fullCardStyle: {
            marginBzottom: "50px",
            padding: "30px",
            height: "100%",
            marginTop: "20px"
        },
        textStyle: { fontSize: "16px", margin: "5px", fontWeight: 500 },
    };
};

const Contact = () => {
    const styles = useStyles();
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div style={styles.publicmaincontainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div style={styles.titleContainer} >
                            <Card style={styles.fullCardStyle}>
                                <Typography style={{ fontSize: "24px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Contact Us</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>We are here for you 24X7 support. You can react out to us via email, call, or whatsapp. We will be happy to help you. We are here for you 24X7 support. You can react out to us via email, call, or whatsapp. We will be happy to help you., We are here for you 24X7 support. You can react out to us via email, call, or whatsapp. We will be happy to help you., We are here for you 24X7 support. You can react out to us via email, call, or whatsapp. We will be happy to help you.</Typography>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
                <Grid container spacing={2}>
                    <Grid item xl={6} lg={6} md={12} xs={12}>
                        <div style={styles.titleContainer} >
                            <Card style={styles.aboutCardStyle} >
                                <Typography style={{ fontSize: "24px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Get in Touch</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}> Taekwondo is the most popular martial arts of our country and is a regular event of Olympic Games, Asian Games & National Games. We have 39 affiliated members i.e. State Associations and Central Organizations like SSCB (Army, Navy & Air Force), CRPF, CISF, RPF, Police Control Board, etc. Our sports has been recognized by almost all National level Academic Organizations like Kendriya Vidyalaya Sangathan, CBSE, Navodaya Vidyalaya, Universities, Saraswati Vidya Mandir Sanshthan, etc.</Typography>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} xs={12}>
                        <div style={styles.titleContainer} >
                            <Card style={styles.aboutCardStyle}>
                                <Typography style={{ fontSize: "24px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Have questions Contact us on following.</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>membership@officialtfi.com</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>+91 9********4</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>+91 8********3</Typography>

                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default Contact