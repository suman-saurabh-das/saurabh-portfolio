import './App.css';
import React, {useState}  from 'react';
import Navbar from './components/Navbar';
import EdgeMenu from './components/EdgeMenu';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <EdgeMenu />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
