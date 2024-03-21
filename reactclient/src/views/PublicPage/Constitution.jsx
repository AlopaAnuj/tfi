import React from "react";
import { Typography, Grid, Card } from "@mui/material";
export default function Constitution() {
    return (
        <div style={{ marginBottom: "30px" }}>
            <div className="publicmaincontainer">
                <Grid container spacing={2}>
                    <Grid item xs={6} style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <Card style={{ padding: "30px" }}>
                            <Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600 }}>TAEKWONDO FEDERATION OF INDIA (TFI) CONSTITUTION</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>National and International level Taekwondo Championships</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Training courses for Instructors. Publication of necessary materials.</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Research cell for self– defense techniques. Making of Rules & Regulations.</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Black Belt Examination</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Other activities for attaining the objectives envisaged above.</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <Card style={{ padding: "30px" }}>
                            <Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600 }}>TAEKWONDO FEDERATION OF INDIA (TFI) CONSTITUTION</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>National and International level Taekwondo Championships</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Training courses for Instructors. Publication of necessary materials.</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Research cell for self– defense techniques. Making of Rules & Regulations.</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Black Belt Examination</Typography>
                            <Typography style={{ textAlign: "justify", fontSize:"16px", color:"#551A8B" }}>Other activities for attaining the objectives envisaged above.</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
