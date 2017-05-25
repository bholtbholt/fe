import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PagesActions from '../reducers/Pages';

class Pages extends Component {
  componentDidMount() {
    this.props.action.fetchPages(this.props.currentClient.id)
  }

  render() {
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(PagesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
