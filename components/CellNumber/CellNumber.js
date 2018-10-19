import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { PhoneAndroidOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import CellNumberStyles from './CellNumber.scss';

const CellNumber = ({theme, number}) => {


	return (
		<Button href={`tel:${number}`} className="CellNumber">
            <PhoneAndroidOutlined>phone</PhoneAndroidOutlined>
            <span>{number}</span>
        </Button>
	);
};

CellNumber.propTypes = {
    number: PropTypes.string,
    theme: PropTypes.string
};

export default CellNumber;