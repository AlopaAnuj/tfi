import React from 'react';
import { Button, Typography, useTheme, DialogTitle, DialogContent, Dialog, Divider } from "@mui/material";
import defaultImage from "../../assets/images/profile.png"

const useStyles = () => {
    const theme = useTheme();
    return {
        buttonStyle: {
            textAlign:"center",
            backgroundColor:"blue",
            color: "#fff"
        },
        textStyle: {fontSize:"16px", margin:"5px", fontWeight:500},
        errorTextStyle: {fontSize:"16px", margin:"5px", fontWeight:600, color: "red"},
        imageStyle: {height: "300px", width: "500px"},
        imageHeading: {fontSize:"20px", margin:"5px", fontWeight:600},
        dialogHeading: {fontSize:"24px", textAlign:"center", margin:"5px", fontWeight:600},
    };
};


export default function CondidateDialogUI(props) {
    let data = props.dialodData;
    const [open, setOpen] = React.useState(false);
    const styles = useStyles();

    const handleClickOpen = () => {
        props.handleCloseDialog()
        setOpen(false);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open || props.open}
        scroll="body"
        maxWidth="lg"
        >
            <DialogTitle style={styles.dialogHeading}>Condidate Profile</DialogTitle>
            <Divider />
            {data&&<DialogContent >
            {data.status === 3&&<Typography style={styles.errorTextStyle}>Reason of Rejection: {data.reason}</Typography>}
            <Typography style={styles.textStyle}>Full Name: {data.fullName}</Typography>
            <Typography style={styles.textStyle}>Guardian Name: {data.guardianName}</Typography>
            <Typography style={styles.textStyle}>Contact Number: {data.contactNumber}</Typography>
            <Typography style={styles.textStyle}>Gender: {data.gender}</Typography>
            <Typography style={styles.textStyle}>Date Of Birth: {data.dateOfBirth}</Typography>
            <Typography style={styles.textStyle}>Email Id: {data.email}</Typography>
            <Typography style={styles.textStyle}>Email Id: {data.email}</Typography>
            <Typography style={styles.textStyle}>State: {data.state}</Typography>
            <Typography style={styles.textStyle}>district: {data.district}</Typography>
            <Typography style={styles.textStyle}>Primary Role: {data.primaryRole}</Typography>
            <Typography style={styles.textStyle}>Secondary Role: {data.secondaryRole}</Typography>
            <Typography style={styles.textStyle}>Other Role: {data.otherRole}</Typography>
            <Typography style={styles.textStyle}>Address: {data.address}</Typography><br />
            <Typography style={styles.imageHeading}>Condidate Photo:</Typography>
            <img style={styles.imageStyle} alt="No Images" src={data.photo === null?defaultImage:data.photo} /><br /><br />
            <Typography style={styles.imageHeading}>Condidate Aadhar:</Typography>
            <img style={styles.imageStyle} alt="No Images" src={data.aadhar}/><br /><br />
            <Typography style={styles.imageHeading}>Condidate Birth Certificate:</Typography>
            <img style={styles.imageStyle} alt="No Images" src={data.birthCertificate}/>
            </DialogContent>}
            <Divider />
            <div style={{textAlign:"center", margin:"10px"}}>
            <Button onClick={handleClickOpen}>
                close
            </Button>
            </div>
        </Dialog>
    );
}
