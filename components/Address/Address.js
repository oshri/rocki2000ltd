import PropTypes from 'prop-types';
import { HomeOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import AddressStyles from './Address.scss';

const Address = ({theme, url}) => {

	return (
		<div className="Address">
            <HomeOutlined>address</HomeOutlined>
            <span>{url}</span>
        </div>
	);
};

Address.propTypes = {
    number: PropTypes.string,
    url: PropTypes.string
};

export default Address;