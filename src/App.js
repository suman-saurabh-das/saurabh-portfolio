import './App.css';
import React, {useState}  from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EdgeMenu from './components/EdgeMenu';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home />
      <About />
      <EdgeMenu />
    </div>
  );
}

export default App;
