import React from 'react';
import Icon from '../../atoms/Icon';
import { faReact } from '@fortawesome/free-brands-svg-icons';

class Awards extends React.Component {
  render() {
    return (
      <section className='mh-pricing' id='mh-pricing'>
        <div className=''>
          <div className='container'>
            <div className='row section-separator'>
              <div
                className='col-sm-12 section-title wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.2s'
              >
                <h3>Awards</h3>
              </div>
              <div className='col-sm-12 col-md-6'>
                <div
                  className='mh-pricing dark-bg shadow-2 wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.3s'
                >
                  <i className='fa fa-calendar' />
                  <h4>The Best Operator Data Center</h4>
                  <h5>2019</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-6'>
                <div
                  className='mh-pricing dark-bg shadow-2 wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.3s'
                >
                  <i className='fa fa-calendar' />
                  <h4>The Best Leader</h4>
                  <h5>2023</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Awards;
