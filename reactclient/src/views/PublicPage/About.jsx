import React from 'react'
import { Typography, Grid, Card } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className="publicmaincontainer">
            <Typography style={{textAlign:"center", fontSize:"16px", color:"#551A8B", paddingTop: "15px", fontWeight:600}}>About Us</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className={'titleContainer'}>
                            <Card className='aboutCardStyle'>
                                <Typography style={{ fontSize: "24px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Our Vision</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}> Taekwondo is the most popular martial arts of our country and is a regular event of Olympic Games, Asian Games & National Games. We have 39 affiliated members i.e. State Associations and Central Organizations like SSCB (Army, Navy & Air Force), CRPF, CISF, RPF, Police Control Board, etc. Our sports has been recognized by almost all National level Academic Organizations like Kendriya Vidyalaya Sangathan, CBSE, Navodaya Vidyalaya, Universities, Saraswati Vidya Mandir Sanshthan, etc.</Typography>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={'titleContainer'}>
                            <Card className='aboutCardStyle'>
                                <Typography style={{ fontSize: "24px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Our Mission</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}> Taekwondo is the most popular martial arts of our country and is a regular event of Olympic Games, Asian Games & National Games. We have 39 affiliated members i.e. State Associations and Central Organizations like SSCB (Army, Navy & Air Force), CRPF, CISF, RPF, Police Control Board, etc. Our sports has been recognized by almost all National level Academic Organizations like Kendriya Vidyalaya Sangathan, CBSE, Navodaya Vidyalaya, Universities, Saraswati Vidya Mandir Sanshthan, etc.</Typography>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={'titleContainer'}>
                            <Card className='fullCardStyle'>
                                <Typography style={{ fontSize: "24px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Our Mission</Typography>
                                <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}> Taekwondo is the most popular martial arts of our country and is a regular event of Olympic Games, Asian Games & National Games. We have 39 affiliated members i.e. State Associations and Central Organizations like SSCB (Army, Navy & Air Force), CRPF, CISF, RPF, Police Control Board, etc. Our sports has been recognized by almost all National level Academic Organizations like Kendriya Vidyalaya Sangathan, CBSE, Navodaya Vidyalaya, Universities, Saraswati Vidya Mandir Sanshthan, etc.</Typography>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )
}

export default About