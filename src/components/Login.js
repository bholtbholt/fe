import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../reducers/Login';

class Login extends Component {
  onClickLogin = this.onClickLogin.bind(this);
  onClickLogin(userObject) {
    this.props.action.login(userObject)
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
  }

  state = {
    users: []
  }

  render() {
    return (
      <div className="Login">
        <h2>Login as:</h2>
        {
          this.state.users.map(user =>
            <button
              onClick={()=>this.onClickLogin(user)}
              key={user.id}>
              {user.name}
            </button>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state, prop) {
  return {
    user: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
