import React, { useState, useRef, useEffect } from 'react';
import { useTheme, Button, DialogTitle, Dialog, DialogActions, DialogContent, Divider, Typography, Tooltip, Slider } from '@mui/material';
import AvatarEditor from 'react-avatar-editor'
import GridContainer from "../grid/GridContainer.jsx";
import GridItem from "../grid/GridItem.jsx";

const useStyles = () => {
    const theme = useTheme();
    return {
        bigAvatar: {
            // margin: 10,
            width: "100%",
            // height: 200,
            borderRadius: 0
        },
        hidden: {
            display: "none"
        },
        defaultImage: {
            padding: 75,
            width: "100%",
            backgroundColor: "rgba(65, 158, 213, 0.1)",
            cursor: "pointer"
        },

        posRel: {
            position: "relative"
        },
        editPen: {
            cursor: "pointer",
            width: 35
        },
        EditButton: {
            position: "absolute",
            bottom: '5%',
            right: '28%',
            minWidth: 0,
            [theme.breakpoints.down('sm')]: {
                right: '38%',
            }
        },
        root: {
            borderBottom: `1px solid ${theme.palette.divider}`,
            margin: 0,
            padding: theme.spacing.unit * 2,
            width: "600px",
            [theme.breakpoints.down('sm')]: {
                width: "100%"
            }
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        primaryBtn: {
            color: "#fff",
            backgroundColor: theme.palette.primary.main,
            textTransform: "capitalize",
            border: "1px solid " + theme.palette.border.primaryBorder,
            borderRadius: "50px",
            textAlign: "right",
            padding: "4px 15px",
            marginLeft: "7px",
            '&:hover': {
                backgroundColor: theme.palette.hoverPrimaryColor.main,
                color: "#fff",
                border: "1px solid " + theme.palette.border.hoverPrimaryBorder,
            }
        },
        thirdBtn: {
            color: "#fff",
            backgroundColor: theme.palette.thirdColor.main,
            border: "1px solid " + theme.palette.border.thirdBorder,
            borderRadius: "25px",
            padding: "6px 17px",
            fontWeight: "400",
            lineHeight: "1.42857143",
            '&:hover': {
                color: "#fff",
                backgroundColor: theme.palette.hoverThirdColor.main,
                border: "1px solid " + theme.palette.border.hoverThirdBorder
            }
        },
        submitMediBtn: {
            backgroundColor: "#00446B",
            minWidth: "30px !important",
            borderRadius: "25px",
            padding: "5px 25px",
            textTransform: "uppercase",
        },
        gridPadding: {
            [theme.breakpoints.down('sm')]: {
                padding: 0
            }
        }
    }
};

export default function (props) {
    const styles = useStyles();
    const [img, setimg] = useState();
    const [rotate, setrotate] = useState(0);
    const [scale, setscale] = useState(1);
    const [imageSelected, setImage] = useState(true)
    const { onClose, open, onCloseDialog } = props;
    let currentEditor = useRef();
    let inputRef = useRef()
    useEffect(() => {
        (props.open && imageSelected) && setimg(props.defaultsrc)
    });
    const handleBrowseImage = () => {
        inputRef.current.click()
    }
    const changeHandler = async (e) => {
        let file = e.target.files[0];
        const SUPPORTED_FORMATS = [
            "image/jpg",
            "image/jpeg",
            "image/png"
        ];
        if (file) {
            if (SUPPORTED_FORMATS.includes(file.type)) {

                setimg(file);
                setImage(false)

            } else {
                file.base64Rep = img
                props.form.setFieldValue(props.field.name, file)
            }
        }
    }
    const handleSave = () => {
        if (currentEditor && !imageSelected) {
            var image = {
                file: img,
                base64Rep: currentEditor.current.getImageScaledToCanvas().toDataURL()
            }
            setrotate(0);
            setscale(1);
            setimg(props.defaultsrc);
            setImage(true);
        }
        imageSelected ? onCloseDialog() : onClose(image)
    }
    const handleCloseDialogBox = () => {
        setrotate(0);
        setscale(1);
        setimg(props.defaultsrc);
        setImage(true);
        onCloseDialog()
    }
    const rotateLeft = () => {
        setrotate(rotate - 90)
    }
    const rotateRight = () => {
        setrotate(rotate + 90)
    }

    return (
        <>
            <Dialog aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" style={styles.root}>Choose Image </DialogTitle>
                <DialogContent style={{ paddingTop: "20px", paddingBottom: "20px", fontSize: "14px" }}>
                    <GridContainer >
                        <GridItem md={5} lg={5} sm={12} xs={12} >
                            <AvatarEditor image={img} ref={currentEditor} style={styles.imageSelected ? styles.defaultImage : undefined} width={200} height={200} border={0} rotate={rotate} scale={scale} />
                            <Typography variant="caption" color="error">
                                <p>{props.errorText}</p>
                            </Typography>
                        </GridItem>
                        <GridItem md={7} lg={7} sm={12} xs={12} style={styles.gridPadding}>
                            <input type="file" ref={inputRef} style={styles.hidden} onChange={changeHandler} accept="image/jpeg,image/jpg,image/png" />

                            <br />
                            <Button onClick={handleBrowseImage} style={styles.thirdBtn}>Change Image</Button>
                            <br /><br />
                            Rotate: <span><Button onClick={rotateLeft} style={styles.primaryBtn}>Left</Button><Button style={styles.primaryBtn} onClick={rotateRight}>Right</Button></span><br /><br />
                        </GridItem>
                    </GridContainer>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button style={styles.thirdBtn} onClick={handleCloseDialogBox}>Close</Button>
                    <Button onClick={handleSave} style={styles.thirdBtn} >Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
