import React, { Component } from 'react';
import User from './components/users';
import Pages from './components/pages';
import Clients from './components/clients';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User />
        <Pages />
        <Clients />
      </div>
    );
  }
}

export default App;
