
import React from 'react';
import './Course.css';
import Button from './Button';


function Example({setPage}) {

    const handleClick = () => {
       
        const path = 'Certificates';
        setPage(path);
        
    };

    return (
        <div  id="Course_skip_link" >
            

             <h2>Courses</h2>
             <a className="skip-link3" tabIndex="0" href="#Course_skip_link">
                Skip to main content
            </a>
             <p>
                We pare down complex topics to their key practical components, so you gain usable skills in a few hours (instead of weeks or months). The courses are provided at no cost to you, and you can now earn certificates.{' '}
                <Button type="button" onClick={handleClick} >
                    Learn more
                </Button>
                .
            </p>
            <div className="course">
                <img className="card__pic" src="../image/ml.jpg" alt="Black tablet with white robot toy" />
                <div className="card__content">
                    <h2 className="card__title1">Intro Deep Learning</h2>
                    <p className="card__text">Use TensorFlow and Keras to build and train neural networks for structured data.</p>
                </div>
            </div>

            <div className="course2">
                <img className="card__pic2" src="../image/ml2.jpg" alt="Red wooden table with black and white robot toys" />
                <div className="card__content">
                    <h2 className="card__title2">Computer Vision</h2>
                    <p className="card__text2">Build convolutional neural networks with TensorFlow and Keras</p>
                </div>
            </div>

            <div className="course">
                <img className="card__pic2" src="../image/ml4.jpg" alt="Round black and brown analog clock" />
                <div className="card__content">
                    <h2 className="card__title2">Time Series</h2>
                    <p className="card__text2">Apply machine learning to real-world forecasting tasks</p>
                </div>
            </div>

            <div className="course2">
                <img className="card__pic2" src="../image/ml5.jpg" alt="Laptop screen performance analysis graph" />
                <div className="card__content">
                    <h2 className="card__title2">Data Cleaning</h2>
                    <p className="card__text2">Master efficient workflows for cleaning real-world, messy data.</p>
                </div>
            </div>

            <div className="course">
                <img className="card__pic2" src="../image/ml6.jpg" alt="Close-up of stainless steel robot toy" />
                <div className="card__content">
                    <h2 className="card__title2">Intro to AI Ethics</h2>
                    <p className="card__text2">Explore practical tools to guide the moral design of AI systems</p>
                </div>
            </div>

            <div className="course2">
                <img className="card__pic2" src="../image/ml7.jpg" alt="A robot standing next to a wall covered in stickers" />
                <div className="card__content">
                    <h2 className="card__title2">Machine Learning Explainability</h2>
                    <p className="card__text2">Extract human-understandable insights from any model</p>
                </div>
            </div>
        </div>
    );
}

export default Example;
