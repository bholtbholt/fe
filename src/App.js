import React, { Component } from 'react';
import User from './components/users';
import Cart from './components/cart';
import Pages from './components/pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User />
        <Cart />
        <Pages />
      </div>
    );
  }
}

export default App;
