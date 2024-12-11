import React from 'react';
import EducationItem from '../../molecules/EducationItem';

class EducationList extends React.Component {
  render() {
    const { educations } = this.props;
    return (
      <div className='mh-education'>
        <h3
          className='wow fadeInUp'
          data-wow-duration='0.8s'
          data-wow-delay='0.2s'
        >
          Education
        </h3>
        <div className='mh-education-deatils'>
          {educations.map((education, index) => (
            <EducationItem
              key={index}
              title={education.title}
              institution={education.institution}
              year={education.year}
              description={education.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EducationList;
