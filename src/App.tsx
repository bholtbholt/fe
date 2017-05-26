import { User, Client } from './commonTypes';
import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav';

import Login from './components/Login';
import ClientsList from './components/ClientsList';
import Pages from './components/Pages';

export interface Props {
  user: User;
  currentClient: Client;
}

class App extends React.Component<Props, null> {
  public render() {
    return (
      <div className="App">
        {this.renderLoginPrompt()}
        <Nav />
        <Switch>
          <Route path="/pages" component={Pages} />
          <Route path="/client-list" component={ClientsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }

  private renderLoginPrompt() {
    if (this.props.user.id === 0) {
      return <Login />;
    }
  }
}

function mapStateToProps(state, prop) {
  return {
    user: state.currentUser,
    currentClient: state.currentClient
  };
}

export default withRouter(connect(mapStateToProps)(App));
