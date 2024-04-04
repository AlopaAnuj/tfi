import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";

export default function AboutMembers() {
    return (
        <div style={{ marginBottom: "30px" }}>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
                   <Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600, textAlign:"center" }}>OUR AboutMEMBERS STAs</Typography>
                </Grid>
            </Grid>
            <div className="publicmaincontainer">
                <Grid container spacing={2}>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card>
                                <img
                                    src={one}
                                    alt={"one"}
                                    style={{
                                        borderRadius: "50%",
                                        width: "100%",
                                        aspectRatio: "1",
                                        objectFit: "auto",
                                        objectPosition: "center",
                                    }}
                                />
                                <div style={{margin:"20px"}}>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Mr. Aquibe Khan</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Coach</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>He serves the Academy 15 years.</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card>
                                <img
                                    src={two}
                                    alt={"one"}
                                    style={{
                                        borderRadius: "50%",
                                        width: "100%",
                                        aspectRatio: "1",
                                        objectFit: "auto",
                                        objectPosition: "center",
                                    }}
                                />
                                <div style={{margin:"20px"}}>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Mr. Aquibe Khan</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Coach</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>He serves the Academy 15 years.</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card>
                                <img
                                    src={four}
                                    alt={"one"}
                                    style={{
                                        borderRadius: "50%",
                                        width: "100%",
                                        aspectRatio: "1",
                                        objectFit: "auto",
                                        objectPosition: "center",
                                    }}
                                />
                                <div style={{margin:"20px"}}>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Mr. Aquibe Khan</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Coach</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>He serves the Academy 15 years.</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card>
                                <img
                                    src={five}
                                    alt={"one"}
                                    style={{
                                        borderRadius: "50%",
                                        width: "100%",
                                        aspectRatio: "1",
                                        objectFit: "auto",
                                        objectPosition: "center",
                                    }}
                                />
                                <div style={{margin:"20px"}}>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Mr. Aquibe Khan</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>Coach</Typography>
                                <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>He serves the Academy 15 years.</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
