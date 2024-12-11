import React from 'react';
import NavbarMenu from '../../molecules/NavbarMenu';

class Navbar extends React.Component {
  render() {
    const menuItems = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/experiences', label: 'Experiences' },
      { to: '/skills', label: 'Skills' },
      { to: '/interests', label: 'Interests' },
      { to: '/awards', label: 'Awards' },
    ];
    return (
      <header
        className='black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav'
        id='mh-header'
      >
        <div className='overlay' />
        <div className='container'>
          <div className='row'>
            <nav className='navbar navbar-expand-lg mh-nav nav-btn'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon icon' />
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <NavbarMenu menuItems={menuItems} />
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
