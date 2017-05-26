import * as React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component<{}, null> {
  public render() {
    return (
      <ul className="Nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li>Overlays</li>
        <li>Sticky Footers</li>
        <li>Domains</li>
        <li>Users</li>
        <li><Link to="/client-list">Clients</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );
  }
}

export default Nav;
