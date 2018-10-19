import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { PrintOutlined } from '@material-ui/icons';
import FaxNumberStyles from './FaxNumber.scss';

const FaxNumber = ({theme, number}) => {

	return (
		<div className="FaxNumber">
            <PrintOutlined>Fax</PrintOutlined>
            <span>{number}</span>
        </div>
	);
};

FaxNumber.propTypes = {
    number: PropTypes.string,
    theme: PropTypes.string
};

export default FaxNumber;