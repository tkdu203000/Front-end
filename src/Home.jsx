import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import './Home.css';

function Home({ setPage }) {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleUsernameChange = (newUsername) => {
        setUsername(newUsername);
    };

    return (
        <div className="container" id="container"  >
            <a className="skip-link" tabIndex="0" href="#container">
                Skip to main content
            </a>
            

            <h2 className="text-title">Level up with the largest AI & ML community</h2>
            
            <p className="text-content">
                Join over 17M+ machine learners to share, stress test, and stay up-to-date on all the latest ML techniques and technologies. Discover a huge repository of community-published models, data & code for your next project.&nbsp;&nbsp;
            </p>
            
            {/* {formSubmitted && (
                <h4 className="text-title">
                    Thank you for subscribing, {username}! Your subscription request has been successfully submitted.
                    You'll now receive updates and notifications at {email}. Welcome to our community!
                </h4>
            )} */}
            {/* <h4 className="text-title"> "Thank you for subscribing, {username}! Your subscription request has been successfully submitted. You'll now receive updates and notifications at {email}. Welcome to our community!" </h4> */}
            {/* <h3 className="text-content"></h3> */}
            <Button type="button" visual="button" onClick={toggleModal}  >
                {showModal ? "Close " : "Request Subscription"}
            </Button>
            {showModal && (
                <Modal
                    open={showModal}
                    onClose={toggleModal}
                    setUsername={setUsername}
                    setEmail={setEmail}
                    setFormSubmitted={setFormSubmitted}
                    handleUsernameChange={handleUsernameChange} 
                />
            )}
            
           
            
            

            <h2 className="text-title2">Who's on LearnML Junction</h2>
            <div className="container2">
                <div className="text-content2">
                    <h3>Learners:</h3>
                    <p>
                        Dive into ML junction courses & forums.
                    </p>
                    <h5>KEY FEATURES</h5>
                    <p>
                        Beginner
                    </p>
                    <p>
                        Practical courses
                    </p>
                    <p>
                        Public datasets
                    </p>
                </div>
                <div className="text-content2">
                    <h3>Developers:</h3>
                    <p>
                        Levage ML's models, notebooks & datasets.
                    </p>
                    <h5>KEY FEATURES</h5>
                    <p>
                        Open-sourced models
                    </p>
                    <p>
                        Competition solution write-ups
                    </p>
                    <p>
                        Public notebooks
                    </p>
                </div>
                <div className="text-content2">
                    <h3>Researchers:</h3>
                    <p>
                        Advance ML with our pre-trained model hub & research papers.
                    </p>
                    <h5>KEY FEATURES</h5>
                    <p>
                        ML competition hosting
                    </p>
                    <p>
                        Model training datasets
                    </p>
                    <p>
                       Open-sourced models
                    </p>
                </div>
            </div>
           
            
            <h2 className="text-title">Tackle your next project with LearnML Junction</h2>
            <p className="text-content">
                On LearnML, you'll discover cutting-edge techniques and best practices to enhance the effectiveness of your machine learning solutions.
                With LearnML Junction, you have a reliable partner to guide you through the intricate landscape of machine learning algorithms and methodologies.
                Elevate your machine learning prowess with LearnML's comprehensive tutorials, case studies, and hands-on exercises.
                LearnML Junction empowers you to stay ahead of the curve in the fast-evolving field of artificial intelligence and data science.
                Unleash the full potential of your next ML project by leveraging the expertise and resources available on LearnML Junction.
                Whether you're a beginner or an experienced practitioner, LearnML Junction offers tailored content to meet your unique learning needs.
            </p>
        </div>
    );
}

export default Home;
