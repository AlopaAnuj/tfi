import React from 'react'
import { Typography, Grid, Card } from "@mui/material";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Members from "./Members";
import AboutPresident from "./AboutPresident";

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
            marginTop: "80px",
            // marginRight: "50px",
            height: "100%"
        },


        buttonStyle: {
            textAlign: "center",
            backgroundColor: "blue",
            color: "#fff"
        },
        textStyle: { fontSize: "16px", margin: "5px", fontWeight: 500 },
        imageStyle: { height: "300px", width: "500px" },
        imageHeading: { fontSize: "20px", margin: "5px", fontWeight: 600 },
        dialogHeading: { fontSize: "24px", textAlign: "center", margin: "5px", fontWeight: 600 },
    };
};

const About = () => {
    const styles = useStyles();
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div style={styles.publicmaincontainer}>
                <Typography style={{ textAlign: "center", fontSize: "22px", color: "#551A8B", padding: "20px", fontWeight: 600 }}>About Us</Typography>
                <Grid container spacing={2}>
                    <Grid item xl={6} lg={6} md={12} xs={12}>
                        <div style={styles.titleContainer} >
                            <Card >
                                <div style={{ height: "50px", background: "#F5F5F5" }}><Typography style={{ fontSize: "24px", paddingTop: "10px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Our Vision</Typography></div>
                                <div style={styles.aboutCardStyle}>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>At the Taekwondo Federation of India, our vision is to cultivate a nation where Taekwondo serves as a beacon of excellence, unity, and pride. We envision a future where Taekwondo transcends boundaries, empowering individuals of all ages and backgrounds to embrace its values of discipline, respect, and perseverance.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>Driven by our commitment to excellence, we strive to elevate Taekwondo to new heights, both nationally and internationally. Through our extensive network of affiliated members which are more than 25 and growing, including prestigious institutions and central organizations, we aim to expand the reach and impact of our sport across every corner of India.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>We envision a holistic approach to Taekwondo development, encompassing not only competitive achievements but also the holistic well-being of our athletes. By fostering a culture of inclusivity and support, we seek to nurture talent, cultivate leadership, and instill lifelong values in our practitioners.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>In line with our vision, we conduct a diverse array of national championships, seminars, and initiatives to provide opportunities for growth and advancement. Our introduction of the PSS (Electronic Protector Systems) in Indian Taekwondo reflects our commitment to addressing gaps in development and maximizing our potential for success on the international stage, including the upcoming Olympics and other prestigious events.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>Through our unwavering dedication and collective effort, we aspire to propel Taekwondo to the forefront of India's sporting landscape, inspiring generations to come and leaving a lasting legacy of excellence and achievement.</Typography>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} xs={12}>
                        <div style={styles.titleContainer}>
                            <Card >
                                <div style={{ height: "50px", background: "#F5F5F5" }}><Typography style={{ fontSize: "24px", paddingTop: "10px", textAlign: "center", fontWeight: 700, color: "#551A8B" }}>Our Mission</Typography></div>
                                <div style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "30px" }}><Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>The Taekwondo Federation of India is dedicated to fostering the growth, development, and promotion of Taekwondo as a premier martial art and sport throughout the nation. Our mission encompasses several key objectives:</Typography></div>
                                <div style={styles.aboutCardStyle}>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>1. Community Engagement and Outreach: We are committed to reaching out to communities across India, promoting the benefits of Taekwondo as a means of physical fitness, self-defense, and character development. Through grassroots initiatives, outreach programs, and partnerships with local organizations, we aim to make Taekwondo accessible to individuals of all backgrounds and abilities.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>2. Education and Training Excellence: We prioritize the continuous education and training of athletes, coaches, referees, and officials to ensure excellence in every aspect of Taekwondo. Through the organization of seminars, workshops, and certification programs, we provide opportunities for skill development, knowledge enhancement, and professional growth within the Taekwondo community.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>3. Talent Identification and Development: We are dedicated to identifying and nurturing talent at all levels, from grassroots beginners to elite athletes. By establishing talent identification programs, talent scouting initiatives, and talent development pathways, we aim to provide aspiring athletes with the support and resources needed to realize their full potential and represent India on the international stage, with the ultimate goal of winning an Olympic medal.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>4. Competition and Performance Excellence: We strive to elevate the standard of Taekwondo competition in India by organizing high-quality national championships, tournaments, and events. Through fair and transparent competition formats, we provide athletes with opportunities to showcase their skills, challenge themselves, and excel in both national and international arenas.</Typography><br></br>
                                    <Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>5. Governance and Integrity: We are committed to upholding the highest standards of governance, integrity, and ethical conduct within the Taekwondo Federation of India. Through transparent decision-making processes, accountability mechanisms, and adherence to international standards and regulations, we ensure the credibility, trustworthiness, and sustainability of our organization.</Typography>
                                </div>
                                <div style={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "20px" }}><Typography style={{ fontSize: "16px", textAlign: "justify", fontWeight: 500, color: "#551A8B" }}>In pursuit of our mission, we collaborate closely with stakeholders, partners, and affiliates, leveraging our collective expertise, resources, and passion for Taekwondo to advance the sport's growth and development in India. Together, we strive to realize our vision of a nation where Taekwondo serves as a catalyst for personal growth, athletic excellence, national pride, and the pursuit of Olympic glory.</Typography></div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
                <Members />
                <AboutPresident />
            </div>
            <Footer />
        </div >
    )
}

export default About