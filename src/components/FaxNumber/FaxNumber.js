import PropTypes from 'prop-types';
import FaxNumberStyles from './FaxNumber.scss';

const FaxNumber = ({theme, number}) => {

	return (
		<div className="FaxNumber">
            <span>{number}</span>
        </div>
	);
};

FaxNumber.propTypes = {
    number: PropTypes.string,
    theme: PropTypes.string
};

export default FaxNumber;