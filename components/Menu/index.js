import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../MenuLink';

import './Menu.scss';

const Menu = (props) => {
  const { direction, theme } = props;
  

  const style = {
    flexDirection: direction ? direction : 'row'
  };

  return (
    <div className="menu-wrap" style={style}>
     <MenuLink href='/about' theme={theme}>אודות</MenuLink>
     <MenuLink href='/' theme={theme}>ראשי</MenuLink>
    </div>
  );
};

Menu.propTypes = {
  direction: PropTypes.string,
  theme: PropTypes.string
};

export default Menu;