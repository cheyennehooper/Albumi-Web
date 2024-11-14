import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import TextBox from "../components/textbox";
import '../styles/login.css'

function Login(){
    /*if i want to navigate to a page based off a button or something i use this*/
    const navigate = useNavigate();

    return(
        /*setting props directly to div*/
        <div className="login-wrapper">
            <div className="login-container">
                <h2>Login Page</h2>
                <div className="log-textbox-container">
                    <TextBox placeholder="enter username" />
                    <TextBox placeholder="enter password" type="password" />
                </div>
                <div className="log-button-container">
                {/*heres how i can use my button bc i set props in my component*/}
                <Button text="back to home" onClick={() => navigate('/')} />
                </div>
            </div>
        </div>
    );
}

export default Login;