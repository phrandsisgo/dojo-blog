import './App.css';
import React from 'react';
import Navbar from './Navbar';

function App() {
  const title ="Welcome to the new blog";
  const likes = 50;
  const linguatechLink ="https://linguatech.ch/"
  return (
    <div className="App">
        <Navbar />
        <div className="content">
          <h1>App Component</h1>
          <h2>{title}</h2>
          <p>This App has been liked {likes} times</p>
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
