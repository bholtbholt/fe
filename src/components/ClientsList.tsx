import { User, Client } from '../commonTypes';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchClients } from '../reducers/ClientsList';
import { setCurrentClient } from '../reducers/ClientsSetCurrent';

export interface Props {
  clients: Client[];
  user: User;
  action: {
    fetchClients: typeof fetchClients;
    setCurrentClient: typeof setCurrentClient;
  };
}

class Clients extends React.Component<Props, null> {
  public componentDidMount() {
    this.props.action.fetchClients(this.props.user.id);
  }

  public render() {
    return (
      <div className="Clients">
        <h2>Clients</h2>
        {
          this.props.clients.map(client =>
            <button
              onClick={() => this.onClickSetCurrentClient(client)}
              key={client.id}
            >
              {client.name}
            </button>
          )
        }
      </div>
    );
  }

  private onClickSetCurrentClient = (clientObject) => {
    this.props.action.setCurrentClient(clientObject);
  }
}

function mapStateToProps(state, prop) {
  return {
    clients: state.clients,
    user: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({ fetchClients, setCurrentClient }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
