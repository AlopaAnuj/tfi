import React from 'react'
import { Typography } from "@mui/material";
import Footer from "./Footer";
import Images from "./Images";
import { Helmet } from "react-helmet";
const useStyles = () => {
    return {
        publicmaincontainer: {
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginLeft: "50px",
            marginTop: "50px",
            marginBottom: "30px",
            height: "100%"
        },
    };
};
const Gallery = () => {
    const styles = useStyles();
    return (
        <div>
            <Helmet>
                <title>Gallery</title>
            </Helmet>
            <div style={styles.publicmaincontainer} >
                <Typography style={{ textAlign: "center", fontSize: "16px", color: "#551A8B", padding: "20px", fontWeight: 600 }}>Gallery</Typography>
                <Images />
            </div>
            <Footer />
        </div>
    )
}

export default Gallery