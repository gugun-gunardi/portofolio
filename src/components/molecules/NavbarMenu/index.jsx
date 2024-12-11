import React from 'react';
import NavLink from '../../atoms/Navlink';

class NavbarMenu extends React.Component {
  render() {
    return (
      <ul className='navbar-nav mr-auto ml-auto'>
        {this.props.menuItems.map((item, index) => (
          <li className='nav-item ' key={index}>
            <NavLink to={item.to} label={item.label} />
          </li>
        ))}
      </ul>
    );
  }
}

export default NavbarMenu;
