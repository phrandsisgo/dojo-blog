import './my.css'
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';


function App() {
  const title ="Welcome to the new blog";
  const likes = 50;
  const linguatechLink ="https://linguatech.ch/"
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
            </Switch>
          </div>
          <a href={linguatechLink}>linguatech</a>

      </div>
    </Router>
  );
}

export default App;
