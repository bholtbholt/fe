import { User } from '../commonTypes';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../reducers/Login';

export interface Props {
  user: User;
  action: typeof login;
}

export interface State {
  allUsers: User[];
}

class Login extends React.Component<Props, State> {
  state = {
    allUsers: []
  };

  public componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ allUsers: users }));
  }

  public render() {
    return (
      <div className="Login">
        <h2>Login as:</h2>
        {
          this.state.allUsers.map(user =>
            <button
              onClick={() => this.onClickLogin(user)}
              key={user.id}
            >
              {user.name}
            </button>
          )
        }
      </div>
    );
  }

  // onClickLogin = this.onClickLogin.bind(this);
  private onClickLogin = (userObject) => {
    this.props.action(userObject);
  }
}

function mapStateToProps(state, prop) {
  return {
    user: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(login, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
