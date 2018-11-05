import PropTypes from 'prop-types';
import TextTruncate from '../../TextTruncate';
import { Player, ControlBar, PlayToggle} from 'video-react';
import './InstaPost.scss';

const InstaPost = (props) => { 
    const { tag }  = props;

    return (
        <div className="InstaPost">
            <div className="InstaHeader">
                <div className="InstaAvatarContainer">
                    <a className="Avatar" target="_blank">
                        <img src={tag.user.profile_picture}/>
                    </a>
                </div>
                <div className="InstaHeaderText">
                    <a className="Username" href={tag.link} target="_blank">
                        <span className="UsernameText">{tag.user.username.toUpperCase()}</span>
                    </a>
                    <span className="FollowerCountText">
                        {tag.user.full_name}
                    </span>
                </div>
                <a className="LInkProfileButton" href={tag.link} target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteGlyph"></span>
                </a>
            </div>
            <div className="InstaContent">
                <a className="EmbeddedMedia" href={tag.link} target="_blank">
                    <img className="EmbeddedMediaImage" src={tag.images.standard_resolution.url}/>
                </a>
            </div>
            <div className="InstaFeedback">
                <a className="Likes" href={tag.link} target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteHeartOpen"></span>
                    <span className="LiksCountText">{tag.likes.count}</span>
                </a>
                {/* <a className="Comments" href="" target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteComment"></span>
                </a> */}
                <a className="Save" href={tag.link} target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteSaveOpen"></span>
                </a>
            </div>
            <div className="InstaDescription">
                <TextTruncate
                            className="Description"
                            line={3}
                            truncateText="…"
                            text={tag.caption.text}
                        />
            </div>
        </div>
    )
};

InstaPost.propTypes = {
    tag: PropTypes.object
};

export default InstaPost;

