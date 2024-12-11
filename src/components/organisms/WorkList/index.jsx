import React, { Component } from 'react';
import WorkItem from '../../molecules/WorkItem';

class WorkList extends Component {
  render() {
    const { works } = this.props;
    return (
      <div className='mh-work'>
        <h3>Work Experience</h3>
        <div className='mh-experience-deatils'>
          {works.map((work, index) => (
            <WorkItem
              key={index}
              title={work.title}
              company={work.company}
              year={work.year}
              responsibilities={work.responsibilities}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default WorkList;
