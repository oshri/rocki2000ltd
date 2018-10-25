import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './MobileMenu.scss';

export const MobileMenu = (props) => {
    return (
        <div className={'MobileMenu'}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={"feather feather-bar-chart"}
            >
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
            </svg>
        </div>
    );
}

MobileMenu.propTypes = {

};

export default MobileMenu;