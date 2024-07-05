import { useState } from 'react';
import './App.css';

import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';
import Setting from './Setting';

function App() {
  const [theme, setTheme] = useState('light');
  const [page, setPage] = useState('Introduction');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  document.title = 'LearnML Junction';

  return (
    <div className={`app ${theme}`}>
      <Header setPage={setPage}  />
      <Setting currentTheme={theme} onThemeChange={handleThemeChange} />
     
      <MainArea page={page} setPage={setPage} />
      <Footer page={page} setPage={setPage} />
      
      
    </div>
  );
}

export default App;
