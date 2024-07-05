import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    subject: '',
    inquiry: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    subject: '',
    inquiry: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'name') {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: value === '' ? 'Name is required' : '',
      }));
    }

    if (name === 'email') {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: value === '' ? 'Email is required' : '',
      }));
    }

    if (name === 'confirmEmail') {
      setErrors(prevErrors => ({
        ...prevErrors,
        confirmEmail: value !== formData.email ? 'Email addresses do not match' : '',
      }));
    }

    if (name === 'subject') {
      setErrors(prevErrors => ({
        ...prevErrors,
        subject: value === '' ? 'Subject is required' : '',
      }));
    }

    if (name === 'inquiry') {
      setErrors(prevErrors => ({
        ...prevErrors,
        inquiry: value === '' ? 'Inquiry is required' : '',
      }));
    }

    if (name === 'message') {
      setErrors(prevErrors => ({
        ...prevErrors,
        message: value === '' ? 'Message is required' : '',
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setFormData(prevState => ({
        ...prevState,
        confirmEmail: formData.email
      }));
      setErrors(prevErrors => ({
        ...prevErrors,
        confirmEmail: '' // Clear any previous error
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        confirmEmail: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid Email address is required';
    }

    if (!formData.confirmEmail) {
      newErrors.confirmEmail = 'Confirm Email addresses is required';
    }

    if (formData.confirmEmail !== formData.email) {
      newErrors.confirmEmail = 'Email addresses do not match';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.inquiry) {
      newErrors.inquiry = 'Inquiry is required';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form has no errors, set submitted to true
      setSubmitted(true);
      console.log('Form data:', formData);
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div className="contact-form" id="contact-form">
      <h2>CONTACT US</h2>
      <a className="skip-link6" tabIndex="0" href="#contact-form">
        Skip to main content
      </a>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:<span className="required-field">*</span></label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:<span className="required-field">*</span></label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group checkbox-container">
          <label htmlFor="confirmCheckbox" className='confirmCheckbox'>Confirm address same as email address</label>
          <input type="checkbox" id="confirmCheckbox" onChange={handleCheckboxChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirm Email Address:<span className="required-field">*</span></label>
          <input type="text" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} />
          {errors.confirmEmail && <p className="error-message">{errors.confirmEmail}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:<span className="required-field">*</span></label>
          <select id="subject" className='subject' name="subject" value={formData.subject} onChange={handleChange}>
            <option value="">Select Subject</option>
            <option value="Account/Login">Account/Login</option>
            <option value="Privacy and Security">Privacy and Security</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className="error-message">{errors.subject}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Inquiry:<span className="required-field">*</span></label>
          <select id="inquiry" className='inquiry' name="inquiry" value={formData.inquiry} onChange={handleChange}>
            <option value="">Select Inquiry</option>
            {formData.subject === 'Account/Login' && (
              <>
                <option value="I cannot activate my account">I cannot activate my account</option>
                <option value="I'd like to change my...">I'd like to change my...</option>
                <option value="I have received a warning">I have received a warning</option>
              </>
            )}
            {formData.subject === 'Privacy and Security' && (
              <>
                <option value="I want you to delete my personal data">I want you to delete my personal data</option>
                <option value="I want to delete content I've created on LearnML">I want to delete content I've created on LearnML</option>
                <option value="I want you to delete content that someone else created">I want you to delete content that someone else created</option>
              </>
            )}
            {formData.subject === 'Other' && (
              <>
                <option value="I have a media/press/appearance inquiry">I have a media/press/appearance inquiry</option>
                <option value="LearnML Logos and Brand Guidelines">LearnML Logos and Brand Guidelines</option>
                <option value="Feature Request/Enhancement">Feature Request/Enhancement</option>
              </>
            )}
          </select>
          {errors.inquiry && <p className="error-message">{errors.inquiry}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:<span className="required-field">*</span></label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        {Object.values(errors).some(error => error !== '') && <p className="error-message">Please fill out all required fields(*) correctly.</p>}
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="submitted-message">
          <p>Thank you for your inquiry, {formData.name}!</p>
          <p>We will get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
