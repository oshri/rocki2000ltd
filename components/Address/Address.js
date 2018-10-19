import PropTypes from 'prop-types';
import AddressStyles from './Address.scss';

const Address = ({theme, url}) => {

	return (
		<div className="Address">
            <span>{url}</span>
        </div>
	);
};

Address.propTypes = {
    number: PropTypes.string,
    url: PropTypes.string
};

export default Address;