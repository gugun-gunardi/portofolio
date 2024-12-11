import React from 'react';
import { Link } from 'react-router-dom';

class NavLink extends React.Component {
  render() {
    return <Link to={this.props.to}>{this.props.label}</Link>;
  }
}

export default NavLink;
