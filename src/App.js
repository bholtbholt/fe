import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './components/Users';
import ClientsList from './components/ClientsList';

class App extends Component {
  render() {
    if (this.props.user.id === 0) {
      return (
        <div className="App">
          <User />
        </div>
      );
    } else {
      return (
        <div className="App">
          <ClientsList />
        </div>
      );
    }
  }
}

function mapStateToProps(state, prop) {
  return {
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(App);
