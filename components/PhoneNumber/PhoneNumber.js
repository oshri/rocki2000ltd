import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { PhoneOutlined } from '@material-ui/icons';
// import Button from '@material-ui/core/Button';
import PhoneNumberStyles from './PhoneNumber.scss';

const PhoneNumber = ({theme, number}) => {


	return (
		<button href={`tel:${number}`} className="PhoneNumber">
            <PhoneOutlined>phone</PhoneOutlined>
            <span>{number}</span>
        </button>
	);
};

PhoneNumber.propTypes = {
    number: PropTypes.string,
    theme: PropTypes.string
};

export default PhoneNumber;