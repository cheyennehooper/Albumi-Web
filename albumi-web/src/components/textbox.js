import React from 'react';

function TextBox({ placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        padding: '5px',
        fontSize: '1em',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '200px',
      }}
    />
  );
}

export default TextBox;
