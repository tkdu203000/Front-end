import { useState } from 'react';
import './GlobalNav.css';
import menu from './menu';

function GlobalNav({ className, setPage }) {
    const [showSubMenu, setShowSubMenu] = useState(null);

    const toggleSubMenu = (index) => {
        setShowSubMenu(showSubMenu === index ? null : index);
    };

    

    const handleMenuItemClick = (e, item, index) => {
        e.preventDefault();
        setPage(item.name);
        toggleSubMenu(index);
    };

    

    const handleKeyOpen = (index) => {
        setShowSubMenu(index);
    };
   
    const handleKeyDown = () => {
        setShowSubMenu(null);
    };



    const handleMouseEnter = (index) => {
        setShowSubMenu(index);
    };

    const handleMouseLeave = () => {
        setShowSubMenu(null);
    };



    return (
        <nav className={`global-nav ${className}` }>
            <ul className="global-nav__list"  >
                {menu.map((item, index) => (
                    <li key={item.name} className="global-nav__item"  onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={() => handleKeyOpen(index)} >
                        <a
                            className="global-nav__link" tabIndex="0"
                            href={item.path}
                            // onClick={(e) => handleMenuItemClick(e, item)}
                        >
                            {item.name}
                        </a>
                        {item.submenu && showSubMenu === index && (
                            <ul className="global-nav__submenu ">
                                {item.submenu.map((subItem) => (
                                    <li key={subItem.name} className="global-nav__submenu-item">
                                        <a
                                            className="global-nav__submenu-link"
                                            href={subItem.path}
                                            onClick={(e) => handleMenuItemClick(e, subItem, index)}
                                        >
                                            {subItem.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default GlobalNav;
