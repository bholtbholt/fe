import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav'

import Users from './components/Users';
import ClientsList from './components/ClientsList';
import Pages from './components/Pages';

class App extends Component {
  renderLoginPrompt() {
    if (this.props.user.id === 0) {
      return <Users />
    }
  }

  render() {
    return (
      <div className="App">
        { this.renderLoginPrompt() }
        <Nav />
        <Switch>
          <Route path='/pages' component={Pages}/>
          <Route path='/client-list' component={ClientsList}/>
          <Route path='/users' component={Users}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state, prop) {
  return {
    user: state.currentUser,
    currentClient: state.currentClient
  }
}

export default withRouter(connect(mapStateToProps)(App));
