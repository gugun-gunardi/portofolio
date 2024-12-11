import React from 'react';
import Icon from '../../atoms/Icon';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import aboutImg from '../../../assets/images/ab-img.png';

class Skills extends React.Component {
  render() {
    return (
      <section className='mh-about' id='mh-about'>
        <div className='container'>
          <div className='row section-separator'>
            <div className='col-sm-12 col-md-6'>
              <div
                className='mh-about-img shadow-2 wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.4s'
              >
                <img src={aboutImg} alt='' className='img-fluid' />
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='mh-about-inner'>
                <h2
                  className='wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.1s'
                >
                  About Me
                </h2>
                <p
                  className='wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.2s'
                >
                  Hello, I’m a Gugun, web-developer based on Jakarta. I have
                  rich experience in web site aplication &amp; building and
                  customization. Also I am good at
                </p>
                <div
                  className='mh-about-tag wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.3s'
                >
                  <ul>
                    <li>
                      <span>php</span>
                    </li>
                    <li>
                      <span>html</span>
                    </li>
                    <li>
                      <span>css</span>
                    </li>
                    <li>
                      <span>php</span>
                    </li>
                    <li>
                      <span>Node Js</span>
                    </li>
                    <li>
                      <span>React</span>
                    </li>
                    <li>
                      <span>Javascript</span>
                    </li>
                    <li>
                      <span>Mysql</span>
                    </li>
                    <li>
                      <span>Mongo db</span>
                    </li>
                    <li>
                      <span>Mssql</span>
                    </li>
                  </ul>
                </div>
                <a
                  href='#'
                  className='btn btn-fill wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.4s'
                >
                  Downlaod CV <Icon icon={faDownload} size='1x' color='#fff' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
