import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
export default function UpComingEvents() {
    return (
        <div style={{ marginBottom: "30px" }}>
            <div className="publicmaincontainer">
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <marquee direction="right" behavior="alternate"><Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600 }}>Upcoming Events...</Typography></marquee>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card style={{ height: "400px" }}>
                                <div style={{ margin: "20px" }}>
                                    <Typography style={{ fontWeight: 600, fontSize: "20px", color: "#551A8B" }}>6th NATIONAL CADET KYORUGI & POOMSAE TAEKWONDO CHAMPIONSHIPS</Typography>
                                    <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#551A8B" }}>Sresht, a student of KG-II in Greenwood High Sarjapur,  won medals at the 40th Karnataka State Kyorugi & 13th Karnataka State Poomsae Sub-Junior Taekwondo Championships. He participated in the under-6 years age category & won the medals for two categories. The first was demonstrating knowledge of the Katas for his Green belt level.</Typography>
                                    <br />
                                    <Typography style={{ fontWeight: 400, fontSize: "14px", color: "#551A8B", cursor: "pointer" }}>Read More...</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card style={{ height: "400px" }}>
                                <div style={{ margin: "20px" }}>
                                    <Typography style={{ fontWeight: 600, fontSize: "20px", color: "#551A8B" }}>40th NATIONAL JUNIOR KYORUGI & 13th NATIONAL JUNIOR POOMSAE TAEKWONDO CHAMPIONSHIPS	</Typography>
                                    <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#551A8B" }}>The 39th National Senior Kyorugi and the 12th National Senior Poomsae Taekwondo Championships concluded at the Karambir Nabin Chandra Bordoloi Indoor Stadium, Sarusajai Sports Complex in Guwahati on September 11.</Typography>
                                    <br />
                                    <Typography style={{ fontWeight: 400, fontSize: "14px", color: "#551A8B", cursor: "pointer" }}>Read More...</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card style={{ height: "400px" }}>
                                <div style={{ margin: "20px" }}>
                                    <Typography style={{ fontWeight: 600, fontSize: "20px", color: "#551A8B" }}>39th NATIONAL SENIOR KYORUGI & 12th NATIONAL SENIOR POOMSAE TAEKWONDO CHAMPIONSHIPS	</Typography>
                                    <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#551A8B" }}>The 39th National Senior Kyorugi and the 12th National Senior Poomsae Taekwondo Championships concluded at the Karambir Nabin Chandra Bordoloi Indoor Stadium, Sarusajai Sports Complex in Guwahati on September 11.</Typography>
                                    <br />
                                    <Typography style={{ fontWeight: 400, fontSize: "14px", color: "#551A8B", cursor: "pointer" }}>Read More...</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} xs={12}>
                        <div className={'titleContainer'}>
                            <Card style={{ height: "400px" }}>
                                <div style={{ margin: "20px" }}>
                                    <Typography style={{ fontWeight: 600, fontSize: "20px", color: "#551A8B" }}>39th NATIONAL SENIOR KYORUGI & 12th NATIONAL SENIOR POOMSAE TAEKWONDO CHAMPIONSHIPS	</Typography>
                                    <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#551A8B" }}>The 39th National Senior Kyorugi and the 12th National Senior Poomsae Taekwondo Championships concluded at the Karambir Nabin Chandra Bordoloi Indoor Stadium, Sarusajai Sports Complex in Guwahati on September 11.</Typography>
                                    <br />
                                    <Typography style={{ fontWeight: 400, fontSize: "14px", color: "#551A8B", cursor: "pointer" }}>Read More...</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
