import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import TextBox from "../components/textbox";
import '../styles/signup.css'

function Signup(){
    /*if i want to navigate to a page based off a button or something i use this*/
    const navigate = useNavigate();

    return(
        /*setting props directly to div*/
        <div className="signup-wrapper">
            <div className="signup-container">
                <h2>Signup Page</h2>
                <div className="su-textbox-container">
                    <TextBox placeholder="enter username" />
                    <TextBox placeholder="enter email" type="email" />
                    <TextBox placeholder="enter password" type="password" />
                </div>
                <div className="su-button-container">
                {/*heres how i can use my button bc i set props in my component*/}
                <Button text="back to home" onClick={() => navigate('/')} />
                <Button text="have an account? login" onClick={() => navigate('/login')} />
                </div>
            </div>
        </div>
    );
}

export default Signup;