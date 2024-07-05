import React from 'react';

import './Card.css';


function Card({ algorithm, setPage }) {
    const handleClick = () => {
        // const path = navigationLinks[0].path; // Access the path from the first object in the array
        const path = 'Contents';
        setPage(path);
        
    };

    return (
        <div className="card" onClick={handleClick} >
            <h3>{algorithm.name}</h3>
            <p>{algorithm.description}</p>
            <p>{algorithm.example}</p>
            
        </div>
    );
}

export default Card;
