import PropTypes from 'prop-types';
import Link from 'next/link';
import MenuLinkStyles from './MenuLink.scss';

const MenuLink = ({ children, router, href, theme, as }) => {
	
	return (
		<div className={`MenuLink ${theme}`}>
			<Link 	prefetch
					href={href}
					as={`${as ? as : href}`}>
				<a>{children}</a>
			</Link>
			<div className={`activeItemIndicator ${theme}`}/>
		</div>
	);
};

MenuLink.propTypes = {
	href: PropTypes.string,
	as: PropTypes.string,
    theme: PropTypes.string
};

export default MenuLink;