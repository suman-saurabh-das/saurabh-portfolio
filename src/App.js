import './App.css';
import React, {useState}  from 'react';
import Navbar from './components/Navbar';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </div>
  );
}

export default App;
