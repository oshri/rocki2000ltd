import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../MenuLink';

import './StaticMenu.scss';

const StaticMenu = (props) => {
  const { direction, theme } = props;
  

  const style = {
    flexDirection: direction ? direction : 'row'
  };

  return (
    <div className="StaticMenu" style={style}>
     <MenuLink href='/about' theme={theme}>אודות</MenuLink>
     <MenuLink href='/' theme={theme}>ראשי</MenuLink>
    </div>
  );
};

StaticMenu.propTypes = {
  direction: PropTypes.string,
  theme: PropTypes.string
};

export default StaticMenu;