import React from 'react';
import './Cert.css';

function Cert() {
  return (
    <div className="cert__container" id="cert__container">
      <h1 className="cert__title">LearnML Course Certificates</h1>
      <a className="skip-link8" tabIndex="0" href="#cert__container">
                Skip to main content
      </a>
      <p className="cert__description">For every course you finish, you'll earn a completion certificate! These certificates celebrate the progress that you have made in your learning journey on LearnML</p>
      <img
        src="../image/cert.jpg"
        alt="Logo"
        className="cert__logo"
      />
      <div className="cert__info">
        <h3 className="cert__info-title">Where can I find my certificates?</h3>
        <p className="cert__info-description">After you complete a course, navigate to LearnML Junction Learn Courses homepage. You should see two tabs: Active and Completed. Click on Completed. Every course that you have completed should now appear in the course listing, along with a View Certificate button that navigates to your certificate.</p>
      </div>
      <div className="cert__info">
        <h3 className="cert__info-title">How can I share my certificate with my social network?</h3>
        <p className="cert__info-description">You can easily share your certificate with your Twitter or LinkedIn followers by clicking on the social sharing links on your certificate page. This is a great way to showcase your new skills!</p>
      </div>
      <div className="cert__info">
        <h3 className="cert__info-title">After completing a course, what else can I do?</h3>
        <p className="cert__info-description">After completing a course, it's time to start building a portfolio of your own projects. LearnML Junction Learn Courses are designed to quickly introduce you to essential topics and orient you to the LearnML Junction platform, so that you can then use what you've learned to build your own projects on LearnML Junction. Begin by selecting a LearnML Junction Competition or Dataset that interests you. For inspiration, check out Notebooks that other users have written.</p>
      </div>
    </div>
  );
}

export default Cert;
