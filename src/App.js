import React, { Component } from 'react';
import User from './components/users';
import Pages from './components/pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User />
        <Pages />
      </div>
    );
  }
}

export default App;
