import PropTypes from 'prop-types';
import CellNumberStyles from './CellNumber.scss';

const CellNumber = ({theme, number}) => {

	return (
		<a href={`tel:${number}`} className="CellNumber">
            <span>{number}</span>
        </a>
	);
};

CellNumber.propTypes = {
    number: PropTypes.string,
    theme: PropTypes.string
};

export default CellNumber;