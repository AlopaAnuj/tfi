import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, useTheme, DialogTitle, DialogContent, Dialog, Divider } from "@mui/material";

import { getDashboardStyle } from "../../components/customstyles/DashboardStyle";
const useStyles = () => {
    const theme = useTheme();
    return getDashboardStyle(theme);
};
function RequestCancelationDialog(props) {
    const styles = useStyles();
    const navigate = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        // props.handleCloseDialog()
        setOpen(false);
    };
    const handleClose = (value) => {
        // props.handleCloseDialog()
        setOpen(false);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open || props.open}
            scroll="body"
            maxWidth="lg"
        >
            <DialogTitle style={styles.dialogHeading}>Condidate Profile</DialogTitle>
            <Divider />
            <DialogContent >
            </DialogContent>
            <Divider />
            <div style={{ textAlign: "center", margin: "10px" }}>
                <Button onClick={handleClickOpen}>
                    close
                </Button>
            </div>
        </Dialog>
    );
}
export default RequestCancelationDialog;
