import React from 'react';
import SuccessDialog from './SuccessDialog';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'

function TimeOutBackground() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/login`);
    }
    let loginButton = [<Button style={{ background: "cornflowerblue", color: "white", fontSize: "14px", fontWeight: 500, borderRadius: "10%" }} onClick={handleClick} >{"Login"}</Button>];
    return (
        <SuccessDialog successButton={loginButton} HeaderText={"Session Expired"} BodyText={"Session has been expired. Please login again to use the application."} />
    )
}

export default TimeOutBackground;