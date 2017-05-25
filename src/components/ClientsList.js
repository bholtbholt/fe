import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ClientsListActions from '../reducers/ClientsList';
import * as ClientsCurrentActions from '../reducers/ClientsSetCurrent';

class Clients extends Component {
  onClickSetCurrentClient = this.onClickSetCurrentClient.bind(this);
  onClickSetCurrentClient(clientObject) {
    this.props.action.setCurrentClient(clientObject)
  }

  componentDidMount() {
    this.props.action.fetchClients(this.props.user.id)
  }

  render() {
    return (
      <div className="Clients">
        <h2>Clients</h2>
        {
          this.props.clients.map(client =>
            <button
              onClick={()=>this.onClickSetCurrentClient(client)}
              key={client.id}>
              {client.name}
            </button>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state, prop) {
  return {
    clients: state.clients,
    user: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({ ...ClientsListActions, ...ClientsCurrentActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
