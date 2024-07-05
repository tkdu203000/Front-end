import React from 'react';
import './Button.css'; 

function Button({ type = 'button', visual = 'button', onClick, children, marginLeft }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    // Determine the classes based on the 'visual' prop
    let buttonClasses = 'button';
    if (visual === 'link') {
        buttonClasses += ' link';
    } else if (visual === 'transparent') {
        buttonClasses += ' transparent';
    }
    if (marginLeft) {
        buttonClasses += ' margin';
    }

    return (
        <button type={type} className={buttonClasses} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;
