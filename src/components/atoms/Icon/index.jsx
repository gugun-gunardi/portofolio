import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Icon extends React.Component {
  render() {
    return (
      <FontAwesomeIcon
        icon={this.props.icon}
        style={{ color: this.props.color }}
      />
    );
  }
}

export default Icon;
