import PropTypes from 'prop-types';
import PhoneNumberStyles from './PhoneNumber.scss';

const PhoneNumber = ({theme, number}) => {


	return (
		<a href={`tel:${number}`} className="PhoneNumber">
            <span>{number}</span>
        </a>
	);
};

PhoneNumber.propTypes = {
    number: PropTypes.string,
    theme: PropTypes.string
};

export default PhoneNumber;