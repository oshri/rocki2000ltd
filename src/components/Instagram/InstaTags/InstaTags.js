import PropTypes from 'prop-types';
import LoadingHoc from '../../../HOC/LoadingHoc';
import InstaTag from '../InstaTag';
import './InstaTags.scss';

const InstaTags = (props) => {
    
    return (
        <div className="InstaTags">
            {
                props.tags.map((tag, index) => <InstaTag key={index} tag={tag} />)
            }
        </div>
    )
};

InstaTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object)
};

export default LoadingHoc('tags')(InstaTags);