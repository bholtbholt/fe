import { Page, User, Client } from '../commonTypes';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPages } from '../reducers/Pages';

export interface Props {
  pages: Page[];
  user: User;
  currentClient: Client;
  action: typeof fetchPages;
}

class Pages extends React.Component<Props, null> {
  public componentDidMount() {
    this.props.action(this.props.currentClient.id);
  }

  public render() {
    return (
      <div className="Pages">
        <h2>Pages</h2>
        {
          this.props.pages.map(page =>
            <div key={page.id}>{page.title}</div>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state, prop) {
  return {
    pages: state.pages,
    user: state.currentUser,
    currentClient: state.currentClient
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(fetchPages, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
