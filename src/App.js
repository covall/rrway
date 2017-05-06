import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to={"/"}>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
          </Link>
          <Route exact path="/" render={() => (
            <div>
              <h3>This is basic routing</h3>
              <p><Link to={`/FirstPage`}>FirstPage</Link></p>
              <p><Link to={`/SecondPage`}>SecondPage</Link></p>
            </div>
          )} />
          <Route path="/firstpage" render={({ match }) => <div>This is FIRST page</div>} />
          <Route path="/secondpage" render={({ match }) => <div>This is SECOND page</div>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
