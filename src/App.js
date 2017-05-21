import React, { Component } from 'react';
import Cart from './components/cart';

class App extends Component {
  state = {
    users: [],
    pages: [],
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
    fetch('/pages?author=1')
      .then(res => res.json())
      .then(pages => this.setState({ pages: pages }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
        <h2>Pages</h2>
        {
          this.state.pages.map(page =>
            <div key={page.id}>{page.title}</div>
        )}
        <Cart />
      </div>
    );
  }
}

export default App;
