import React, { useState } from 'react';
import Button from './Button';
import './Modal.css';

function Modal({ open, onClose, setUsername, setEmail }) {
    const [newUsername, setNewUsername] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'newUsername') {
            setNewUsername(value);
            setError(value === '' ? 'Please fill in name' : '');
        } else if (name === 'emailInput') {
            setEmailInput(value);
            setError2(value === '' || !/\S+@\S+\.\S+/.test(value) ? 'Invalid email format' : '');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newUsername) {
            setError('Please fill in name');
        } else {
            setError('');
        }

        if (!emailInput) {
            setError2('Please fill in email');
        } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
            setError2('Invalid email format');
        } else {
            setError2('');
        }

        if (newUsername && emailInput && /\S+@\S+\.\S+/.test(emailInput)) {
            console.log('Your name is:', newUsername);
            console.log('Your email is:', emailInput);
            setSubmitted(true);
            setUsername(newUsername);
            setEmail(emailInput);
        }
    };


    const handleClose = () => {
        onClose();
    };

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    };

    return (
        <>
            <dialog open={open} className="modal-dialog">
                <div>
                    <h2>Request Subscription</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name<span className="required">*</span>:&nbsp;
                            <input type="text" name="newUsername" value={newUsername} onChange={handleChange} />
                        </label>
                        {error && <p className="error-name">{error}</p>}

                        
                        <label>
                            Email<span className="required">*</span>:&nbsp;
                            <input type="text" name="emailInput" value={emailInput} onChange={handleChange} />
                        </label>
                        {error2 && <p className="error-email">{error2}</p>}

                        
                        <p className="required-info">Please fill out all required fields(*) correctly.</p>
                        <div className="button-container">
                            <Button type="submit" visual="button">Submit</Button>
                            <Button visual="button" onClick={handleClose}>Close</Button>
                        </div>
                    </form>
                </div>
            </dialog>
            {submitted && (
                <p className='sub_status'>Thank you for subscribing, {newUsername}! Your subscription request has been successfully submitted. You'll now receive updates and notifications at {emailInput}. Welcome to our community!</p>
            )}
        </>
    );
}

export default Modal;
