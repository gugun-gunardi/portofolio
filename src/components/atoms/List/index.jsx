import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class List extends Component {
  render() {
    const { items, className } = this.props;
    return (
      <ul className={className}>
        {items.map((item, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={faCircle} /> {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
