import react, { Component } from 'react';
import PropTypes from 'prop-types';
import TextTruncate from '../../TextTruncate';
import { Player, ControlBar, PlayToggle } from 'video-react';
import './InstaPost.scss';
import InstaCarouselMedia from '../InstaCarouselMedia';


const InstaPost = (props) => {
    const {tag} = props;
	
	const renderMediaByType = () => {
		if (tag.carousel_media) {
            return (<InstaCarouselMedia carouselMedia={tag.carousel_media}/>)
		} else if (tag.videos) {
            return (
                <Player
                    autoPlay
                    poster={tag.images.standard_resolution.url}
                    src={tag.videos.standard_resolution.url}
                    >
                <ControlBar autoHide={false} disableDefaultControls={true}>
                    <PlayToggle />
                </ControlBar>
                </Player>
            )
		} else {
            return (
                <img
                    className="EmbeddedMediaImage"
                    src={tag.images.standard_resolution.url}
                />
            )
		}
	};

    return (
        <div className="InstaPost">
            <div className="InstaHeader">
                <div className="InstaAvatarContainer">
                    <a className="Avatar" target="_blank">
                        <img src={tag.user.profile_picture} />
                    </a>
                </div>
                <div className="InstaHeaderText">
                    <a
                        className="Username"
                        href={tag.link}
                        target="_blank"
                    >
                        <span className="UsernameText">
                            {tag.user.username.toUpperCase()}
                        </span>
                    </a>
                    <span className="FollowerCountText">
                        {tag.user.full_name}
                    </span>
                </div>
                <a
                    className="LInkProfileButton"
                    href={tag.link}
                    target="_blank"
                >
                    <span className="InstaEmbedSpriteComment embedSpriteGlyph" />
                </a>
            </div>
            <div className="InstaContent">
                <div className="EmbeddedMedia">
                    {renderMediaByType()}
                </div>
            </div>
            <div className="InstaFeedback">
                <a className="Likes" href={tag.link} target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteHeartOpen" />
                    <span className="LiksCountText">
                        {tag.likes.count}
                    </span>
                </a>
                {/* <a className="Comments" href="" target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteComment"></span>
                </a> */}
                <a className="Save" href={tag.link} target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteSaveOpen" />
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
    );
	
}

InstaPost.propTypes = {
	tag: PropTypes.object
};

export default InstaPost;
