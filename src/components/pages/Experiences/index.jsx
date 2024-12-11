import React from 'react';
import EducationList from '../../organisms/EducationList';
import WorkList from '../../organisms/WorkList';

class Skills extends React.Component {
  render() {
    const educations = [
      {
        title: 'Teknik Informatika',
        institution: 'Universitas PGRI Indraprasta',
        year: '2012-2016',
        description: '',
      },
    ];

    const works = [
      {
        title: 'Engineer Contact Center',
        company: 'PLN Iconplus',
        year: '2019-sekarang',
        responsibilities: [
          'Menjaga System Contact Center',
          'Development System In House',
        ],
      },
      {
        title: 'Operator Data Center',
        company: 'PLN Iconplus',
        year: '2017-2019',
        responsibilities: [
          'Menyelesaikan Ticket dengan tools incident management',
          'Preventive maintenance',
        ],
      },
    ];
    return (
      <section
        className='mh-experince image-bg featured-img-one'
        id='mh-experience'
      >
        <div className='img-color-overlay'>
          <div className='container'>
            <div className='row section-separator'>
              <div className='col-sm-12 col-md-6'>
                <EducationList educations={educations} />
              </div>
              <div className='col-sm-12 col-md-6'>
                <WorkList works={works} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
