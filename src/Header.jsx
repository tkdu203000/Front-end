import './Header.css';
import React from 'react';
import GlobalNav from './GlobalNav';


function Header({ setPage }) {

    const handleClick = () => {
        setPage('Introduction');
    }
    return (
        <header className="header" id ="main" >
             
           

            
            <img
                src="/image/mlhome.jpg"
                alt="Logo"
                className="header__logo"
                onClick={handleClick}
            />



            <h1 className="header__title"  onClick={handleClick} >
                LearnML Junction
            </h1>

            
            <GlobalNav className="header__nav" setPage={setPage} />
        </header>
    );
}

export default Header;
