import React from 'react';
import './Setting.css';

function Setting({ currentTheme, onThemeChange }) {
  const handleThemeChange = (e) => {
    const theme = e.target.value;
    onThemeChange(theme);
  };

  return (
    <div className="settings">
      <label htmlFor="theme-select">Select Theme:</label>
      <select id="theme-select" value={currentTheme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default Setting;
