
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextTruncate from '../../TextTruncate';
import './InstaTag.scss';

const InstaTag = (props) => {
    const { tag }  = props;
    
    return (
        <div className="InstaTag">
            <div className="image-wrapper">
                <img src={tag.images.low_resolution.url}/>
            </div>
            <div className="info">
                <div className="counters">
                    <div className="count">
                        <FontAwesomeIcon icon="heart" />
                        <span>{tag.likes.count}</span>
                    </div>
                    <div className="count">
                        <FontAwesomeIcon icon="comment" />
                        <span>{tag.comments.count}</span>
                    </div>
                </div>

                <TextTruncate
                    className="page-description"
                    line={3}
                    truncateText="…"
                    text={tag.caption.text}
                />
                
                <div className="bg"></div>
            </div>
        </div>
    )
};

InstaTag.propTypes = {
    tag: PropTypes.object
};

export default InstaTag;