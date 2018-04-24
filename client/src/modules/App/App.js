import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import AppWrapper from './AppWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={AppWrapper} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
