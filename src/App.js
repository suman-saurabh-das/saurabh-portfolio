import './App.css';
import React, {useState}  from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import EdgeMenu from './components/EdgeMenu';
import Experience from './components/Experience';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <About />
      {/* <EdgeMenu /> */}
      {/* <Experience /> */}
    </div>
  );
}

export default App;
