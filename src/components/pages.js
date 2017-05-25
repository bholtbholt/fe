import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PagesActions from '../reducers/Pages';

class Pages extends Component {
  onClickFetchPages = this.onClickFetchPages.bind(this);
  onClickFetchPages(userId) {
    this.props.action.fetchPages(userId)
  }

  render() {
    return (
      <div className="Pages">
        <h2>Pages</h2>
        <button
          onClick={()=>this.onClickFetchPages(this.props.user.id)}>
          Fetch Pages
        </button>
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
    user: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(PagesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
