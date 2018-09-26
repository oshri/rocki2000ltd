import React from 'react';
import Link from 'next/link'

import './Menu.scss';

const Menu = (props) => {
  const { direction } = props;

  const style = {
    flexDirection: direction ? direction : 'row'
  };

  return (
    <div className="menu-wrap" style={style}>
      <Link href="/about">
        <a>אודות</a>
      </Link>{' '}
      <Link href="/">
        <a>ראשי</a>
      </Link>{' '}
    </div>
  );
};

export default Menu;