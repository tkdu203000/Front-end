import React from 'react';
import { useRef } from 'react';
import Card from './Card';
import './About.css';
import algorithmsData from './algorithmsData'; // Import the data

function About({ setPage }) {
    const handleSkipToContents = () => {
        const path = 'Contents';
        setPage(path);
    };

    const dialogRef = useRef(null);

    return (
        <>
            <div className="algorithms-container" id="algorithms-container">
                <h2>About Machine Learning Algorithms</h2>
                <a className="skip-contents" onClick={handleSkipToContents}>
                    Click this link or one of the cards below to explore more.
                </a>
                <a className="skip-link2" tabIndex="0" href="#algorithms-container">
                    Skip to main content
                </a>
                <div className="cards">
                    {algorithmsData.map((algorithm, index) => (
                        <Card key={index} algorithm={algorithm} setPage={setPage} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;
