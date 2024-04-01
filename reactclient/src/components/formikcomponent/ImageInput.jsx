
import React, { useState } from 'react';
import { getIn } from 'formik'
import { Avatar, useTheme, Typography, Button, Menu, MenuItem } from '@mui/material';
import EditImage from "../../assets/images/edit.png"
import ImageDialog from './ImageDialogBox';

export default function ({ field, form, name, authenticatedApiCall, error, onChange, onBlur, defaultsrc, label, displayErrorMessage = true, ...otherProps }) {
	const useStyles = () => {
		const theme = useTheme();
		return {
			bigAvatar: {
				// margin: 10,
				width: 100,
				height: 100,
				borderRadius: 50
			},
			hidden: {
				display: "none"
			},
			defaultImage: {
				width: 100,
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
				right: '0%',
				minWidth: 0,
				[theme.breakpoints.down('sm')]: {
					right: '38%',
				}
			},
			imgPic: {
				width: 300, height: 150, background: "#fff", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"
			}
		}
	}

	const styles = useStyles();
	const [img, setimg] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = React.useState(false);

	const handleEdit = (event) => {
		setAnchorEl(event.currentTarget);
	}
	const handleOpenDialog = () => {
		setOpen(true);
		setAnchorEl(null);
	}

	const handleCloseDialog = (value) => {
		setOpen(false);
		if (value.file !== undefined) {
			let file = value.file;
			setimg(value.base64Rep);
			file.base64Rep = value.base64Rep;
			form.setFieldValue(field.name, file);
		}
	};
	const handleCloseDialogBox = () => {
		setOpen(false);
	};
	const handleClose = () => {
		setAnchorEl(null);
	}

	const handleRemovePic = () => {
		form.setFieldValue(field.name, null);
		let img = null
		setimg(img);
		setAnchorEl(null);
	}

	const blurHandler = (event) => {
		form.setFieldTouched(field.name);
		if (onBlur) {
			onBlur(event);
		}
	}
	const errorText = getIn(form.errors, field.name);
	return (
		<>
			<div style={styles.imgPic}>
				<Typography style={{ fontSize: "16px", marginRight: "10px", fontWeight: 500 }}>{label}</Typography>
				<input name={field.name} type="file" accept="image/jpeg,image/jpg,image/png" style={{ display: "none" }} onClick={handleOpenDialog} onBlur={blurHandler} />
				{errorText ? <img src={EditImage} style={styles.defaultImage} onClick={handleOpenDialog} /> :
					img ? <div style={styles.posRel}><Avatar style={styles.bigAvatar} src={img} /><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleEdit} style={styles.EditButton}><img style={styles.editPen} src={EditImage} /></Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleOpenDialog}>Change Photo</MenuItem>
							<MenuItem onClick={handleRemovePic}>Remove Photo</MenuItem>

						</Menu>
					</div> :
						field.value ? <div style={styles.posRel}><Avatar style={styles.bigAvatar} src={field.value} />
							<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleEdit} style={styles.EditButton}>
								<img style={styles.editPen} src={EditImage} onClick={handleEdit} /></Button>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								// keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleOpenDialog}>Change Photo</MenuItem>
								<MenuItem onClick={handleRemovePic}>Remove Photo</MenuItem>
							</Menu>
						</div> :
							<img src={defaultsrc} style={styles.defaultImage} onClick={handleOpenDialog} />}
				{displayErrorMessage && (
					<Typography variant="caption" color="error">
						<p>{errorText}</p>
					</Typography>
				)}
				<ImageDialog open={open} onClose={handleCloseDialog} errorText={errorText} form={form} field={field} defaultsrc={field.value ? field.value : defaultsrc} onCloseDialog={handleCloseDialogBox} />
			</div>
		</>
	)
}
