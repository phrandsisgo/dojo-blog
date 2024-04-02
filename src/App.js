import './App.css';

function App() {
  const title ="Welcome to the new blog";
  const likes = 50;
  return (
    <div className="App">
        <div className="content">
          <h1>App Component</h1>
          <p>This is the content of the app component</p>
        </div>
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
