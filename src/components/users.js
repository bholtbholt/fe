import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';

class User extends Component {
  onClickLogin = this.onClickLogin.bind(this);
  onClickLogin(user) {
    this.props.action.login(user)
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
      <div className="User">
        <h2>Pick User</h2>
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
    user: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
