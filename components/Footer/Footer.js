import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import PhoneNumber from '../PhoneNumber';
import CellNumber from '../CellNumber';
import FaxNumber from '../FaxNumber';
import Address from '../Address';
import './Footer.scss';

import Menu from '../Menu';

const Footer = (props) => {
    const { theme }  = props;

    return (
        <div className="Footer">
            <div className="container">
                <div className="top-level ">
                    <div className="rocki-logo">
                        <Logo size={'big'} />
                    </div>
                    <div className="more-info">
                        <div className="conatct-info">
                            <PhoneNumber number={'08-9461555'}/>
                            <CellNumber number={'054-7272554'}/>
                            <FaxNumber number={'08-9361574'}></FaxNumber>
                            <Address url={'היצירה 2 א.ת. קרית רכטמן רחובות'}></Address>
                        </div>
                    </div>
                    <div className="menu-links-wrapper">
                        <div className="menu-links">
                            <Menu direction={'column'}/>
                        </div>
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
