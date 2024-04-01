import React from 'react'
import { Grid, Card } from "@mui/material";
import home from "../../assets/6.jpg";
import one from "../../assets/9.jpg";
import two from "../../assets/6.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
import six from "../../assets/6.jpg";
import seven from "../../assets/7.jpg";
import eight from "../../assets/8.jpg";
import nine from "../../assets/9.jpg";
import ten from "../../assets/10.jpg";
import one1 from "../../assets/11.jpg";
import one2 from "../../assets/12.jpg";
import one3 from "../../assets/13.jpg";
import one4 from "../../assets/14.jpg";
import one5 from "../../assets/11.jpg";
import one6 from "../../assets/10.jpg";

const useStyles = () => {
    return {
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
            // marginRight: "50px",
            height: "100%"
        },

        textStyle: { fontSize: "16px", margin: "5px", fontWeight: 500, color:"#551A8B" },
        displayFlex: { display: "flex" }
    };
};

const Images = () => {
    const styles = useStyles();

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={one}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={two}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={four}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={five}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={six}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={seven}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={eight}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={nine}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={ten}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={home}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={one1}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={one2}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={one3}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={one4}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={one5}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xl={3} lg={3} md={4} xs={6}>
                    <div style={styles.titleContainer}>
                        <Card>
                            <img
                                src={one6}
                                alt={"one"}
                                style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    objectFit: "auto",
                                    objectPosition: "center",
                                }}
                            />
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Images