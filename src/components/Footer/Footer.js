import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import PhoneNumber from '../PhoneNumber';
import CellNumber from '../CellNumber';
import FaxNumber from '../FaxNumber';
import Address from '../Address';
import './Footer.scss';

import StaticMenu from '../StaticMenu';

const Footer = (props) => {
    const { theme }  = props;

    return (
        <div className="Footer">
            <div className="container">
                <div className="top-level">
                    <div className="menu-links-wrapper">
                        <div className="menu-links">
                            <StaticMenu direction={'column'} theme={'light'}/>
                        </div>
                    </div>
                    <div className="more-info">

                    </div>
                    <div className="rocki-logo">
                        <Logo size={'big'} />
                    </div>
                </div>
                <div className="bottom-level">
                    <div className="copyright">
                        © כל הזכויות שמורות לי.רוקי תעשיות 2000 בע"מ (מרפדית רוקי)
                    </div>
                </div>
            </div>                 
        </div>
    );
}

Footer.propTypes = {
    theme: PropTypes.string
};

Footer.defaultProps = {
    theme: 'dark'
};

export default Footer;
