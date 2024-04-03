import './my.css'
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title ="Welcome to the new blog";
  const likes = 50;
  const linguatechLink ="https://linguatech.ch/"
  return (
    <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
        <a href={linguatechLink}>linguatech</a>
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
