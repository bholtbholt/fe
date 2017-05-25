import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ClientsActions from '../actions/clients';

class Clients extends Component {
  onClickFetchClients = this.onClickFetchClients.bind(this);
  onClickFetchClients(userId) {
    this.props.action.fetchClients(userId)
  }

  render() {
    return (
      <div className="Clients">
        <h2>Clients</h2>
        <button
          onClick={()=>this.onClickFetchClients(this.props.user.id)}>
          Fetch Clients
        </button>
        {
          this.props.clients.map(client =>
            <div key={client.id}>{client.name}</div>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state, prop) {
  return {
    clients: state.clients,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(ClientsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
