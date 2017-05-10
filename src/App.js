import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import GridPage from './components/GridPage';
import FormPage from './components/FormPage';

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
              <p><Link to={`/GridPage`}>GridPage</Link></p>
              <p><Link to={`/FormPage`}>FormPage</Link></p>
            </div>
          )} />
          <Route path="/gridpage" render={({ match }) => <GridPage />} />
          <Route path="/formpage" render={({ match }) => <FormPage />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
