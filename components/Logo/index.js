import React from 'react';
import Link from 'next/link';

import './Logo.scss';

const Logo = (props) => {
    const { size } = props;

    return (
        <div className="Logo">
            Click{' '}
            <Link href="/">
                <img src="/static/logo.jpeg" alt="logo" width="100px" height="50px" />
            </Link>{' '}
        </div>
    );
};


export default Logo;