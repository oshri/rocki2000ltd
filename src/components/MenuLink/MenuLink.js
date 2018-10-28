import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import MenuLinkStyles from './MenuLink.scss';

const MenuLink = ({ children, router, href, theme, as }) => {
	
    const active = router.pathname === href ? 'active' : '';

	const handleClick = e => {
		e.preventDefault();
		if(as) {
			router.push(`${href}`, `${as}`, { shallow: true });
		} else {
			router.push(href);
		}
	};

	console.log(`${as ? as : href}`);

	return (
		<div className={`MenuLink ${active} ${theme}`}>
			<a href={href} onClick={handleClick} as={`${as ? as : href}`}>
				{children}
			</a>
			<div className={`activeItemIndicator ${theme}`}/>
		</div>
	);
};

MenuLink.propTypes = {
	href: PropTypes.string,
	as: PropTypes.string,
    theme: PropTypes.string
};

export default withRouter(MenuLink);