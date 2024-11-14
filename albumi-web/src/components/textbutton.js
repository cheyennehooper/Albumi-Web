import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/textbutton.css'

function TextButton({ text, to }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(to);
    };

    return(
        <h2 className="text-button" onClick={handleClick}>
            {text}
        </h2>
    );
}
export default TextButton;