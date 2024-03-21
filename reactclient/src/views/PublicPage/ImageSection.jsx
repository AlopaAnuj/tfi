import React from "react";
import { Typography, Grid } from "@mui/material";
import Images from "./Images";

export default function ImageSection() {
    return (
        <div style={{ marginBottom: "30px" }}>
            <div className="publicmaincontainer">
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} xs={12} style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <marquee direction="right" behavior="alternate"><Typography style={{ fontSize: "24px", color: "#551A8B", fontWeight: 600 }}>NATIONAL INTER DISTRICT TAEKWONDO CHAMPIONSHIP</Typography></marquee>
                        <Typography style={{ textAlign: "justify" }}>Every year we are conducting Six National Championships for different age groups (Sub- Junior, Cadet, Junior and Senior) including one National Open Championship & One National Inter – Zonal Championship on the basis of Zonal Championships. Besides these we are conducting several National level activities like Coaches seminar, Referees Seminar, etc. From this year we are introducing National Inter District Taekwondo Championship for Senior Age group in which Top five Districts from a state will be eligible to take part. This Championship has been introduced with an aim to earn medal in Paris Olympics’ 2024 as in our sport there is very less competition in upper weight categories as a result we have no Good players in these weight categories while in International Championships including Olympic Games there is scope to earn medal comparatively more easily in upper weight categories.</Typography>
                    </Grid>
                </Grid>
                <Images />
            </div>
        </div>
    );
}
