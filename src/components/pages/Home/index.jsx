import React from 'react';
import Icon from '../../atoms/Icon';
import avatar from '../../../assets/images/avatar.jpeg';
import {
  faFacebookF,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  render() {
    return (
      <section className='mh-home image-bg home-2-img' id='mh-home'>
        <div className='img-foverlay img-color-overlay'>
          <div className='container'>
            <div className='row section-separator xs-column-reverse vertical-middle-content home-padding'>
              <div className='col-sm-6'>
                <div className='mh-header-info'>
                  <div
                    className='mh-promo wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay='0.1s'
                  >
                    <span>Hello I'm</span>
                  </div>
                  <h2
                    className='wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay='0.2s'
                  >
                    Gugun Gunardi
                  </h2>
                  <h4
                    className='wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay='0.3s'
                  >
                    Web Developer
                  </h4>
                  <ul>
                    <li
                      className='wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay='0.4s'
                    >
                      <Icon
                        icon={faEnvelope}
                        size='1x'
                        color='#fff'
                        style={{ gap: '10px' }}
                      ></Icon>
                      <a href='mailto:'> gugungunardi1@gmail.com</a>
                    </li>
                    <li
                      className='wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay='0.5s'
                    >
                      <Icon
                        icon={faPhone}
                        size='1x'
                        color='#fff'
                        style={{ gap: '10px' }}
                      ></Icon>
                      <a href='callto:'> +62 856 9560 6113</a>
                    </li>
                    <li
                      className='wow fadeInUp'
                      data-wow-duration='0.8s'
                      data-wow-delay='0.6s'
                    >
                      <Icon
                        icon={faHome}
                        size='1x'
                        color='#fff'
                        style={{ gap: '10px' }}
                      ></Icon>
                      <address> Depok, Jawa Barat</address>
                    </li>
                  </ul>
                  <ul
                    // className=' wow fadeInUp'
                    data-wow-duration='0.8s'
                    data-wow-delay='0.7s'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      maxWidth: '150px',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <li>
                      <a href='#'>
                        <Icon icon={faFacebookF} size='1x' color='#fff'></Icon>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <Icon icon={faInstagram} size='1x' color='#fff'></Icon>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <Icon icon={faGithub} size='1x' color='#fff'></Icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-sm-6'>
                <div
                  className='hero-img wow fadeInUp'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.6s'
                >
                  <div className='img-border'>
                    <img src={avatar} alt='' className='img-fluid' />
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

export default Home;
