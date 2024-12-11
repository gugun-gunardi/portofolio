import React from 'react';
import List from '../../atoms/List';

class Interests extends React.Component {
  render() {
    const professionalInterests = [
      'Web Development',
      'Artificial Intelligence',
      'Data Science',
      'User Experience (UX) Design',
      'Cloud Computing',
    ];

    const hobby = ['Photography', 'Traveling', 'Reading', 'Public Speaking'];
    return (
      <section
        className='mh-experince image-bg featured-img-one'
        id='mh-experience'
      >
        <div className='img-color-overlay'>
          <div className='container'>
            <div className='row section-separator'>
              <div className='col-sm-12 col-md-12'>
                <div className='mh-work'>
                  <h3>Interests</h3>
                  <div className='mh-experience-deatils'>
                    <div
                      className='mh-work-item dark-bg wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay='0.4s'
                    >
                      <h4>Pengembangan Diri</h4>
                      <List items={professionalInterests} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-md-12 mt-5'>
                <div className='mh-work'>
                  <div className='mh-experience-deatils'>
                    <div
                      className='mh-work-item dark-bg wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay='0.4s'
                    >
                      <h4>Non Teknis</h4>
                      <List items={hobby} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Interests;
