import './Footer.css';
import React from 'react';
import footerMenu from './footerMenu';

function Footer({ className, setPage }) {
    const listHtml = footerMenu.map(item => (
        <li key={item.name} className="global-footer__item">
            <a
                className="global-footer__link"
                href={item.path}
                onClick={(e) => {
                    e.preventDefault();
                    setPage(item.name);
                }}
            >
                {item.name}
            </a>
        </li>
    ));

    return (
        <footer className={`global-footer ${className}` }>
            <ul className="global-footer__list">
                {listHtml}
            </ul>
        </footer>
    );
}

export default Footer;
