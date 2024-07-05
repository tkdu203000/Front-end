
import React from 'react';
import Home from './Home';
import About from './About';
import Course from './Course';
import Setting from './Setting';
import Team from './Team';
import Contact from './Contact';
import Content from './Content';    
import Cert from './Cert';

function MainArea( {page, setPage}) {
    // const handleClick = (e) => {
    //   setPage('<Home/>');
    // };
    return (
        <main>
            {/* Check if page is set to 'Home' (or 'Introduction') and render the Home component */}
            {page === 'Introduction' && <Home setPage={setPage} />}
            {/* Check if page is set to 'About Machine Learning Algorithms' and render the About component */}
            {page === 'About Machine Learning Algorithms' && <About setPage={setPage} />}
            {/* Check if page is set to 'Courses' and render the Course component */}
            {page === 'Courses' && <Course setPage={setPage} />}
            {/* Check if page is set to 'Terms · Privacy Policy' and render the Term component */}
            {page === 'Setting' && <Setting setPage={setPage} />}
            {/* Check if page is set to 'Home' (or 'Introduction') and render the Home component */}
            {page === 'Our Team' && <Team setPage={setPage} />}
            {/* Check if page is set to 'Contact Us' and render the Contact component */}
            {page === 'Contact Us' && <Contact setPage={setPage} />}
            {/* Check if page is set to 'Contents' and render the Content component */}
            {page === 'Contents' && <Content setPage={setPage} />}
            {/* Check if page is set to 'Certificates' and render the Cert component */}
            {page === 'Certificates' && <Cert setPage={setPage} />}
            


        </main>
    );
}

export default MainArea;
