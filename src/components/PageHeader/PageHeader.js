import PropTypes from 'prop-types';
import PageHeaderStyle from './PageHeader.scss';
import Breadcrumbs from '../Breadcrumbs';

const PageHeader = ({ breadcrumbs, title, background }) => {
	
	return (
		<div className="PageHeader" style={{backgroundColor: background || '#ffffff'}}>
			<Breadcrumbs link={breadcrumbs}/>
			<h1>{title}</h1>
		</div>
	);
};

PageHeader.propTypes = {
    background: PropTypes.string,
    breadcrumbs: PropTypes.string,
    title: PropTypes.string
};

export default PageHeader;