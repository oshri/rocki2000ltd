import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './Logo.scss';

const Logo = props => {
	const { size } = props;

	return (
		<div className="Logo">
			<Link href="/">
				{ size === 'big' ? (
					<img
						src="/static/logo-b.png"
						alt="logo"
						width="153px"
						height="153px"
					/>
				) : (
					<img
						src="/static/logo-s.png"
						alt="logo"
						width="57px"
						height="58px"
					/>
				)}
			</Link>
		</div>
	);
};

Logo.propTypes = {
	size: PropTypes.string
};

export default Logo;
