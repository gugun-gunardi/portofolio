import React, { Component } from 'react';
// import Heading from '../atoms/Heading';
// import Paragraph from '../atoms/Paragraph';

class EducationItem extends Component {
  render() {
    const { title, institution, year, description } = this.props;
    return (
      <div
        className='mh-education-item dark-bg wow fadeInUp'
        data-wow-duration='0.8s'
        data-wow-delay='0.3s'
      >
        <h4>
          Art &amp; {title} <a href='#'>{institution}</a>
        </h4>
        <div className='mh-eduyear'>{year}</div>
        <p>{description}</p>
      </div>
    );
  }
}

export default EducationItem;
