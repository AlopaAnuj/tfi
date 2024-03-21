import React from 'react'
import { Typography, Grid, Card } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Images from "./Images";

const Gallery = () => {
    return (
        <div>
            <Header />
            <div className="publicmaincontainer" style={{ marginBottom: "30px" }}>
            <Typography style={{textAlign:"center", fontSize:"16px", color:"#551A8B", padding: "20px", fontWeight:600}}>Gallery</Typography>
                <Images />
            </div>
            <Footer />
        </div>
    )
}

export default Gallery