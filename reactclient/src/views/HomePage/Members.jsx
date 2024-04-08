import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import president from "../../assets/images/president.jpg";
import voicep1 from "../../assets/images/voicep1.jpg";
import voicep2 from "../../assets/images/voicep2.jpg";
import voicep3 from "../../assets/images/voicep3.jpg";
import voicep4 from "../../assets/images/voicep4.jpg";
import voicep5 from "../../assets/images/voicep5.jpg";
import secratery from "../../assets/images/secratery.jpg";
import jc1 from "../../assets/images/jc1.jpg";
import jc2 from "../../assets/images/jc2.jpg";
import jc3 from "../../assets/images/jc3.jpg";
import ft from "../../assets/images/ft.jpg";
import ecm1 from "../../assets/images/ecm1.jpg";
import ecm2 from "../../assets/images/ecm2.jpg";
import ecm3 from "../../assets/images/ecm3.jpg";
import ecm4 from "../../assets/images/ecm4.jpg";
import ecm5 from "../../assets/images/ecm5.jpg";
import ecm6 from "../../assets/images/ecm6.jpg";
import ecm7 from "../../assets/images/ecm7.jpg";
import ecm8 from "../../assets/images/ecm8.jpg";
import icc from "../../assets/images/icc.jpg";

export default function Members() {
    let membersData = [
        { "image": president, "name": "DR. ISHARI K. GANESH", "role": "President" },
        { "image": voicep1, "name": "SHRI. SHAILENDRA SRIVASTAVA", "role": "Voice President" },
        { "image": voicep2, "name": "SHRI. L. SOKUN SINGH", "role": "Voice President" },
        { "image": voicep3, "name": "SHRI. T. HARSHAVARDHAN PRASAD", "role": "Voice President" },
        { "image": voicep4, "name": "SHRI. HIRANYA SAIKILA", "role": "Voice President" },
        { "image": voicep5, "name": "SHRI.SANTHOSH KUMAR MOHANTY", "role": "Voice President" },
        { "image": secratery, "name": "ADV. R.D. MANGUESHKAR", "role": "Secretary General" },
        { "image": jc1, "name": "SHRI. ANIL DWIVEDI", "role": "Joint Secretaries" },
        { "image": jc2, "name": "SHRI. D. SATISH GOUD", "role": "Joint Secretaries" },
        { "image": jc3, "name": "SHRI. MILIND PATHARE", "role": "Joint Secretaries" },
        { "image": ft, "name": "MR. JASBIR SINGH GILL", "role": "Federation Treasurer" },
        { "image": ecm1, "name": "SHRI. AJI .B.", "role": "Executive Committee Member" },
        { "image": ecm2, "name": "SHRI. RAJESH YADAV", "role": "Executive Committee Member" },
        { "image": ecm3, "name": "SHRI. ANIL BHARGAVA", "role": "Executive Committee Member" },
        { "image": ecm4, "name": "SHRI.P. STALINE", "role": "Executive Committee Member" },
        { "image": ecm5, "name": "SHRI.RAJ KUMAR", "role": "Executive Committee Member" },
        { "image": ecm6, "name": "SHRI.VIKRAM SINGH", "role": "Executive Committee Member" },
        { "image": ecm7, "name": "SHRI.C. DURAI", "role": "Executive Committee Member" },
        { "image": ecm8, "name": "SMT. SHASHIBALA BADHANI", "role": "Executive Committee Member" },
        { "image": icc, "name": "DR. ARATI ARUN", "role": "Icc Member" }
    ]
    return (
        <div style={{ marginBottom: "30px" }}>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600, textAlign: "center" }}>OUR MEMBERS STAs</Typography>
                </Grid>
            </Grid>
            <div className="publicmaincontainer">
                <Grid container spacing={2}>
                    {membersData.map((item) => {
                        return <Grid item xl={3} lg={3} md={6} xs={12}>
                            <div className={'titleContainer'}>
                                <Card>
                                    <img
                                        src={item.image}
                                        alt={"one"}
                                        style={{
                                            borderRadius: "50%",
                                            width: "100%",
                                            aspectRatio: "1",
                                            objectFit: "auto",
                                            objectPosition: "center",
                                        }}
                                    />
                                    <div style={{ margin: "20px" }}>
                                        <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#551A8B" }}>{item.name}</Typography>
                                        <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#551A8B" }}>{item.role}</Typography>
                                        {/* <Typography style={{fontWeight:500, fontSize:"16px", color:"#551A8B"}}>He serves the Academy 15 years.</Typography> */}
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
