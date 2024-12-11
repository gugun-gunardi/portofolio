import React, { Component } from 'react';
import List from '../../atoms/List';

class WorkItem extends Component {
  render() {
    const { title, company, year, responsibilities } = this.props;
    return (
      <div
        className='mh-work-item dark-bg wow fadeInUp'
        data-wow-duration='0.8s'
        data-wow-delay='0.4s'
      >
        <h4>
          {title} <a href='#'>{company}</a>
        </h4>
        <div className='mh-eduyear'>{year}</div>
        <span>Responsibility :</span>
        <List items={responsibilities} className='work-responsibility' />
      </div>
    );
  }
}

export default WorkItem;
