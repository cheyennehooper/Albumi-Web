import React, { useState } from "react";

function Button({ size, text, onClick, color}) {
    /* default color is blue */
    const [bgColor, setbgColor] = useState(color || 'blue' );

    const handleClick = () => {
        /* toggle btw blue and green on click */
        setbgColor(bgColor === 'blue' ? 'green' : 'blue')
        if (onClick) onClick();
    };

    return(
        <button onClick={handleClick}
            style={{backgroundColor: bgColor,
                    color: 'white',
                    padding: '10px 20px',
                    border: '2px solid black', 
                    borderRadius: '10px'}}
            >
                {text}
            </button>
    );

}

export default Button;