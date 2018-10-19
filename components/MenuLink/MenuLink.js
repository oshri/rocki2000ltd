import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import MenuLinkStyles from './MenuLink.scss';

const MenuLink = ({ children, router, href, theme }) => {
	
    const active = router.pathname === href ? 'active' : '';

	const handleClick = e => {
		e.preventDefault();
		router.push(href);
	};

	const themeColor = theme => {
		return theme === 'light' ? 'black' : 'white';
	};

	return (
		<div className={`MenuLink ${active}`} style={{color: themeColor(theme)}}>
			<a href={href} onClick={handleClick}>
				{children}
			</a>
			<div
				className="activeItemIndicator"
				style={{ background: themeColor(theme) }}
			/>
		</div>
	);
};

MenuLink.propTypes = {
    href: PropTypes.string,
    theme: PropTypes.string
};

export default withRouter(MenuLink);