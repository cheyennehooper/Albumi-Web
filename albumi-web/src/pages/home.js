import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import '../styles/home.css'


function Home(){
    const navigate = useNavigate();

    return(
        <div style={{ padding: '20px', color: "white"}}>
            <h1>Home Page</h1>
            <p>This is regular text</p>

            <h2>Button Components</h2>
            {/* Button container */}
            <div className="button-container">
                <Button text="Click to Change Color" />
                <Button text="Go to Signup Page" onClick={() => navigate('/signup')} />
            </div>
        </div>
    );
}
export default Home;